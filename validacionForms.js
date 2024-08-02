// página para realizar la validacion de formulario de ingreso a la pagina web

const boxForm = document.getElementById('box-form');

// usuarios y contraseñas precargados:
/* let users = {
    "user1":{
        Username: "jSanchez", 
        Nombre: "Jose",
        Apellido: "Sanchez",
        Email: "jSanchez777@gmail.com",
        Contraseña: "30agosto1998",
        Tipo: "Cliente",
        Favoritas: [],
        Conectado: false
    },
    "user2":{
    Username: "LuisGuti45",
        Nombre: "Luis",
        Apellido: "Gutierrez",
        Email: "LuisGuti45@hotmail.com",
        Contraseña: "qwerty123",
        Tipo: "Cliente",
        Favoritas: [],
        Conectado: false
    },
    "user3":{
        Username: "MigueH2000",
        Nombre: "Miguel",
        Apellido: "Hernandez",
        Email: "MigueH2000@yahoo.com",
        Contraseña: "contraseña",
        Tipo: "Cliente",
        Favoritas: [],
        Conectado: false
    },
    "user4":{
        Username: "CarlJohnson",
        Nombre: "Carl",
        Apellido: "Johnson",
        Email: "CarlJohnsonCJ@hotmail.com",
        Contraseña: "GrooveStreet",
        Tipo: "Agente",
        PropsGuardadas: [],
        Contactos: [],
        Conectado: false
    }
}; */
// local storage guarda string. Y lo que tengo es un objeto. Por los que necesito convertirlo a un formato que pueda ser guardado
// Para ello, utilizo JSON.stringify, este último se encarga de recibir el objeto y convertirlo a string

// utilizo stringify para "stringificar" el objeto (convertirlo a string) y de esa forma poder guardarlo en localStorage 
// localStorage.setItem("usuarios", JSON.stringify(users));
// console.log(localStorage.getItem("usuarios", JSON.stringify(users)));


/**
 * Guardo los cambios hechos en la información del usuario
 * Recibe por parametro la variable de objetos, la stringifica y la guarda.
 */
/* export function guardoCambios(objUsers){
    localStorage.setItem("usuarios",JSON.stringify(objUsers));
} */

// obtengo los nombres de usuario almacenados en el localStorage
// parseo el JSON para volver a obtener el objeto javascript. 
let usersGuardados = JSON.parse(localStorage.getItem('usuarios'));

/**
 * compara los datos ingresados en los inputs de email y contraseña de Iniciar Sesion 
 * con los datos almacenados en localStorage para comprobar que existe un usuario con esos datos.
 */
export function compareUserData(){
    let usuarioExistente = false;

    let mailIngresado = document.getElementById("emailUser").value;
    console.log("mail ingresado: " + mailIngresado);
    let contraIngresada = document.getElementById("contraseña").value;
    // recorro los usuarios almacenados para verificar 
    // si el mail ingresado coincide coincide con alguno de los emails de los usuarios 
    let userNum = 0;
    do{
        let clave = Object.keys(usersGuardados)[userNum];
        // console.log("clave: "+clave);
        let valorMail = usersGuardados[clave].Email;
        // console.log("Mail: "+valorMail);
        let valorContraseña = usersGuardados[clave].Contraseña;
        // console.log("Contraseña: "+valorContraseña);
        if(valorMail == mailIngresado && valorContraseña == contraIngresada){
            usuarioExistente = true;
            console.log("usuario encontrado. Su estado de Conectado actual es: " + usersGuardados[clave].Conectado);
            // cambio el booleano a true para indicar que está conectado
            usersGuardados[clave].Conectado = true;
            console.log("Ahora es: " + usersGuardados[clave].Conectado);
            // guardo el cambio nuevamente en localStorage
            // localStorage.setItem("usuarios",JSON.stringify(usersGuardados));
            console.log("comprobando que después del nuevo seteo, su valor es: "+usersGuardados[clave].Conectado);
        }else{ //sino, lo pongo en false (en caso de haber dejado alguno true)
            console.log("no hubo ningún usuario encontrado.");
            usersGuardados[clave].Conectado = false;
            // guardo el cambio nuevamente en localStorage
        }
        localStorage.setItem("usuarios",JSON.stringify(usersGuardados));
        userNum++;
    }while(userNum < Object.keys(usersGuardados).length && !usuarioExistente);

    return usuarioExistente;
}
console.log("impresion externa del obj "+ JSON.stringify(usersGuardados));

// creo variables que voy a exportar para manipular el localStorage de usuarios

