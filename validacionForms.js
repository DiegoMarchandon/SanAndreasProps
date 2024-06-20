// página para realizar la validacion de formulario de ingreso a la pagina web

function mostrarForm(){
    // alert("fui clickeado");
    /* utilizar ByTagName para el <u> y le agregamos el id a la etiqueta p que vamos a ocultar también. */
    var nuevoUsuario = document.getElementById("nuevoUsuario");
    var registrarse = document.getElementById("registro");
    nuevoUsuario.style.display = 'block';
    registrarse.style.display = 'none';
}