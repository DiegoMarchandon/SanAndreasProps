// página para realizar la validacion de formulario de ingreso a la pagina web

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
}