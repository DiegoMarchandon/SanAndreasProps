import imagenes from './imagenes.js';

/* 
ciudades/pueblos de San Andreas: 
Red County: Dillimore, Blueberry, Montgomery, Palomino Creek.
Flint County: Back O' Beyond, Beacon Hill, Easter Bay Chemicals, Fallen Tree, Flint Range.
Whetstone: Angel Pine, Mount Chiliad.
Tierra Robada: El Quebrado, Bayside, Aldea Malvada, Las Barrancas, Valle Ocultado
Bone County: Fort Carson, Las Payasadas, Las Brujas, The Big Ear, Área Restringida, 
Aeropuerto de Verdant Meadows.
Las Venturas, San Fierro, Los Santos
*/

/* barrios de Los Santos:
Richman, Rodeo, Santa Maria Beach, Marina, Vinewood, Verona Beach, Mulholland, Temple,
Market, Conference Centre, Verdant Bluffs, Downtown, Cruce de Mulholland, Commerce, 
Pershing Square, Little Mexico, El Corona, Los Santos Internacional, Glen Park, Idlewood,
Las Colinas, Jefferson, East Los Santos, Las Flores, East Beach, Ganton, Willowfield, 
Playa de Seville, Ocean Docks
*/

/* barrios de San Fierro:
Doherty, García, Chinatown, Downtown/Financial, Easter Basin, King's, Queens, Missionary Hill,
City Hall, Santa Flora, Hashbury, Paradiso, Battery Point, Juniper Hill, Juniper Hollow, Ocean Flats,
Calton Heights, Avispa Country Club, Palisades, Foster Valley, Esplanade North, Esplanade East, 
Easter Bay Airport
*/

/* barrios de Las Venturas:
The Strip, Old Venturas Strip, Blackfield, Pilgrim, The Camel's Toe, Come-A-Lot, Whitewood Estates, 
The Emerald Isle, Roca Escalante, Redsands West, Rockshore East, Rockshore West, Prickle Pine, Spinybed,
K.A.C.C. Military Fuels, Creek, Randolph Industrial Estate, Yellow Bell Golf Course, Greenglass College, 
Aeropuerto Las Venturas, The Pirates In Men's Pants
*/

let coleccionIMG = [
    'imagenes/slider/paisaje.jpg',
    'imagenes/slider/RE59Mik.jpg',
    'imagenes/slider/vista.jpg'
];

let casasLS = {
    casa1LS: {
        localidad: "Los Santos",
        ubicacion: "Verdant Bluffs",
        tipoProp: "Casa",
        opcion: "Alquilar",
        precio: 355000,
        moneda: "ARS",
        imagenes: Casa1LSfotos
    },
    Casa2LS: {
        localidad: "Los Santos",
        ubicacion: "Willowfield",
        tipoProp: "Casa",
        opcion: "Comprar",
        precio: 15000,
        moneda: "USD",
        imagenes: Casa2LSfotos
    },
    Casa3LS: {
        localidad: "Los Santos",
        ubicacion: "Ganton",
        tipoProp: "Casa",
        opcion: "Comprar",
        precio: 45000,
        moneda: "USD",
        imagenes: Casa3LSfotos
    },
    Casa4LSfotos: {
        localidad: "Los Santos",
        ubicacion: "Jefferson",
        tipoProp: "Casa",
        opcion: "Comprar",
        precio: 15255000,
        moneda: "ARS",
        imagenes: Casa4LSfotos
    },
    Depto1LS: {
        localidad: "Los Santos",
        ubicacion: "Verona Beach",
        tipoProp: "Departamento",
        opcion: "Alquilar",
        precio: 1500,
        moneda: "USD",
        imagenes: Depto1LSfotos
    },
    Casa5LSfotos: {
        localidad: "Los Santos",
        ubicacion: "Santa Maria Beach",
        tipoProp: "Casa",
        opcion: "Alquilar",
        precio: 2500,
        moneda: "USD",
        imagenes: Casa5LSfotos
    },
    Depto2LS: {
        localidad: "Los Santos",
        ubicacion: "Rodeo",
        tipoProp: "Hotel",
        opcion: "Alquiler Temporario",
        precio: 75000,
        moneda: "ARS",
        imagenes: Depto2LSfotos
    },
    Mansion1LS: {
        localidad: "Los Santos",
        ubicacion: "Mulholland",
        tipoProp: "Casa",
        opcion: "Comprar",
        precio: 500000,
        moneda: "USD",
        imagenes: Mansion1LSfotos
    },
    Mansion2LS: {
        localidad: "Los Santos",
        ubicacion: "Mulholland",
        tipoProp: "Casa",
        opcion: "Comprar",
        precio: 55451323,
        moneda: "ARS",
        imagenes: Mansion2LSfotos
    }
};