/**
 * Manipula el objeto usuario conectado y guarda los cambios
 */
export function objUsuario(clave, valor, accion = 'agregar'){
    let nroUsuario = 0;

    let bandera = false;
    do{
        // obtengo un arreglo con las claves (usuarios)
    let nameUsers = Object.keys(usersGuardados)[nroUsuario];
        // itero sobre los nombres de usuario
    // console.log("el estado de conexion del usuario "+nameUsers+" es "+usersGuardados[nameUsers].Conectado);
    if(usersGuardados[nameUsers].Conectado === true){
        bandera = true;
        // verifico si la clave ingresada por parametro es un arreglo:
        if(Array.isArray(usersGuardados[nameUsers][clave])){
            if(accion === 'agregar'){ //si se mantiene la accion por defecto
                // si lo es, guardamos el valor como un elemento pusheado 
                usersGuardados[nameUsers][clave].push(valor);
            }else{ //si se eliminan
                const userFavoritas = usersGuardados[nameUsers]["Favoritas"];
                const indice = userFavoritas.findIndex(arr=> JSON.stringify(arr) === JSON.stringify(valor));
                // let index = usersGuardados[nameUsers][clave].indexOf(valor);
                console.log(indice);
                if (indice > -1) { //si se encontró el índice, retorna el número referente a su posición
                    usersGuardados[nameUsers][clave].splice(indice, 1);
                    console.log("indice encontrado y eliminado. Ahora están: "+ usersGuardados[nameUsers][clave]);
                }else{
                    console.log("no se encontró el indice");
                }
            }
        }else{
            // si no es un arreglo, simplemente guardamos el valor en la clave
            usersGuardados[nameUsers][clave] = valor;
        }
    }
    nroUsuario++;
        // usersGuardados[nameUsers].Conectado 
    }while(nroUsuario < Object.keys(usersGuardados).length && !bandera);
    // guardo los cambios en el localStorage 
    localStorage.setItem('usuarios', JSON.stringify(usersGuardados));
}
// objUsuario();

/**
 * recorre el arreglo de objetos de usuarios almacenados y retorna el usuario conectado
 */
export function userConectado(){

    let userNames = Object.keys(usersGuardados);
    for(let i = 0; i < userNames.length; i++){
        if(usersGuardados[userNames[i]].Conectado === true){
            return usersGuardados[userNames[i]];
        }
    }
}

/**
 * desconecta al usuario.
 */

export function userDesconect(){
    let usuarioConectado = userConectado();
    usuarioConectado.Conectado = false;
    localStorage.setItem("usuarios",JSON.stringify(usersGuardados));
}

export function cambiarVisibilidad(){
    let ojoClick = document.getElementById("eyeButton");
    let mostrar = document.getElementById("showPass");
    let ocultar = document.getElementById("hidePass");
    let contraseña = document.getElementById("contraseña");
    ojoClick.addEventListener("click", function(event){
        // alert("mensaje");
        // event.preventDefault();
        if(mostrar.style.display === 'none'){
            ocultar.style.display = 'none';
            mostrar.style.display = 'inline';
            contraseña.type = 'text';
        }else{
            ocultar.style.display = 'inline';
            mostrar.style.display = 'none';
            contraseña.type = 'password';
        }
    })
}
export function mostrarForm(){
    // alert("fui clickeado");
    var registro = document.getElementById("registro");
    var registrarse = document.getElementById("ingreso");
    var parrafoSoyNuevo = document.getElementById("imNew");
    registro.style.display = 'block';
    registrarse.style.display = 'none';
    parrafoSoyNuevo.style.display = 'none';
    boxForm.style.height = '530px';
    // boxForm.style.width = '600px';
    /* manualmente, me aseguro de que todos los estilos se apliquen .*/
    // var formulario = document.getElementsByTagName("form")[1];
    /* la coleccion devuelta no es un array real sino un objeto de tipo
    'HTML collection'. Puedo convertirla a coleccion usando Array.from */
    registro.style.marginTop = '10px';
    registro.style.textAlign = 'center';
    return registro;
}

export function nombreValido(names){
    var namesInput = names.value;

    var expresionNames = /^[a-zA-ZÀ-ÿ\s]{2,40}$/; // Letras y espacios, pueden llevar acentos.
    var valido = true;
    
    if(!(expresionNames.test(namesInput))){
        valido = false;
        names.style.borderColor = 'red';
        names.placeholder = "nombre inválido";
    }else{
         
        names.style.borderColor = 'green';
    }

    return valido;
}

