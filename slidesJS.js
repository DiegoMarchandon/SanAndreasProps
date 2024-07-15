// import imagenes from './imagenes.js';
import {
    Casa1LSfotos, Casa2LSfotos, Casa3LSfotos, Casa4LSfotos, Depto1LSfotos, 
    Casa5LSfotos, Depto2LSfotos, Mansion1LSfotos, Mansion2LSfotos, Casa1SFfotos, 
    Casa2SFfotos, Casa3SFfotos, Depto1SFfotos, Casa4SFfotos, Casa5SFfotos, 
    Casa6SFfotos, Casa1LVfotos, Casa2LVfotos, Casa3LVfotos, Depto1LVfotos, 
    Depto2LVfotos, Depto3LVfotos, Depto4LVfotos, Depto5LVfotos, Casa4LVfotos
} from './imagenes.js';
  
import {
    nombreValido, telefonoValido, mailValido
} from './validacionForms.js';

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

let casasTotales = {
    casa1LS: {
        localidad: "Los Santos",
        ubicacion: "Verdant Bluffs",
        tipoProp: "Casa",
        opcion: "Alquilar",
        precio: 355000,
        moneda: "ARS",
        ambientes: 4,
        baños: 1,
        dormitorio: 2,
        cochera: "si",
        antiguedad: 12,
        superficieCasa: 115,
        superficieTerreno: 175,
        imagenes: Casa1LSfotos,
        primaryKey: 1
    },
    Casa2LS: {
        localidad: "Los Santos",
        ubicacion: "Willowfield",
        tipoProp: "Casa",
        opcion: "Comprar",
        precio: 15000,
        moneda: "USD",
        ambientes: 1,
        baños: 1,
        dormitorio: 1,
        cochera: "no",
        antiguedad: 10,
        superficieCasa: 110,
        superficieTerreno: 120,
        imagenes: Casa2LSfotos,
        primaryKey: 2
    },
    Casa3LS: {
        localidad: "Los Santos",
        ubicacion: "Ganton",
        tipoProp: "Casa",
        opcion: "Comprar",
        precio: 45000,
        moneda: "USD",
        ambientes: 5,
        baños: 2,
        dormitorio: 3,
        cochera: "si",
        antiguedad: 8,
        superficieCasa: 124,
        superficieTerreno: 153,
        imagenes: Casa3LSfotos,
        primaryKey: 3
    },
    Casa4LS: {
        localidad: "Los Santos",
        ubicacion: "Jefferson",
        tipoProp: "Casa",
        opcion: "Comprar",
        precio: 15255000,
        moneda: "ARS",
        ambientes: 1,
        baños: 1,
        dormitorio: 1,
        cochera: "no",
        antiguedad: 5,
        superficieCasa: 132,
        superficieTerreno: 161,
        imagenes: Casa4LSfotos,
        primaryKey: 4
    },
    Depto1LS: {
        localidad: "Los Santos",
        ubicacion: "Verona Beach",
        tipoProp: "Departamento",
        opcion: "Alquilar",
        precio: 1500,
        moneda: "USD",
        ambientes: 4,
        baños: 1,
        dormitorio: 2,
        cochera: "no",
        antiguedad: 1,
        superficieCasa: 102,
        superficieTerreno: 102,
        imagenes: Depto1LSfotos,
        primaryKey: 5
    },
    Casa5LS: {
        localidad: "Los Santos",
        ubicacion: "Santa Maria Beach",
        tipoProp: "Casa",
        opcion: "Alquilar",
        precio: 2500,
        moneda: "USD",
        ambientes: 7,
        baños: 3,
        dormitorio: 4,
        cochera: "si",
        antiguedad: 2,
        superficieCasa: 126,
        superficieTerreno: 130,
        imagenes: Casa5LSfotos,
        primaryKey: 6
    },
    Depto2LS: {
        localidad: "Los Santos",
        ubicacion: "Rodeo",
        tipoProp: "Hotel",
        opcion: "Alquiler Temporario",
        precio: 75000,
        moneda: "ARS",
        ambientes: 1,
        baños: 1,
        dormitorio: 1,
        cochera: "si",
        antiguedad: 6,
        superficieCasa: 100,
        superficieTerreno: 100,
        imagenes: Depto2LSfotos,
        primaryKey: 7
    },
    Mansion1LS: {
        localidad: "Los Santos",
        ubicacion: "Mulholland",
        tipoProp: "Casa",
        opcion: "Comprar",
        precio: 500000,
        moneda: "USD",
        ambientes: 12,
        baños: 5,
        dormitorio: 6,
        cochera: "si",
        antiguedad: 1,
        superficieCasa: 290,
        superficieTerreno: 350,
        imagenes: Mansion1LSfotos,
        primaryKey: 8
    },
    Mansion2LS: {
        localidad: "Los Santos",
        ubicacion: "Mulholland",
        tipoProp: "Casa",
        opcion: "Comprar",
        precio: 55451323,
        moneda: "ARS",
        ambientes: 6,
        baños: 3,
        dormitorio: 3,
        cochera: "si",
        antiguedad: 2,
        superficieCasa: 180,
        superficieTerreno: 217,
        imagenes: Mansion2LSfotos,
        primaryKey: 9
    },
    Casa1SF: {
        localidad: "San Fierro",
        ubicacion: "Doherty",
        tipoProp: "Casa",
        opcion: "Comprar",
        precio: 12150200,
        moneda: "ARS",
        ambientes: 4,
        baños: 1,
        dormitorio: 3,
        cochera: "no",
        antiguedad: 10,
        superficieCasa: 150,
        superficieTerreno: 150,
        imagenes: Casa1SFfotos,
        primaryKey: 10
    },
    Casa2SF: {
        localidad: "San Fierro",
        ubicacion: "Doherty",
        tipoProp: "Casa",
        opcion: "Comprar",
        precio: 35000,
        moneda: "USD",
        ambientes: 1,
        baños: 1,
        dormitorio: 1,
        cochera: "si",
        antiguedad: 13,
        superficieCasa: 147,
        superficieTerreno: 245,
        imagenes: Casa2SFfotos,
        primaryKey: 11
    },
    Casa3SF: {
        localidad: "San Fierro",
        ubicacion: "Hashbury",
        tipoProp: "Casa",
        opcion: "Alquilar",
        precio: 3500,
        moneda: "USD",
        ambientes: 3,
        baños: 1,
        dormitorio: 1,
        cochera: "si",
        antiguedad: 8,
        superficieCasa: 135,
        superficieTerreno: 190,
        imagenes: Casa3SFfotos,
        primaryKey: 12
    },
    Depto1SF: {
        localidad: "San Fierro",
        ubicacion: "Queens",
        tipoProp: "Hotel",
        opcion: "Alquiler Temporario",
        precio: 85120,
        moneda: "ARS",
        ambientes: 1,
        baños: 1,
        dormitorio: 1,
        cochera: "si",
        antiguedad: 0,
        superficieCasa: 101,
        superficieTerreno: 101,
        imagenes: Depto1SFfotos,
        primaryKey: 13
    },
    Casa4SF: {
        localidad: "San Fierro",
        ubicacion: "Chinatown",
        tipoProp: "Casa",
        opcion: "Alquilar",
        precio: 122000,
        moneda: "ARS",
        ambientes: 2,
        baños: 1,
        dormitorio: 1,
        cochera: "no",
        antiguedad: 9,
        superficieCasa: 112,
        superficieTerreno: 119,
        imagenes: Casa4SFfotos,
        primaryKey: 14
    },
    Casa5SF: {
        localidad: "San Fierro",
        ubicacion: "Calton Heights",
        tipoProp: "Casa",
        opcion: "Comprar",
        precio: 19750100,
        moneda: "ARS",
        ambientes: 5,
        baños: 3,
        dormitorio: 3,
        cochera: "si",
        antiguedad: 5,
        superficieCasa: 140,
        superficieTerreno: 165,
        imagenes: Casa5SFfotos,
        primaryKey: 15
    },
    Casa6SF: {
        localidad: "San Fierro",
        ubicacion: "Paradiso",
        tipoProp: "Casa",
        opcion: "Alquilar",
        precio: 1300,
        moneda: "USD",
        ambientes: 2,
        baños: 1,
        dormitorio: 1,
        cochera: "si",
        antiguedad: 4,
        superficieCasa: 110,
        superficieTerreno: 135,
        imagenes: Casa6SFfotos,
        primaryKey: 16
    },
    Casa1LV: {
        localidad: "Las Venturas",
        ubicacion: "Whitewood Estates",
        tipoProp: "Casa",
        opcion: "Alquilar",
        precio: 1550,
        moneda: "USD",
        ambientes: 4,
        baños: 1,
        dormitorio: 2,
        cochera: "si",
        antiguedad: 8,
        superficieCasa: 137,
        superficieTerreno: 163,
        imagenes: Casa1LVfotos,
        primaryKey: 17
    },
    Casa2LV: {
        localidad: "Las Venturas",
        ubicacion: "Aeropuerto Las Venturas",
        tipoProp: "Casa",
        opcion: "Comprar",
        precio: 12500150,
        moneda: "ARS",
        ambientes: 4,
        baños: 1,
        dormitorio: 2,
        cochera: "si",
        antiguedad: 10,
        superficieCasa: 138,
        superficieTerreno: 172,
        imagenes: Casa2LVfotos,
        primaryKey: 18
    },
    Casa3LV: {
        localidad: "Las Venturas",
        ubicacion: "Prickle Pine",
        tipoProp: "Casa",
        opcion: "Comprar",
        precio: 2250125,
        moneda: "USD",
        ambientes: 7,
        baños: 3,
        dormitorio: 3,
        cochera: "si",
        antiguedad: 1,
        superficieCasa: 150,
        superficieTerreno: 170,
        imagenes: Casa3LVfotos,
        primaryKey: 19
    },
    Depto1LV: {
        localidad: "Las Venturas",
        ubicacion: "Old Venturas Strip",
        tipoProp: "Hotel",
        opcion: "Alquilar",
        precio: 1250,
        moneda: "USD",
        ambientes: 2,
        baños: 1,
        dormitorio: 1,
        cochera: "no",
        antiguedad: 11,
        superficieCasa: 105,
        superficieTerreno: 105,
        imagenes: Depto1LVfotos,
        primaryKey: 20
    },
    Depto2LV: {
        localidad: "Las Venturas",
        ubicacion: "Creek",
        tipoProp: "Hotel",
        opcion: "Alquiler Temporario",
        precio: 150,
        moneda: "USD",
        ambientes: 2,
        baños: 1,
        dormitorio: 1,
        cochera: "si",
        antiguedad: 8,
        superficieCasa: 127,
        superficieTerreno: 127,
        imagenes: Depto2LVfotos,
        primaryKey: 21
    },
    Depto3LV: {
        localidad: "Las Venturas",
        ubicacion: "The Strip",
        tipoProp: "Hotel",
        opcion: "Alquiler Temporario",
        precio: 95000,
        moneda: "ARS",
        ambientes: 1,
        baños: 1,
        dormitorio: 1,
        cochera: "si",
        antiguedad: 5,
        superficieCasa: 90,
        superficieTerreno: 90,
        imagenes: Depto3LVfotos,
        primaryKey: 22
    },
    Depto4LV: {
        localidad: "Las Venturas",
        ubicacion: "The Strip",
        tipoProp: "Departamento",
        opcion: "Alquilar",
        precio: 750000,
        moneda: "ARS",
        ambientes: 2,
        baños: 1,
        dormitorio: 1,
        cochera: "no",
        antiguedad: 3,
        superficieCasa: 105,
        superficieTerreno: 105,
        imagenes: Depto4LVfotos,
        primaryKey: 23
    },
    Depto5LV: {
        localidad: "Las Venturas",
        ubicacion: "The Strip",
        tipoProp: "Hotel",
        opcion: "Alquilar",
        precio: 525000,
        moneda: "ARS",
        ambientes: 1,
        baños: 1,
        dormitorio: 1,
        cochera: "no",
        antiguedad: 9,
        superficieCasa: 92,
        superficieTerreno: 92,
        imagenes: Depto5LVfotos,
        primaryKey: 24
    },

    Casa4LV: {
        localidad: "Las Venturas",
        ubicacion: "Rockshore West",
        tipoProp: "Casa",
        opcion: "Alquilar",
        precio: 150000,
        moneda: "ARS",
        ambientes: 4,
        baños: 2,
        dormitorio: 2,
        cochera: "si",
        antiguedad: 7,
        superficieCasa: 150,
        superficieTerreno: 178,
        imagenes: Casa4LVfotos,
        primaryKey: 25
    }
};


