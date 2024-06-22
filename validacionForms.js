// página para realizar la validacion de formulario de ingreso a la pagina web

// usuarios y contraseñas precargados:
let users = {
    "user1":{
        Email: "jSanchez777@gmail.com",
        Contraseña: "30agosto1998"
    },
    "user2":{
        Email: "LuisGuti45@hotmail.com",
        Contraseña: "qwerty123"
    },
    "user3":{
        Email: "MigueH2000@yahoo.com",
        Contraseña: "contraseña"
    }
};

function mostrarForm(){
    // alert("fui clickeado");
    var registro = document.getElementById("registro");
    var registrarse = document.getElementById("ingreso");
    var parrafoSoyNuevo = document.getElementById("imNew");
    registro.style.display = 'block';
    registrarse.style.display = 'none';
    parrafoSoyNuevo.style.display = 'none';
    document.getElementById('box-form').style.height = '500px';
    /* manualmente, me aseguro de que todos los estilos se apliquen .*/
    // var formulario = document.getElementsByTagName("form")[1];
    /* la coleccion devuelta no es un array real sino un objeto de tipo
    'HTML collection'. Puedo convertirla a coleccion usando Array.from */
    registro.style.marginTop = '50px';
    registro.style.textAlign = 'center';
    return registro;
}

function nombreValido(names){
    var namesInput = names.value;

    var expresionNames = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
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

function mailValido(email){
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

function validar(){
    const nombreYapellidoValid = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    var validezForm = true;

    var registro = document.getElementById("registro");
    if(registro.style.display === 'block'){ // si el registro ahora se muestra visible, valido los campos del mismo.
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
        if( (contraseña.value != contraDenuevo.value) ||
         (!contraseñaValida(contraseña))){
            validezForm = false;
        }
        if(!(contraseñaValida(contraDenuevo))){
            validezForm = false;
        }

    }else{
        var emailExists = document.getElementById("email");
        var contraExists = document.getElementById("contraseña");

        if(!mailValido(emailExists)){
            validezForm = false;
        }
        if(!contraseñaValida(contraExists)){
            validezForm = false;
        }
    }   
    return validezForm;
}