let casasSF = {
    Casa1SF: {
        localidad: "San Fierro",
        ubicacion: "Doherty",
        tipoProp: "Casa",
        opcion: "Comprar",
        precio: 12150200,
        moneda: "ARS",
        imagenes: Casa1SFfotos
    },
    Casa2SF: {
        localidad: "San Fierro",
        ubicacion: "Doherty",
        tipoProp: "Casa",
        opcion: "Comprar",
        precio: 35000,
        moneda: "USD",
        imagenes: Casa2SFfotos
    },
    Casa3SF: {
        localidad: "San Fierro",
        ubicacion: "Hashbury",
        tipoProp: "Casa",
        opcion: "Alquilar",
        precio: 3500,
        moneda: "USD",
        imagenes: Casa3SFfotos
    },
    Depto1SF: {
        localidad: "San Fierro",
        ubicacion: "Queens",
        tipoProp: "Hotel",
        opcion: "Alquiler Temporario",
        precio: 85120,
        moneda: "ARS",
        imagenes: Depto1SFfotos
    },
    Casa4SF: {
        localidad: "San Fierro",
        ubicacion: "Chinatown",
        tipoProp: "Casa",
        opcion: "Alquilar",
        precio: 122000,
        moneda: "ARS",
        imagenes: Casa4SFfotos
    },
    Casa5SF: {
        localidad: "San Fierro",
        ubicacion: "Calton Heights",
        tipoProp: "Casa",
        opcion: "Comprar",
        precio: 19750100,
        moneda: "ARS",
        imagenes: Casa5SFfotos
    },
    Casa6SF: {
        localidad: "San Fierro",
        ubicacion: "Paradiso",
        tipoProp: "Casa",
        opcion: "Alquilar",
        precio: 1300,
        moneda: "USD",
        imagenes: Casa6SFfotos
    }
};

let casasLV = {
    Casa1LV: {
        localidad: "Las Venturas",
        ubicacion: "Whitewood Estates",
        tipoProp: "Casa",
        opcion: "Alquilar",
        precio: 1550,
        moneda: "USD",
        imagenes: Casa1LVfotos
    },
    Casa2LV: {
        localidad: "Las Venturas",
        ubicacion: "Aeropuerto Las Venturas",
        tipoProp: "Casa",
        opcion: "Comprar",
        precio: 12500150,
        moneda: "ARS",
        imagenes: Casa2LVfotos
    },
    Casa3LV: {
        localidad: "Las Venturas",
        ubicacion: "Prickle Pine",
        tipoProp: "Casa",
        opcion: "Comprar",
        precio: 2250125,
        moneda: "USD",
        imagenes: Casa3LVfotos
    },
    Depto1LV: {
        localidad: "Las Venturas",
        ubicacion: "Old Venturas Strip",
        tipoProp: "Hotel",
        opcion: "Alquilar",
        precio: 1250,
        moneda: "USD",
        imagenes: Depto1LVfotos
    },
    Depto2LV: {
        localidad: "Las Venturas",
        ubicacion: "Creek",
        tipoProp: "Hotel",
        opcion: "Alquiler Temporario",
        precio: 150,
        moneda: "USD",
        imagenes: Depto2LVfotos
    },
    Depto3LV: {
        localidad: "Las Venturas",
        ubicacion: "The Clown's Pocket",
        tipoProp: "Hotel",
        opcion: "Alquiler Temporario",
        precio: 95000,
        moneda: "ARS",
        imagenes: Depto3LVfotos
    },
    Depto4LV: {
        localidad: "Las Venturas",
        ubicacion: "The Pirates In Men's Pants",
        tipoProp: "Departamento",
        opcion: "Alquilar",
        precio: 750000,
        moneda: "ARS",
        imagenes: Depto4LVfotos
    },
    Depto5LV: {
        localidad: "Las Venturas",
        ubicacion: "The Camel's Toe",
        tipoProp: "Hotel",
        opcion: "Alquilar",
        precio: 525000,
        moneda: "ARS",
        imagenes: Depto5LVfotos
    },

    Casa4LV: {
        localidad: "Las Venturas",
        ubicacion: "Rockshore West",
        tipoProp: "Casa",
        opcion: "Alquilar",
        precio: 150000,
        moneda: "ARS",
        imagenes: Casa4LVfotos
    }
}

const contenedorPropiedades = document.getElementById('vistaPropiedades');


/**
 * crea un div a partir de un elemento del arreglo de coleccion de casas
 */
function divProp(propiedad){
    // creo un nuevo div
const divPropiedad = document.createElement('div');



// agrego el nuevo div dentro del contenedor principal
contenedorPropiedades.appendChild(divPropiedad);
}

/**
 * muestra una coleccion de propiedades que cumplen con el filtro
 */
function colProps(){

}



let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

let actualIndex = 0;

/**
 * cambia la imagen del slide
*/
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