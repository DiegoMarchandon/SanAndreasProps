// página para realizar la validacion de formulario de ingreso a la pagina web

const boxForm = document.getElementById('box-form');

// usuarios y contraseñas precargados:
let users = {
    "user1":{
        Email: "jSanchez777@gmail.com",
        Contraseña: "30agosto1998",
        Tipo: "Cliente",
        Favoritas: [],
        Conectado: false
    },
    "user2":{
        Email: "LuisGuti45@hotmail.com",
        Contraseña: "qwerty123",
        Tipo: "Cliente",
        Favoritas: [],
        Conectado: false
    },
    "user3":{
        Email: "MigueH2000@yahoo.com",
        Contraseña: "contraseña",
        Tipo: "Cliente",
        Favoritas: [],
        Conectado: false
    },
    "user4":{
        Email: "CarlJohnsonCJ@hotmail.com",
        Contraseña: "GrooveStreet",
        Tipo: "Corredor",
        PropsGuardadas: [],
        Conectado: false
    }
};
// local storage guarda string. Y lo que tengo es un objeto. Por los que necesito convertirlo a un formato que pueda ser guardado
// Para ello, utilizo JSON.stringify, este último se encarga de recibir el objeto y convertirlo a string

// utilizo stringify para "stringificar" el objeto (convertirlo a string) y de esa forma poder guardarlo en localStorage 
localStorage.setItem("usuarios", JSON.stringify(users));
// console.log(localStorage.getItem("usuarios", JSON.stringify(users)));


// obtengo los nombres de usuario almacenados en el localStorage
// parseo el JSON para volver a obtener el objeto javascript. 
let usersGuardados = JSON.parse(localStorage.getItem('usuarios'));
function compareUserData(){
    let usuarioExistente = false;
    let mailIngresado = document.getElementById("email").value;
    let contraIngresada = document.getElementById("contraseña").value;
    // recorro los usuarios almacenados para verificar 
    // si el mail ingresado coincide coincide con alguno de los emails de los usuarios 
    let userNum = 0;
    do{
        let clave = Object.keys(usersGuardados)[userNum];
        console.log("clave: "+clave);
        let valorMail = usersGuardados[clave].Email;
        console.log("Mail: "+valorMail);
        let valorContraseña = usersGuardados[clave].Contraseña;
        console.log("Contraseña: "+valorContraseña);
        if(valorMail == mailIngresado && valorContraseña == contraIngresada){
            usuarioExistente = true;
            // cambio el booleano a true para indicar que está conectado
            usersGuardados[clave].Conectado = true;
            // guardo el cambio nuevamente en localStorage
            localStorage.setItem("usuarios",JSON.stringify(usersGuardados));
        }else{ //sino, lo pongo en false (en caso de haber dejado alguno true)
            usersGuardados[clave].Conectado = false;
            // guardo el cambio nuevamente en localStorage
            localStorage.setItem("usuarios",JSON.stringify(usersGuardados));
        }
        userNum++;
    }while(userNum < Object.keys(usersGuardados).length && !usuarioExistente);

    return !usuarioExistente;
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
    boxForm.style.height = '500px';
    /* manualmente, me aseguro de que todos los estilos se apliquen .*/
    // var formulario = document.getElementsByTagName("form")[1];
    /* la coleccion devuelta no es un array real sino un objeto de tipo
    'HTML collection'. Puedo convertirla a coleccion usando Array.from */
    registro.style.marginTop = '50px';
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

    // var email = document.getElementById("email");
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
            alert("todos los datos validos");
            let cantClaves = Object.keys(usersGuardados).length;
            let userNro = "user"+(cantClaves+1);
            usersGuardados[userNro] = {
                Email: email.value,
                Contraseña: contraseña.value
            };
            // actualizo el localStorage con el nuevo usuario
            localStorage.setItem('usuarios', JSON.stringify(usersGuardados));
            window.location.replace('index.html');
        }

    }else{ /* iniciar sesión */
        var emailExists = document.getElementById("email");
        var contraExists = document.getElementById("contraseña");

        /* if(!mailValido(emailExists)){
            validezForm = false;
        }
        if(!contraseñaValida(contraExists)){
            validezForm = false;
        } else{
            contraExists.style.borderColor = 'green';
        } */
        if(compareUserData()){
            validezForm = false;
            emailExists.style.borderColor = 'red';
            contraExists.style.borderColor = 'red';
            
            const noEncontrado = document.createElement('p');
            noEncontrado.innerText = 'email y contraseña no encontrados.';
            noEncontrado.style.color = 'red';
            noEncontrado.style.marginTop = '50px';
            noEncontrado.style.marginLeft = '20px';

            const ultimoHijo = boxForm.lastElementChild;
            boxForm.insertBefore(noEncontrado,ultimoHijo);
        }

        if(validezForm){
            alert("el usuario existe");
            window.location.replace('index.html');
            // guardo en localStorage una clave-valor para cambiar el iniciar sesión a cerrar sesión
            localStorage.setItem('usuarioRegistrado','true');
        }
    }   
    return validezForm;
}

