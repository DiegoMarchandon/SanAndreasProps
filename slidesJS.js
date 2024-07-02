// import imagenes from './imagenes.js';
import {
    Casa1LSfotos, Casa2LSfotos, Casa3LSfotos, Casa4LSfotos, Depto1LSfotos, 
    Casa5LSfotos, Depto2LSfotos, Mansion1LSfotos, Mansion2LSfotos, Casa1SFfotos, 
    Casa2SFfotos, Casa3SFfotos, Depto1SFfotos, Casa4SFfotos, Casa5SFfotos, 
    Casa6SFfotos, Casa1LVfotos, Casa2LVfotos, Casa3LVfotos, Depto1LVfotos, 
    Depto2LVfotos, Depto3LVfotos, Depto4LVfotos, Depto5LVfotos, Casa4LVfotos
} from './imagenes.js';
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
/* 
let coleccionIMG = [
    'imagenes/slider/paisaje.jpg',
    'imagenes/slider/RE59Mik.jpg',
    'imagenes/slider/vista.jpg'
];
 */

let casasTotales = {
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
    Casa4LS: {
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
    Casa5LS: {
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
    },
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
    },
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
};

// contenedor principal de las propiedades
const contenedorPropiedades = document.getElementById('vistaPropiedades');

// elimino todos los elementos del contenedor padre uno por uno
/* while(contenedorPropiedades.firstChild){
    contenedorPropiedades.removeChild(contenedorPropiedades.firstChild);
} */

/**
 * crea un div a partir de un elemento del arreglo de coleccion de casas
 */
function divProp(propiedad){

// creo un nuevo div
const divPropContainer = document.createElement('div');
divPropContainer.className = 'prop-container';

// creo el div de los slides
const divSlideContainer = document.createElement('div');
divSlideContainer.className = 'img-container';

const buttonNext = document.createElement('button');
buttonNext.id = 'next';
const imgNext = document.createElement('img');
imgNext.src = 'imagenes/arrowNextPrev.png';
imgNext.alt = 'next';
imgNext.id = 'nextIMG';
buttonNext.appendChild(imgNext);

const buttonPrev = document.createElement('button');
buttonPrev.id = 'prev';
const imgPrev = document.createElement('img');
imgPrev.src = 'imagenes/arrowNextPrev.png';
imgPrev.alt = 'prev';
imgPrev.id = 'prevIMG';
buttonPrev.appendChild(imgPrev);

divSlideContainer.append(buttonPrev, buttonNext);

// creo el div de los textos descriptivos
const divTextsContainer = document.createElement('div');
divTextsContainer.className = 'text-prop';

const propValue = document.createElement('p');
propValue.id = 'propValue';
propValue.textContent = propiedad.precio;

const tipoCambio = document.createElement('p');
tipoCambio.id = 'tipoCambio';
tipoCambio.textContent = propiedad.moneda;

const ciudadPropiedad = document.createElement('p');
ciudadPropiedad.id = 'ciudadPropiedad';
ciudadPropiedad.textContent = propiedad.localidad;

const propZona = document.createElement('p');
propZona.id = 'propZona';
propZona.textContent = propiedad.ubicacion;

const buttonFavoritos = document.createElement('button');
buttonFavoritos.id = 'favoritos';

const imgFavoritos = document.createElement('img');
imgFavoritos.src = 'imagenes/orangeHeart.png';
imgFavoritos.alt = 'imagen de favorito';
buttonFavoritos.appendChild(imgFavoritos);

// incorporo todos los elementos text al div
divTextsContainer.append(propValue,tipoCambio,ciudadPropiedad,propZona,buttonFavoritos);

// incorporo ambos divs al div principal
divPropContainer.append(divSlideContainer,divTextsContainer);

var propImagenes = propiedad.imagenes;

cambioImagen('next', divSlideContainer, propImagenes);

contenedorPropiedades.appendChild(divPropContainer);
return divPropContainer;
}

// limpio el contenedor padre antes de crear nuevos
    // contenedorPropiedades.innerHTML = '';

/**
 * almacena los valores recibidos en los inputs y que se envían al presionar submit
 * y aplica el filtro mostrando en el contenedor las propiedades que cumplen
 */
function filtro(event){
    // evito que el formulario se envíe
    event.preventDefault();

    // obtengo los valores de los inputs y select
    const selectCiudad = document.getElementById("selectLocalidad").value;
    const inputBarrio = document.getElementById("inputZona").value;
    const selectProp = document.getElementById("selectPropiedad").value;
    const selectAccion = document.getElementById("selectAccion").value;
    const selectMoneda = document.getElementById("moneda").value;
    const inputValorMin = document.getElementById("desdeValue").value;
    const inputValorMax = document.getElementById("hastaValue").value; 

    var valorMin = parseInt(inputValorMin);
    var valorMax = parseInt(inputValorMax); 

    Object.values(casasTotales).forEach(casa => {
        if((casa.localidad === selectCiudad || selectCiudad === "Todas") &&
         (casa.ubicacion === inputBarrio || inputBarrio === "" ) &&
         (casa.tipoProp === selectProp || selectProp === "Todas") &&
         (casa.opcion === selectAccion || selectAccion === "") && 
         (casa.moneda === selectMoneda) && 
         ((casa.precio > valorMin && casa.precio < valorMax) || 
          (inputValorMin === "" && inputValorMax === "") ||
          (inputValorMin === "" && casa.precio < valorMax) ||
          (casa.precio > valorMin && inputValorMax === ""))){
            divProp(casa);
        }
    });
}

var actualIndex = 0;
/**
 * cambia la imagen del slide
*/
function cambioImagen(action, contenedorIMG, coleccionIMG){


    if(action === 'next'){
        // aplico el resto % para que en caso de llegar al final, se pueda reiniciar
        actualIndex = (actualIndex +1) % coleccionIMG.length;
    }else if(action === 'prev'){
        actualIndex = (actualIndex -1 + coleccionIMG.length) % coleccionIMG.length;
    }
    contenedorIMG.style.backgroundImage = 'url('+coleccionIMG[actualIndex]+')';
}


let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

prevButton.addEventListener('click', function(){

cambioImagen('prev', contenedorIMG, coleccionIMG);  
});

nextButton.addEventListener('click', function(){

cambioImagen('next', contenedorIMG, coleccionIMG);
});

/* llamo al formulario */
document.getElementById("form-filtros").addEventListener('submit',filtro);