// contenedor principal para visualización de las propiedades
const contenedorPropiedades = document.getElementById('vistaPropiedades');

// contenedor específico de la propiedad seleccionada
const propiedadSeleccionada = document.getElementById('propSeleccionada');
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

    // incorporo los botones al slide container
    const buttonNext = document.createElement('button');
    buttonNext.className = 'next';
    buttonNext.id = 'next-'+propiedad.primaryKey;
    const imgNext = document.createElement('img');
    imgNext.src = 'imagenes/arrowNextPrev.png';
    imgNext.alt = 'next';

    imgNext.className = 'nextIMG';
    imgNext.id = 'nextIMG-'+propiedad.primaryKey;
    buttonNext.appendChild(imgNext);

    const buttonPrev = document.createElement('button');
    buttonPrev.className = 'prev';
    buttonPrev.id = 'prev-'+propiedad.primaryKey;
    const imgPrev = document.createElement('img');
    imgPrev.src = 'imagenes/arrowNextPrev.png';
    imgPrev.alt = 'prev';

    imgPrev.className = 'prevIMG';
    imgPrev.id = 'prevIMG-'+propiedad.primaryKey;
    buttonPrev.appendChild(imgPrev);

    var propIMGS = propiedad.imagenes;

    // pongo 'event.stopPropagation() en los botones, para que la propagación 
    // del evento principal de la función propiedadElegida() (hacer zoom en la imagen del slide al hacer click)
    // no interfiera en la aplicación del evento de los contenedores hijos (cambiar de imagen al clickear los botones).
    buttonPrev.addEventListener('click', function(event){
        // alert("presiono next");
        event.stopPropagation();
    cambioImagen('prev', propIMGS, divSlideContainer);  
    });
    buttonNext.addEventListener('click', function(event){
        // alert("presiono prev");
        event.stopPropagation();
    cambioImagen('next', propIMGS, divSlideContainer);
    });

    divSlideContainer.append(buttonPrev, buttonNext);

    // incorporo la primer imagen al slide
    divSlideContainer.style.backgroundImage = 'url('+propiedad.imagenes[0]+')';

    // creo el div de los textos descriptivos
    const divTextsContainer = document.createElement('div');
    divTextsContainer.className = 'text-prop';

    const propValue = document.createElement('p');

    propValue.className= 'propValue';
    propValue.id = 'propValue-'+propiedad.primaryKey;
    if(propiedad.opcion === "Alquilar"){
        propValue.textContent = propiedad.precio + " al mes";
    }else if(propiedad.opcion === "Comprar"){
        propValue.textContent = propiedad.precio + " contado";
    }else if(propiedad.opcion === "Alquiler Temporario"){
        propValue.textContent = propiedad.precio + " por dia";
    }

    const tipoCambio = document.createElement('p');
    tipoCambio.className = 'tipoCambio';
    tipoCambio.id = 'tipoCambio-'+propiedad.primaryKey;
    tipoCambio.textContent = propiedad.moneda;

    const ciudadPropiedad = document.createElement('p');
    ciudadPropiedad.className = 'ciudadPropiedad';
    ciudadPropiedad.id = 'ciudadPropiedad-'+propiedad.primaryKey;
    ciudadPropiedad.textContent = propiedad.localidad;

    const propZona = document.createElement('p');
    propZona.className = 'propZona';
    propZona.id = 'propZona-'+propiedad.primaryKey;
    propZona.textContent = propiedad.ubicacion;

    // contenedor de las caracteristicas de la propiedad:
    const propCaracteristicas = document.createElement('div');
    propCaracteristicas.id = 'detallesProp';

    const ambContainer = document.createElement('div');
    ambContainer.id = 'ambientesContainer';
    const ambLogo = document.createElement('img');
    ambLogo.alt = 'logo de ambientes';
    ambLogo.src = 'imagenes/ambientesLogo.jpg';
    ambLogo.className = 'logoMinimalista';
    const ambText = document.createElement('p');
    ambText.className = 'houseFeature';
    ambText.textContent = (propiedad.ambientes > 1) ? propiedad.ambientes + " ambientes. " : propiedad.ambientes + " ambiente. "; 
    ambContainer.append(ambLogo,ambText);

    const bañContainer = document.createElement('div');
    bañContainer.id = 'bañoContainer';
    const bañLogo = document.createElement('img');
    bañLogo.alt = 'logo de baños';
    bañLogo.src = 'imagenes/bañoLogo.jpg';
    bañLogo.className = 'logoMinimalista';
    const bañText = document.createElement('p');
    bañText.className = 'houseFeature';
    bañText.textContent = (propiedad.baños > 1) ? propiedad.baños + " baños. " : propiedad.baños + " baño. "; 
    bañContainer.append(bañLogo,bañText);

    const dormContainer = document.createElement('div');
    dormContainer.id = 'dormitoriosContainer';
    const dormLogo = document.createElement('img');
    dormLogo.alt = 'logo de dormitorios';
    dormLogo.src = 'imagenes/dormitorioLogo.jpg';
    dormLogo.className = 'logoMinimalista';
    const dormText = document.createElement('p');
    dormText.className = 'houseFeature';
    dormText.textContent = (propiedad.dormitorio > 1) ? propiedad.dormitorio + " dormitorios. " : propiedad.dormitorio + " dormitorio. ";  
    dormContainer.append(dormLogo,dormText);

    const cocheContainer = document.createElement('div');
    cocheContainer.id = 'cocheraContainer';
    const cocheLogo = document.createElement('img');
    cocheLogo.alt = 'logo de cochera';
    cocheLogo.src = 'imagenes/cocheraLogo.jpg';
    cocheLogo.className = 'logoMinimalista';
    const cocheText = document.createElement('p');
    cocheText.className = 'houseFeature';
    cocheText.textContent = "cochera: " + propiedad.cochera + ". ";
    cocheContainer.append(cocheLogo,cocheText);

    const antContainer = document.createElement('div');
    antContainer.id = 'antiguedadContainer';
    const antLogo = document.createElement('img');
    antLogo.alt = 'logo de la antiguedad';
    antLogo.src = 'imagenes/antiguedadLogo.jpg';
    antLogo.className = 'logoMinimalista';
    const antText = document.createElement('p');
    antText.className = 'houseFeature';
    antText.textContent = (propiedad.antiguedad > 1 ) ? propiedad.antiguedad + " años de antigüedad. " : propiedad.antiguedad + " año de antigüedad. ";
    antContainer.append(antLogo,antText);

    const supCasaContainer = document.createElement('div');
    supCasaContainer.id = 'supCasaContainer';
    const supCasaLogo = document.createElement('img');
    supCasaLogo.alt = 'logo de la superficie de la casa';
    supCasaLogo.src = 'imagenes/supCasaLogo.png';
    supCasaLogo.className = 'logoMinimalista';
    const supCasaText = document.createElement('p');
    supCasaText.className = 'houseFeature';
    supCasaText.innerHTML = propiedad.superficieCasa + "m<sup>2</sup>";
    supCasaContainer.append(supCasaLogo,supCasaText);

    const supTerrenoContainer = document.createElement('div');
    supTerrenoContainer.id = 'supTerrenoContainer';
    const supTerrenoLogo = document.createElement('img');
    supTerrenoLogo.alt = 'logo de la superficie del terreno';
    supTerrenoLogo.src = 'imagenes/superficieLogo.png';
    supTerrenoLogo.className = 'logoMinimalista';
    const supTerrenoText = document.createElement('p');
    supTerrenoText.className = 'houseFeature';
    supTerrenoText.innerHTML = propiedad.superficieTerreno + "m<sup>2</sup> totales.";
    supTerrenoContainer.append(supTerrenoLogo, supTerrenoText);
    
    propCaracteristicas.append(ambContainer, bañContainer, dormContainer, cocheContainer, antContainer, supCasaContainer, supTerrenoContainer);


     // si se hace doble click en el contenedor, se creará la plantilla con información de la propiedad
     divPropContainer.addEventListener('dblclick',function(){
        
        propiedadElegida(divSlideContainer, propIMGS, propCaracteristicas);

    })
    const buttonFavoritos = document.createElement('button');
    buttonFavoritos.className = 'favoritos';
    buttonFavoritos.id = 'favoritos-'+propiedad.primaryKey;
    const imgFavoritos = document.createElement('img');
    imgFavoritos.src = 'imagenes/orangeHeart.png';
    imgFavoritos.alt = 'imagen de favorito';
    buttonFavoritos.appendChild(imgFavoritos);

    // incorporo todos los elementos text al div
    divTextsContainer.append(propValue,tipoCambio,ciudadPropiedad,propZona,buttonFavoritos, propCaracteristicas);

    // incorporo ambos divs al div principal
    divPropContainer.append(divSlideContainer,divTextsContainer);

    // var propImagenes = propiedad.imagenes;

    contenedorPropiedades.appendChild(divPropContainer);


    return divPropContainer;
}