export function telefonoValido(telefono){
    var telefonoInput = telefono.value;
    const numeros = /^[0-9]{9,10}$/;
    var telValido = true;
    if(!numeros.test(telefonoInput)){
        telValido = false;
    }
    return telValido; 
}

export function mailValido(email){
    const emailValid = /^[a-zA-Z0-9][a-zA-Z0-9_.+-]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    // var email = document.getElementById("newEmail");
    var valido = true;

    // var email = document.getElementById("emailUser");
    var emailValor = email.value;
    var emailPartes = emailValor.split('@');
    var user = emailPartes[0];
    var dominio = emailPartes[1];

    if(!(emailValor.includes("@")) || (emailValor.includes("..")) || 
    user.length === 0 || dominio.length === 0 || user[0] === "." || dominio[0] === "."
        || user[user.length-1] === "." || dominio[dominio.length-1] === "."){
        valido = false;
    }
    if(!(emailValid.test(emailValor))){
        valido = false; 
        email.placeholder = "mail inválido";
        email.style.borderColor = 'red';
    }else{  
            
        email.style.borderColor = 'green';
    }
    
    return valido;
}

function contraseñaValida(contra){
    const contraseñaValid = /^.{4,12}$/; // 4 a 20 digitos.
    var valido = true;
    if(!(contraseñaValid.test(contra.value)) || contra.value.length == 0){
        valido = false;
        contra.placeholder = "contraseña inválida";
        contra.style.borderColor = 'red';
    }
    return valido;
}

function usernameValido(user){
    const usernameValid = /^[A-Za-z0-9]+$/;
    var valido = true;
    if(!(usernameValid.test(user.value))){
        user.style.borderColor = 'red';
        user.placeholder = 'username inválido';
        valido = false;
    }else{
        user.style.borderColor = 'green';
    }
    return valido;
}

// validar datos de un usuario nuevo. Si son todos válidos, se almacenan en el local storage
export function validar(){
    var validezForm = true;

    var registro = document.getElementById("registro");
    if(registro.style.display === 'block'){ /* registrarse (ahora se encuentra visible) */
        var nombre = document.getElementById("newNombre");
        var apellido = document.getElementById("newApellido");
        var email = document.getElementById("newEmail");
        var contraseña = document.getElementById("newContra");
        var contraDenuevo = document.getElementById("newContraRep");
        var newUsername = document.getElementById('newusername');
        
        if(!usernameValido(newUsername)){
            validezForm = false;
        }
        if(!mailValido(email)){
            validezForm = false;
        }
        if(!nombreValido(nombre)){
            validezForm = false;
        }
        if(!nombreValido(apellido)){
            validezForm = false;
        }
        // defino el elemento padre
        const elementoPadre = document.querySelector('#registro');
        if( contraseña.value !== contraDenuevo.value){
            validezForm = false;
            contraseña.style.borderColor = 'red';
            contraDenuevo.style.borderColor = 'red';
            
            // creo los nodos (si todavía no existen)
            if(elementoPadre.getElementsByTagName('p').length == 0){
                const parrafoAdvertencia = document.createElement('p');
                const textoAdvertencia = document.createTextNode("contraseñas distintas.");
                // agrego los nodos al elemento padre definido
                elementoPadre.appendChild(parrafoAdvertencia);
                parrafoAdvertencia.appendChild(textoAdvertencia);

            }
            

        }else{
            contraseña.style.borderColor = 'green';
            contraDenuevo.style.borderColor = 'green';
            const parrafoAdv = elementoPadre.querySelector('p');

            if(parrafoAdv){ /* si parrafoAdv existe */
                parrafoAdv.parentNode.removeChild(parrafoAdv);            

            }
        }
        if(!(contraseñaValida(contraseña))){
            validezForm = false;
        }
        if(!(contraseñaValida(contraDenuevo))){
            validezForm = false;
        }

        // si los datos son válidos, guardo el email y la contraseña
        if(validezForm){
            
            let cantClaves = Object.keys(usersGuardados).length;
            let userNro = "user"+(cantClaves+1);
            usersGuardados[userNro] = {
                Username: newUsername.value,
                Nombre: nombre.value,
                Apellido: apellido.value,
                Email: email.value,
                Contraseña: contraseña.value,
                Tipo: "Cliente",
                Favoritas: [],
                Conectado: true
            };
            // actualizo el localStorage con el nuevo usuario

            localStorage.setItem('usuarios', JSON.stringify(usersGuardados));
            
            localStorage.setItem('usuarios', JSON.stringify(usersGuardados));
            window.location.href = 'index.html';
            localStorage.setItem('usuarioRegistrado','true');
        }
        // para eliminar el ultimo registro duplicado:
        let numClaves = Object.keys(usersGuardados);
        let ultClave = numClaves[numClaves.length-1];
        delete usersGuardados[ultClave];
    }else{ /* iniciar sesión */
        var emailExists = document.getElementById("emailUser");
        var contraExists = document.getElementById("contraseña");

        if(!compareUserData()){ /* si el correo y la contraseña ingresadas no se encuentran */
            validezForm = false;
            emailExists.style.borderColor = 'red';
            contraExists.style.borderColor = 'red';
            document.getElementById('noEncontrado').style.display = 'block';

        }else{
            document.getElementById('noEncontrado').style.display = 'none';
        }

        if(validezForm){
            window.location.replace('index.html');
            // guardo en localStorage una clave-valor para cambiar el iniciar sesión a cerrar sesión
            localStorage.setItem('usuarioRegistrado','true');
        }
    }   
    return validezForm;
}

