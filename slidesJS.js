let coleccionIMG = [
    'imagenes/slider/paisaje.jpg',
    'imagenes/slider/RE59Mik.jpg',
    'imagenes/slider/vista.jpg'
];

let casasLS = {
    ["Verdant Bluffs", 'casa',''],
    []
};


let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');


let actualIndex = 0;

function cambioImagen(action){
    var contenedorIMG = document.querySelector(".img-container");
    if(action === 'next'){
        // alert("boton siguiente");
        // aplico el resto % para que en caso de llegar al final, se pueda reiniciar
        actualIndex = (actualIndex +1) % coleccionIMG.length;
    }else if(action === 'prev'){
        // alert("boton anterior");
        actualIndex = (actualIndex -1 + coleccionIMG.length) % coleccionIMG.length;
    }else{
        // alert("ningun boton");
    }
    contenedorIMG.style.backgroundImage = 'url('+coleccionIMG[actualIndex]+')';
}

prevButton.addEventListener('click', function(){
    // alert("llamado previo");
    cambioImagen('prev');  
});

nextButton.addEventListener('click', function(){
    // alert("llamado siguiente");
    cambioImagen('next');
});