/**
 * función para mostrar las características la propiedad seleccionada
*/
function propiedadElegida(slidePropiedad, imagenesProp, caracteristicasProp){
    // oculto la vista de todas las propiedades
    contenedorPropiedades.style.display = 'none';
    // muestro la vista de las características de la propiedad
    propiedadSeleccionada.style.display = 'grid';
    propiedadSeleccionada.id = 'propSeleccionada';

  /*   buttonPrev.addEventListener('click', function(event){
        // alert("presiono next");
        event.stopPropagation();
    cambioImagen('prev', propIMGS, divSlideContainer);  
    });
    buttonNext.addEventListener('click', function(event){
        // alert("presiono prev");
        event.stopPropagation();
    cambioImagen('next', propIMGS, divSlideContainer);
    }); */
    
    // elementos de la propiedad seleccionada: 
    // slide 
    slidePropiedad.style.gridArea = 'slideAmpl';
    slidePropiedad.style.height = '400px';
    slidePropiedad.style.width = '600px';
    slidePropiedad.style.justifySelf = 'center';
    slidePropiedad.style.borderRadius = '20px';
    slidePropiedad.style.overflow = 'hidden';
    slidePropiedad.style.border = 'solid 3px lightgray';
    slidePropiedad.style.boxShadow = '5px 5px 5px 0px rgba(0, 0, 0, 0.3)';
    slidePropiedad.style.cursor = 'zoom-in';
    
    // agrego evento de click para hacer zoom a la imagen del slide ampliado
    slidePropiedad.addEventListener('click',function(event){
        // creo el contenedor de la imagen ampliada que será encargado de darle un efecto BLUR a todo el contenido detrás de la imagen
        const BLURcontainer = document.createElement('div');
        BLURcontainer.id = 'fondoBorroso';
        // lo estilizo para que esté por encima de todo el contenido existente y lo tape con el efecto BLUR
        BLURcontainer.style.display = 'flex';
        BLURcontainer.style.alignItems = 'center';
        BLURcontainer.style.justifyContent = 'center';
        BLURcontainer.style.position = 'fixed';
        // top = 0 y left = 0 para posicionarlo en la esquina superior izquierda (de lo contrario no cubriría apropiadamente)
        BLURcontainer.style.top = '0';
        BLURcontainer.style.left = '0';
        BLURcontainer.style.width = '100%';
        BLURcontainer.style.height = '100%';
        BLURcontainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        BLURcontainer.style.backdropFilter = 'blur(0.4rem)';
        BLURcontainer.style.zIndex = '9999';
        // obtengo la imagen que será ampliada
        let backgroundSlide = slidePropiedad.style.backgroundImage;
        // let backgroundSlide = window.getComputedStyle(slidePropiedad).backgroundImage;
        // creo la <img> que almacenará el backgroundImage 
        let IMGslide = document.createElement('img');
        // elimino 'url(' y ')' para quedarme solamente con el enlace
        IMGslide.src = backgroundSlide.slice(5,-2);
        IMGslide.alt = 'imagen ampliada';
        console.log(IMGslide);
        IMGslide.style.width = '900px';
        IMGslide.style.height = '600px';
        BLURcontainer.appendChild(IMGslide);
        document.body.appendChild(BLURcontainer);
        
        // ahora a la imagen le agrego el evento en donde el mouse esté fuera del contenedor y haga click
        IMGslide.addEventListener('mouseleave',function(){
            document.body.style.cursor = 'zoom-out';
            // verifico que si el mouse sigue adentro de la imagen, el cursor se mantenga normal
            IMGslide.addEventListener('mouseenter',function(){
                document.body.style.cursor = 'default';                
            });
            // verifico que si se hace click fuera de la imagen, el contenedor borroso y su contenido desaparecen (y el cursor vuelve a estar por defecto)
        });
        BLURcontainer.addEventListener('click', function(event){
            if(event.target === BLURcontainer){
                document.body.removeChild(BLURcontainer);
                document.body.style.cursor = 'default';
            }
        });
    });

    /* ------------HACER---------------------- */
    // slide vertical
    const verticalSlide = document.createElement('div');
    verticalSlide.id = 'vertical-slide';
    const VIMGContainer = document.createElement('div');
    VIMGContainer.id = 'IMGcontainer';
    imagenesProp.forEach(imagenProp =>
        VIMGContainer.innerHTML += '<img src='+ imagenProp +' alt="" id=" imagenNro'+imagenesProp.indexOf(imagenProp)+'"><br>'
    );
    verticalSlide.appendChild(VIMGContainer);
    // modifico la altura por defecto del container en caso de que la propiedad seleccionada tenga menos de 9 imagenes
    // (para eliminar el espacio vacío) 
    if(imagenesProp.length <= 3){
        verticalSlide.style.height = '150px'; 
    }else if(imagenesProp.length <= 6){
        verticalSlide.style.height = '250px';
    }

    // detalles de la propiedad
    caracteristicasProp.style.gridArea = 'propDet';
    caracteristicasProp.style.justifySelf = 'center';
    caracteristicasProp.style.width = '500px';
    caracteristicasProp.style.height = '300px'; 
    caracteristicasProp.style.border = 'solid 1px lightgray';
    caracteristicasProp.style.transition = 'border-color 0.5s ease';
    caracteristicasProp.style.marginTop = '0px';
    
    // evento click para cambiar la imagen del slide ampliado por la seleccionada en el slide
    VIMGContainer.addEventListener('click',function(event){
        
        if(event.target.tagName === 'IMG'){
            // console.log(event.target.src);
            let enlaceCompleto = event.target.src;
            let inicioEnlace = "imagenes/";
            let encontrado = enlaceCompleto.indexOf(inicioEnlace);
            if(encontrado !== -1){ 
                var IMGseleccionada = enlaceCompleto.substring(encontrado);
                // console.log("imagen seleccionada: "+IMGseleccionada);
                imagenesProp.forEach(imagen => {
                    // console.log(imagen)
                    if(imagen === IMGseleccionada){
                        // console.log("se encontró la imagen: " +IMGseleccionada);
                        // actualizo el índice (para poder avanzar/retroceder la imagen desde acá)
                        actualIndex = imagenesProp.indexOf(IMGseleccionada);
                        // actualizo el fondo
                        slidePropiedad.style.backgroundImage = 'url('+IMGseleccionada+')';
                    }
                });
            }   
        }
    })
    /* ------------------------------------------ */

    // formulario de contacto con el corredor
    const formularioContacto = document.createElement('div');
    formularioContacto.id = 'formContacto';
    // creo imagenes y textos del div: 
    let contactoH2 = document.createElement('h2');
    contactoH2.innerText = 'Contacto';
    let nombreCorredor = document.createElement('h3');
    nombreCorredor.innerText = 'Carl Johnson';
    let corredorCaracteristicas = document.createElement('p');
    corredorCaracteristicas.innerHTML = '<i><strong>SA PROPS</strong> Ganton</i>';
    let contactanos = document.createElement('h2');
    contactanos.innerText = 'déjanos tu contacto';
    let imgCJ = document.createElement('img');
    imgCJ.id = 'CJ';
    imgCJ.src = 'imagenes/gallery149.jpg';
    imgCJ.alt = 'Corredor Carl Johnson';
    let imgMailLogo = document.createElement('img');
    imgMailLogo.id = 'mailLogo';
    imgMailLogo.className = 'logosContacto';
    imgMailLogo.src = 'imagenes/mailLogo.png';
    imgMailLogo.alt = 'logo mail';
    let imgTelLogo = document.createElement('img');
    imgTelLogo.id = 'phoneLogo';
    imgTelLogo.className = 'logosContacto';
    imgTelLogo.src = 'imagenes/phoneLogo.png';
    imgTelLogo.alt = 'logo telefono';

    // creo un objeto con los estilos que tendrán los span de error 
    const spanEstilos = {
        color: 'red',
        fontSize: '10px',
        fontFamily: 'monospace'
    };

    // creo elementos propios del formulario:
    let contactoDatos = document.createElement('form');
    contactoDatos.className = 'datosContacto';
    // input nombre:
    let NyAContainer = document.createElement('div');
    let NyAInput = document.createElement('input');
    NyAInput.type = "text";
    NyAInput.id = 'NomYape';
    NyAInput.placeholder = 'Nombre y apellido *';
    NyAContainer.appendChild(NyAInput);  
    
    let errorNyA = document.createElement('span');
    errorNyA.id = 'errorNomYape';
    // asigno el objeto con los estilos del span 
    Object.assign(errorNyA.style, spanEstilos);

    // input telefono:
    let telefonoContainer = document.createElement('div');
    let telefonoContacto = document.createElement('input');
    telefonoContacto.type = "text";
    telefonoContacto.id = 'telefonoContacto';
    telefonoContacto.placeholder = 'Teléfono *';
    telefonoContainer.appendChild(telefonoContacto);

    let errorTelefono = document.createElement('span');
    errorTelefono.id = 'errorTelefono';
    Object.assign(errorTelefono.style, spanEstilos);

    // input mail:
    let emailContainer = document.createElement('div');
    let mailInput = document.createElement('input');
    mailInput.type = "text";
    mailInput.id = 'emailContacto';
    mailInput.placeholder = 'Email *';
    emailContainer.appendChild(mailInput);

    let errorEmail = document.createElement('span');
    errorEmail.id = 'errorEmail';
    Object.assign(errorEmail.style, spanEstilos);

    // textarea: 
    let mensajeContainer = document.createElement('div');
    mensajeContainer.id = 'textArea-Container';
    let mensajeDeContacto = document.createElement('textarea');
    mensajeDeContacto.id = 'mensajeContacto';
    mensajeDeContacto.rows = "6";
    mensajeDeContacto.placeholder = 'mensaje';
    mensajeContainer.appendChild(mensajeDeContacto);

    // input submit
    let envioDatos = document.createElement('input');
    envioDatos.type = "submit";
    envioDatos.id = 'enviarDatos';
    envioDatos.value = 'Contactar';
    envioDatos.disabled = true;

    // inserto todos los elementos en el formulario
    contactoDatos.append(NyAContainer, errorNyA, telefonoContainer, errorTelefono, emailContainer, errorEmail, mensajeContainer, envioDatos);

    // inserto el formulario + textos + imagenes en el div de formulario
    formularioContacto.append(contactoH2, nombreCorredor, corredorCaracteristicas, contactanos, imgCJ, imgMailLogo, imgTelLogo, contactoDatos);

    // si se comprueba que todos los datos son válidos, se activa el botón submit
    function validacionDatos(){
    if(nombreValido(NyAInput) && telefonoValido(telefonoContacto) && mailValido(mailInput)){
        envioDatos.removeAttribute("disabled");
        envioDatos.style.backgroundColor = 'orange';
        envioDatos.style.cursor = 'pointer';
    }else{
        envioDatos.setAttribute("disabled", true);
        envioDatos.style.backgroundColor = 'rgb(255, 209, 124)';
        envioDatos.style.cursor = '';
    }
    }

    NyAInput.addEventListener('input',function(){

        // nombreYApellido.style.color = 'red';
    
        if(!nombreValido(NyAInput)){
            errorNyA.textContent = 'nombre + apellido de hasta (y solo) 40 letras';
            NyAInput.style.backgroundColor = 'rgb(255, 209, 124)';
            NyAContainer.style.backgroundColor = 'rgb(255, 209, 124)';
        }else{
            errorNyA.textContent = '';
            NyAInput.style.backgroundColor = '';
            NyAContainer.style.backgroundColor = '';
        }
        // llamo a la función para verificar si, en este caso, el nombre ya es válido
        validacionDatos();
    })
    
    telefonoContacto.addEventListener('input',function(){ 
        if(!telefonoValido(telefonoContacto)){
            errorTelefono.textContent = 'el numero debe ser de 9 o 10 digitos';
            telefonoContacto.style.backgroundColor = 'rgb(255, 209, 124)';
            telefonoContainer.style.backgroundColor = 'rgb(255, 209, 124)';
        }else{
            errorTelefono.textContent = '';
            telefonoContacto.style.backgroundColor = '';
            telefonoContainer.style.backgroundColor = '';
        }
        validacionDatos();
    })
    
    mailInput.addEventListener('input',function(){
        if(!mailValido(mailInput)){
            errorEmail.textContent = 'estructura ejemplo: user@dominio.com ';
            mailInput.style.backgroundColor = 'rgb(255, 209, 124)';
            emailContainer.style.backgroundColor = 'rgb(255, 209, 124)';
        }else{
            errorEmail.textContent = '';
            mailInput.style.backgroundColor = '';
            emailContainer.style.backgroundColor = '';
        }
        validacionDatos();
    })
    // ubicacion de la propiedad en el mapa
    const propiedadUbicacion = document.createElement('div');
    propiedadUbicacion.id = 'propUbicacion';





    // agrego los elementos al contenedor padre
    propiedadSeleccionada.append(slidePropiedad, verticalSlide, caracteristicasProp, formularioContacto, propiedadUbicacion);
}


