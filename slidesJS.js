let coleccionIMG = [
    'imagenes/slider/paisaje.jpg',
    'imagenes/slider/puesta de sol.jpg',
    'imagenes/slider/RE59Mik.jpg',
    'imagenes/slider/vista.jpg'
];

let actualIndex = 0;

function cambioImagen(direccion){
    var contenedorIMG = document.getElementsByClassName("img-container")[0];
    if(direccion == 'siguiente'){
        // aplico el resto % para que en caso de llegar al final, se pueda reiniciar
        actualIndex = (actualIndex +1) % coleccionIMG.length;
    }else if(direccion == 'anterior'){
        actualIndex = (actualIndex -1 + coleccionIMG.length) % coleccionIMG.length;
    }
    contenedorIMG.style.backgroundImage = 'url('+coleccionIMG[actualIndex]+')';
}