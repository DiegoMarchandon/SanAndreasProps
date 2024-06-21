// página para realizar la validacion de formulario de ingreso a la pagina web

function mostrarForm(){
    // alert("fui clickeado");
    /* utilizar ByTagName para el <u> y le agregamos el id a la etiqueta p que vamos a ocultar también. */
    var nuevoUsuario = document.getElementById("nuevoUsuario");
    var registrarse = document.getElementById("registro");
    var parrafoSoyNuevo = document.getElementById("imNew");
    nuevoUsuario.style.display = 'block';
    registrarse.style.display = 'none';
    parrafoSoyNuevo.style.display = 'none';
    document.getElementById('box-form').style.height = '500px';
    /* manualmente, me aseguro de que todos los estilos se apliquen .*/
    // var formulario = document.getElementsByTagName("form")[1];
    /* la coleccion devuelta no es un array real sino un objeto de tipo
    'HTML collection'. Puedo convertirla a coleccion usando Array.from */
    nuevoUsuario.style.marginTop = '50px';
    nuevoUsuario.style.textAlign = 'center';
}