// recorro y genero todas las propiedades para el filtro por defecto
Object.values(casasTotales).forEach(casa => {
        divProp(casa);
});

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

    // convierto los strings vacíos en ceros
    var valorMin = inputValorMin === "" ? 0 : parseInt(inputValorMin);
    var valorMax = inputValorMax === "" ? 0 : parseInt(inputValorMax); 
    
    // verifico que el usuario haya ingresado bien los valores, si los ingresó. 
    if((isNaN(valorMin) && isNaN(valorMax)) || (valorMin > valorMax && valorMax != 0)){
        document.getElementById('desdeValue').style.backgroundColor = 'rgb(255, 122, 122)';
        document.getElementById('desdeContainer').style.backgroundColor = 'rgb(255, 122, 122)';
        document.getElementById('hastaValue').style.backgroundColor = 'rgb(255, 122, 122)';
        document.getElementById('hastaContainer').style.backgroundColor = 'rgb(255, 122, 122)';
    }else if(isNaN(valorMax)){
        document.getElementById('desdeValue').style.backgroundColor = '';
        document.getElementById('desdeContainer').style.backgroundColor = '';
        document.getElementById('hastaValue').style.backgroundColor = 'rgb(255, 122, 122)';
        document.getElementById('hastaContainer').style.backgroundColor = 'rgb(255, 122, 122)';
    }else if(isNaN(valorMin)){
        document.getElementById('hastaValue').style.backgroundColor = '';
        document.getElementById('hastaContainer').style.backgroundColor = '';
        document.getElementById('desdeValue').style.backgroundColor = 'rgb(255, 122, 122)';
        document.getElementById('desdeContainer').style.backgroundColor = 'rgb(255, 122, 122)';
    }else{

        // limpio los fondos de los campos en caso de que antes se hayan ingresado datos inválidos
        document.getElementById('desdeValue').style.backgroundColor = '';
        document.getElementById('desdeContainer').style.backgroundColor = '';
        document.getElementById('hastaValue').style.backgroundColor = '';
        document.getElementById('hastaContainer').style.backgroundColor = '';
        // limpio el contenedor antes de generar nuevas propiedades
    contenedorPropiedades.innerHTML = '';

        Object.values(casasTotales).forEach(casa => {
            // aplicar un strcasecmp para comparación insensible a minúsculas y mayúsculas
            if((casa.localidad === selectCiudad || selectCiudad === "Todas") &&
             (casa.ubicacion === inputBarrio || inputBarrio === "" ) &&
             (casa.tipoProp === selectProp || selectProp === "Todas") &&
             (casa.opcion === selectAccion || selectAccion === "") && 
             (casa.moneda === selectMoneda || selectMoneda === "Todas") && 
             ((casa.precio > valorMin && casa.precio < valorMax)  || 
             (valorMin === 0 && valorMax === 0) ||
             (casa.precio > valorMin && valorMax === 0))){
                divProp(casa);
            }
        });
        // si después del filtrado se muestran 0 propiedades:
        if(contenedorPropiedades.childElementCount == 0){
           
            // creo el contenedor de sin resultados:
            const sinResultadosDiv = document.createElement('div');
            sinResultadosDiv.style.width = '500px';
            sinResultadosDiv.style.height = '500px';
            sinResultadosDiv.style.marginTop = '100px';
            
            sinResultadosDiv.style.display = 'flex';
            sinResultadosDiv.style.flexDirection = 'column';
            sinResultadosDiv.style.alignItems = 'center';
            
            // creo la imagen
            const sinResultadosIMG = document.createElement('img');
            sinResultadosIMG.src = 'imagenes/orangeHouseEmpty.png';
            sinResultadosIMG.alt = 'busqueda vacía';
            sinResultadosIMG.style.width = '250px';
            sinResultadosIMG.style.height = '250px';
            sinResultadosIMG.style.opacity = '0.3';

            // creo el texto 
            const sinResultadosTXT = document.createElement('p');
            sinResultadosTXT.innerText = "No se encontraron propiedades con estas especificaciones";
            sinResultadosTXT.style.textAlign = 'center';
            sinResultadosTXT.style.fontSize = '30px';
            sinResultadosTXT.style.fontWeight = '700';
            sinResultadosTXT.style.fontFamily = 'sans-serif';
            sinResultadosTXT.style.color = 'orange';
            sinResultadosTXT.style.opacity = '0.6';
            
            sinResultadosDiv.append(sinResultadosIMG, sinResultadosTXT);
            contenedorPropiedades.appendChild(sinResultadosDiv);
        }
    } 

    
    
}

var actualIndex = 0;
/**
 * cambia la imagen del slide
*/
function cambioImagen(action, coleccionIMG, containerIMG){

    if(action === 'next'){
        // aplico el modulo % para que en caso de llegar al final, se pueda reiniciar
       
        actualIndex = (actualIndex +1) % coleccionIMG.length;
    }else if(action === 'prev'){
        
        actualIndex = (actualIndex -1 + coleccionIMG.length) % coleccionIMG.length;
    }else alert("no presiono ninguno");
    containerIMG.style.transition = '0.6s';
    containerIMG.style.opacity = '0.1';
    containerIMG.style.transition = '0.6s';
    containerIMG.style.opacity = '1';
    containerIMG.style.backgroundImage = 'url('+coleccionIMG[actualIndex]+')';
}

/* llamo al formulario */
document.getElementById("form-filtros").addEventListener('submit',filtro);