/**
 * verifico si el usuario que está conectado es el Agente para personalizar la página home 
 */
export function AgenteConected(){
    const containerHome = document.getElementById('home');
    let userAgente = userConectado();
    var buscaCiudadContainer = document.getElementsByClassName('buscarCiudad')[0];
    if(userAgente['Tipo'] === 'Agente'){
        buscaCiudadContainer.style.display = 'none';
        const contactosContainer = document.createElement('div');
        contactosContainer.id = 'contactosContainer';

        if(userAgente['Contactos'].length !== 0){            
        
        const contactosRec = document.createElement('h2');
        contactosRec.innerText = 'Contactos recientes';

        contactosContainer.appendChild(contactosRec);

        userAgente['Contactos'].forEach(arrContacto => {
            
            const contactoDiv = document.createElement('div');
            contactoDiv.className = 'contactoDiv';
            contactoDiv.id = 'contactoIDprop'+ arrContacto[0];

            const NyAContacto = document.createElement('p');
            NyAContacto.className = 'infoContacto';
            NyAContacto.innerHTML = 'Nombre y apellido: <b>' + arrContacto[1] + '</b>';

            const telContacto = document.createElement('p');
            telContacto.className = 'infoContacto';
            telContacto.innerHTML = 'Telefono: <b>' + arrContacto[2] + '</b>';

            const emailContacto = document.createElement('p');
            emailContacto.className = 'infoContacto';
            emailContacto.innerHTML = 'Email: <b>' + arrContacto[3] + '</b>';

            const idPropContacto = document.createElement('p');
            idPropContacto.className = 'infoContacto';
            idPropContacto.innerHTML = 'id de propiedad interesada: <b>' + arrContacto[0] + '</b>';

            const mensajeContacto = document.createElement('textarea');
            mensajeContacto.cols = 30;
            mensajeContacto.rows = 5;
            mensajeContacto.className = 'infoContacto';
            mensajeContacto.value = arrContacto[4];

            // para cambiar el estado de la propiedad o eliminar el container
            /* const buttonNegociar = document.createElement('button');
            buttonNegociar.className = 'negociarButton';
            buttonNegociar.innerText = 'Negociar propiedad'; */

            // botón para eliminar (tanto del localStorage como del div) el contacto realizado
            const buttonDescartar = document.createElement('button');
            buttonDescartar.className = 'descartarButton';
            buttonDescartar.innerText = 'Descartar contacto';

            contactoDiv.append(NyAContacto, telContacto, emailContacto, idPropContacto, mensajeContacto, buttonDescartar);
            contactosContainer.appendChild(contactoDiv);

            // si clickeo el botón 'descartar', se elimina el contenedor
            buttonDescartar.addEventListener('click', function(){    
                // lo elimino del contenedor
                contactoDiv.remove();
                // lo elimino también del localStorage
                let indiceContacto = usersGuardados['user4']['Contactos'].indexOf(arrContacto);
                usersGuardados['user4']['Contactos'].splice(indiceContacto, 1);
                localStorage.setItem("usuarios",JSON.stringify(usersGuardados));
            });

            /* buttonNegociar.addEventListener('click',function(){
                // accion de boton negociar
            }) */
        });


        }else{
            const sinContactos = document.createElement('h2');
            sinContactos.innerText = 'No hay contactos.';
            contactosContainer.appendChild(sinContactos);
        }
        containerHome.appendChild(contactosContainer);
    }else{
        console.log("el usuario conectado no es un Agente.");
        buscaCiudadContainer.style.display = 'flex';
    }
}