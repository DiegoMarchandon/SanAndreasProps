
import {
    casasTotales
} from './infoProps.js';

import {
    nombreValido, telefonoValido, mailValido
} from './validacionForms.js';

import { 
    insertProp 
} from "./mapSettings.js";

import {
    objUsuario, userConectado
} from "./validacionForms.js";

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

    /* si se trata de una propiedad diferente a un comercio, creo los ambientes */
    
    // contenedor de las caracteristicas de la propiedad:
    const propCaracteristicas = document.createElement('div');
    propCaracteristicas.id = 'detallesProp';

    const antContainer = document.createElement('div');
    antContainer.id = 'antiguedadContainer';
    const antLogo = document.createElement('img');
    antLogo.alt = 'logo de la antiguedad';
    antLogo.src = 'imagenes/antiguedadLogo.jpg';
    antLogo.className = 'logoMinimalista';
    const antText = document.createElement('p');
    antText.className = 'propFeature';
    antText.textContent = (propiedad.antiguedad > 1 ) ? propiedad.antiguedad + " años de antigüedad. " : propiedad.antiguedad + " año de antigüedad. ";
    antContainer.append(antLogo,antText);

    const supTerrenoContainer = document.createElement('div');
    supTerrenoContainer.id = 'supTerrenoContainer';
    const supTerrenoLogo = document.createElement('img');
    supTerrenoLogo.alt = 'logo de la superficie del terreno';
    supTerrenoLogo.src = 'imagenes/superficieLogo.png';
    supTerrenoLogo.className = 'logoMinimalista';
    const supTerrenoText = document.createElement('p');
    supTerrenoText.className = 'propFeature';
    supTerrenoText.innerHTML = propiedad.superficieTerreno + "m<sup>2</sup> totales.";
    supTerrenoContainer.append(supTerrenoLogo, supTerrenoText);

    if(propiedad.tipoProp != "Comercio"){
        const ambContainer = document.createElement('div');
        ambContainer.id = 'ambientesContainer';
        const ambLogo = document.createElement('img');
        ambLogo.alt = 'logo de ambientes';
        ambLogo.src = 'imagenes/ambientesLogo.jpg';
        ambLogo.className = 'logoMinimalista';
        const ambText = document.createElement('p');
        ambText.className = 'propFeature';
        ambText.textContent = (propiedad.ambientes > 1) ? propiedad.ambientes + " ambientes. " : propiedad.ambientes + " ambiente. "; 
        ambContainer.append(ambLogo,ambText);

        const bañContainer = document.createElement('div');
        bañContainer.id = 'bañoContainer';
        const bañLogo = document.createElement('img');
        bañLogo.alt = 'logo de baños';
        bañLogo.src = 'imagenes/bañoLogo.jpg';
        bañLogo.className = 'logoMinimalista';
        const bañText = document.createElement('p');
        bañText.className = 'propFeature';
        bañText.textContent = (propiedad.baños > 1) ? propiedad.baños + " baños. " : propiedad.baños + " baño. "; 
        bañContainer.append(bañLogo,bañText);

        const dormContainer = document.createElement('div');
        dormContainer.id = 'dormitoriosContainer';
        const dormLogo = document.createElement('img');
        dormLogo.alt = 'logo de dormitorios';
        dormLogo.src = 'imagenes/dormitorioLogo.jpg';
        dormLogo.className = 'logoMinimalista';
        const dormText = document.createElement('p');
        dormText.className = 'propFeature';
        dormText.textContent = (propiedad.dormitorio > 1) ? propiedad.dormitorio + " dormitorios. " : propiedad.dormitorio + " dormitorio. ";  
        dormContainer.append(dormLogo,dormText);

        const cocheContainer = document.createElement('div');
        cocheContainer.id = 'cocheraContainer';
        const cocheLogo = document.createElement('img');
        cocheLogo.alt = 'logo de cochera';
        cocheLogo.src = 'imagenes/cocheraLogo.jpg';
        cocheLogo.className = 'logoMinimalista';
        const cocheText = document.createElement('p');
        cocheText.className = 'propFeature';
        cocheText.textContent = "cochera: " + propiedad.cochera + ". ";
        cocheContainer.append(cocheLogo,cocheText);

        const supCasaContainer = document.createElement('div');
        supCasaContainer.id = 'supCasaContainer';
        const supCasaLogo = document.createElement('img');
        supCasaLogo.alt = 'logo de la superficie de la casa';
        supCasaLogo.src = 'imagenes/supCasaLogo.png';
        supCasaLogo.className = 'logoMinimalista';
        const supCasaText = document.createElement('p');
        supCasaText.className = 'propFeature';
        supCasaText.innerHTML = propiedad.superficieCasa + "m<sup>2</sup>";
        supCasaContainer.append(supCasaLogo,supCasaText);

        propCaracteristicas.append(ambContainer, bañContainer, dormContainer, cocheContainer, antContainer, supCasaContainer, supTerrenoContainer);
    }else{ //si se trata de un comercio:
        const estContainer = document.createElement('div');
        estContainer.id = 'estacionamientoContainer';
        const estLogo = document.createElement('img');
        estLogo.alt = 'logo de estacionamiento';
        estLogo.src = 'imagenes/estacionamientoLogo.jpg';
        estLogo.className = 'logoMinimalista';
        const estText = document.createElement('p');
        estText.className = 'propFeature';
        estText.textContent = propiedad.estacionamiento;
        estContainer.append(estLogo,estText);

        const bañosContainer = document.createElement('div');
        bañosContainer.id = 'bañosContainer';
        const bañosLogo = document.createElement('img');
        bañosLogo.alt = 'logo de baños';
        bañosLogo.src = 'imagenes/bañoLogo.jpg';
        bañosLogo.className = 'logoMinimalista';
        const bañosText = document.createElement('p');
        bañosText.className = 'propFeature';
        bañosText.textContent = propiedad.baños;
        bañosContainer.append(bañosLogo,bañosText);

        const sistClimaContainer = document.createElement('div');
        sistClimaContainer.id = 'sistClimaContainer';
        const sistClimaLogo = document.createElement('img');
        sistClimaLogo.alt = 'logo de climatización';
        sistClimaLogo.src = 'imagenes/climatizacionLogo.png';
        sistClimaLogo.className = 'logoMinimalista';
        const sistClimaText = document.createElement('p');
        sistClimaText.className = 'propFeature';
        sistClimaText.textContent = propiedad.sistemasClimatización;
        sistClimaContainer.append(sistClimaLogo,sistClimaText);

        propCaracteristicas.append(supTerrenoContainer, antContainer, estContainer, bañosContainer, sistClimaContainer);

        const nombreEmprendimiento = document.createElement('p');
        nombreEmprendimiento.className = 'emprNombre';
        nombreEmprendimiento.textContent = propiedad.nombre;
        divTextsContainer.appendChild(nombreEmprendimiento);
    }   


     // si se hace doble click en el contenedor, se creará la plantilla con información de la propiedad
     divPropContainer.addEventListener('dblclick',function(){
        
        var propBottom = propiedad.Bottom;
        var propRight = propiedad.Right;
        var propPKey = propiedad.primaryKey;
        var comercioID = propiedad.IDcomercio;
        propiedadElegida(divSlideContainer, propIMGS, propCaracteristicas, propBottom, propRight, propPKey, comercioID);

    })
    const buttonFavoritos = document.createElement('button');
    buttonFavoritos.className = 'favoritos';
    buttonFavoritos.id = 'favoritos-'+propiedad.primaryKey;
    const imgFavoritos = document.createElement('img');
    imgFavoritos.src = 'imagenes/orangeHeart.png';
    imgFavoritos.alt = 'imagen de favorito';
    imgFavoritos.id = 'corazonExterno';
    const imgFavoritos2 = document.createElement('img');
    imgFavoritos2.src = 'imagenes/cremaHeart.png';
    imgFavoritos2.alt = 'imagen de favorito2';
    imgFavoritos2.id = 'corazonInterno';
    
    buttonFavoritos.append(imgFavoritos, imgFavoritos2);

    function creoMiniContainer(){
        const miniContainer = document.createElement('div');
        miniContainer.className = 'miniContainer';
        miniContainer.id='miniContainerNro-'+propiedad.primaryKey;
        const miniIMG = document.createElement('img');
        miniIMG.src = propiedad.imagenes[0];
        miniIMG.className = 'miniIMG';
        const miniLocalidad = document.createElement('h3');
        miniLocalidad.innerText = propiedad.localidad;
        miniLocalidad.className = 'miniTexts';
        const miniUbicacion = document.createElement('h5');
        miniUbicacion.innerText = propiedad.ubicacion;
        miniUbicacion.className = 'miniTexts';
        miniContainer.append(miniIMG, miniLocalidad, miniUbicacion);
        return miniContainer;
    }
        const containerPropsFavs = document.getElementsByClassName('contenidoDesplegado')[0];
        const noPropsText = document.getElementsByClassName('contenidoVacio')[0];

         // retomo la referencia al objeto usuario
        let objUserConectado = userConectado();


        buttonFavoritos.addEventListener('dblclick',function(event){
            event.stopPropagation();
            if(localStorage.getItem('usuarioRegistrado') === 'true'){
               
                document.getElementById('cantPropsFavs').innerText = parseInt(objUserConectado['Favoritas'].length);
                
                // creoMiniContainer();

                if(imgFavoritos2.style.display === 'inline'){
                    
                    /* escondo el corazon gris y agrego la propiedad a favoritos */
                    imgFavoritos2.style.display = 'none';
                    /* escondo el parrafo que dice que no hay propiedades que mostrar (en este caso, el de la posición 0) */
                    noPropsText.style.display = 'none';
                    // función que se encarga de guardar o actualizar datos del usuario conectado
                    objUsuario("Favoritas", [propiedad.primaryKey, propiedad.localidad, propiedad.ubicacion], 'agregar');
                    // console.log("imagen: "+propiedad.imagenes[0] + " localidad: "+propiedad.localidad + " ubicacion: "+propiedad.ubicacion);
                    // ahora, agrego el miniContainer al div que muestra las propiedades favoritas
                    containerPropsFavs.appendChild(creoMiniContainer());

                    // actualizo el texto de la parte superior 
                    document.getElementById('cantPropsFavs').innerText = parseInt(objUserConectado['Favoritas'].length);
                }else{ // === 'none'
                    /* vuelvo a mostrar el corazon gris */
                    imgFavoritos2.style.display = 'inline';
                    /* elimino la propiedad de favoritos, primero verifico si existe: */
                    const containerPorID = document.getElementById('miniContainerNro-'+propiedad.primaryKey);
                    if(containerPorID){
                        containerPropsFavs.removeChild(containerPorID);
                    }
                    objUsuario("Favoritas",[propiedad.primaryKey, propiedad.localidad, propiedad.ubicacion], 'eliminar')
                    /* si quito todas las propiedades */
                    const elemHijos = containerPropsFavs.children;
                    // console.log("cantidad de nodos hijos actual es de: " + elemHijos.length + " y son: " + JSON.stringify(elemHijos));
                    if(elemHijos.length === 1){
                        noPropsText.style.display = 'inline';
                    }
                    // actualizo el texto de la parte superior 
                    document.getElementById('cantPropsFavs').innerText = parseInt(objUserConectado['Favoritas'].length);
                }
                
            }else{
                window.location.href = 'formulario.html';
            }
            
        });

        
        
        window.addEventListener('load',function(){
            
            // console.log("pagina recargada");
            // si hay un usuario registrado...
            if(localStorage.getItem('usuarioRegistrado') === 'true'){
                
                
                // console.log(objUsuario);
                // ... Y si ese usuario tiene una más propiedades en favoritos
                if(objUserConectado['Favoritas'].length > 0){
                    noPropsText.style.visibility = 'hidden';
                    console.log(noPropsText.style.display);
                    
                    objUserConectado['Favoritas'].forEach(propFav => {
                        /* escondo el parrafo que dice que no hay propiedades que mostrar (en este caso, el de la posición 0) */
                        // oculto el corazón gris para las propiedades guardadas 
                        if((propiedad.primaryKey === propFav[0])){
                            // creo los mini containers y los guardo en el panel lateral
                            creoMiniContainer();
                            
                            containerPropsFavs.appendChild(creoMiniContainer());
                            console.log("coinciden las PK");
                            imgFavoritos2.style.display = 'none';
                        }
                    });
                }else noPropsText.style.visibility = 'visible';
            }
        })



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
function propiedadElegida(slidePropiedad, imagenesProp, caracteristicasProp, bottomPorc, rightPorc, idProp, idComercio){
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
        // console.log(IMGslide);
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
    }else if(imagenesProp.length > 9){ //más de 9 imagenes
        verticalSlide.style.width = '315px';

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

    // formulario de contacto con el Agente
    const formularioContacto = document.createElement('div');
    formularioContacto.id = 'formContacto';
    // creo imagenes y textos del div: 
    let contactoH2 = document.createElement('h2');
    contactoH2.innerText = 'Contacto';
    let nombreAgente = document.createElement('h3');
    nombreAgente.innerText = 'Carl Johnson';
    let AgenteCaracteristicas = document.createElement('p');
    AgenteCaracteristicas.innerHTML = '<i><strong>SA PROPS</strong> Ganton</i>';
    let contactanos = document.createElement('h2');
    contactanos.innerText = 'déjanos tu contacto';
    let imgCJ = document.createElement('img');
    imgCJ.id = 'CJ';
    imgCJ.src = 'imagenes/gallery149.jpg';
    imgCJ.alt = 'Agente Carl Johnson';
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
    formularioContacto.append(contactoH2, nombreAgente, AgenteCaracteristicas, contactanos, imgCJ, imgMailLogo, imgTelLogo, contactoDatos);

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

    contactoDatos.addEventListener('submit',function(){
        // event.preventDefault();
        const NyAuser = NyAInput.value;
        // console.log(NyAuser);
        const telUser = telefonoContacto.value;
        const mailUser = mailInput.value;
        const mensajeUser = mensajeDeContacto.value;
        var arrUserInfo = [idProp, NyAuser, telUser, mailUser, mensajeUser];
        const usuariosTotales = JSON.parse(localStorage.getItem('usuarios'));
        const Agente = usuariosTotales["user4"];
        Agente['Contactos'].push(arrUserInfo);
        localStorage.setItem("usuarios",JSON.stringify(usuariosTotales));
    })
    
    // contenedor de la escala ('#zoom_outer')
    const contenedorExterno = document.createElement('div');
    contenedorExterno.id = 'propUbicacion';
   
    // contenedor interno al que se le hará zoom ('#zoom')
    const contenedorInterno = document.createElement('div');
    contenedorInterno.id = 'contenedorInterno';
    contenedorInterno.className = 'contInt';
     // div descriptivo
     const referenciasContainer = document.createElement('div');
     referenciasContainer.id = 'refContainer';
     referenciasContainer.innerHTML = '<span style="background-color: orangered; color: white; font-weight: 1000px; font-family: Georgia; border: thick double whitesmoke;">Doble click para ver el mapa completo</span><br>';
     
     const greyBall = document.createElement('span');
     greyBall.className = 'spanBalls';
     greyBall.style.backgroundColor = 'darkgrey';
     greyBall.style.border = '1px solid black';
     greyBall.innerHTML = ' &nbsp; &nbsp; &nbsp;';

     const greyRef = document.createElement('p');
     greyRef.className = 'refTexts';
     greyRef.innerHTML = 'Inmueble seleccionado<br>';

     const greenBall = document.createElement('span');
     greenBall.className = 'spanBalls';
     greenBall.style.backgroundColor = 'rgb(17, 255, 0)';
     greenBall.innerHTML = ' &nbsp; &nbsp; &nbsp;';

     const greenRef = document.createElement('p');
     greenRef.className = 'refTexts';
     greenRef.innerHTML = 'Propiedades disponibles<br>';

     const blueBall =  document.createElement('span');
     blueBall.className = 'spanBalls';
     blueBall.style.backgroundColor = 'blue';
     blueBall.innerHTML = ' &nbsp; &nbsp; &nbsp;';
     
     const blueRef = document.createElement('p');
     blueRef.className = 'refTexts';
     blueRef.innerHTML = 'Comercios disponibles<br>';

     
     referenciasContainer.append(greyBall,greyRef,greenBall,greenRef, blueBall, blueRef);
    //  contenedorInterno.appendChild(referenciasContainer);
    // imagen 
    const IMGmap = document.createElement('img');
    IMGmap.alt = "GTA MAP";
    IMGmap.id = "propiedadElegida";
    IMGmap.src = "imagenes/SanAndreasMap.png";
    
    contenedorInterno.appendChild(IMGmap);
    // inserto las propiedades en el minimapa y utilizo el segundo parametro para aplicar la correccion
    insertProp(contenedorInterno, "correccion");
    contenedorExterno.append(contenedorInterno, referenciasContainer);
    propiedadSeleccionada.append(slidePropiedad, verticalSlide, caracteristicasProp, formularioContacto, contenedorExterno);
    // cálculos para posicionar el mapa acorde a la propiedad seleccionada
    // requestAnimationFrame(() => {
        // especifico el zoom y posición en el que se verá la propiedad localizada
        const escala = 9;
        // calculamos las dimensiones del contenedor del mapa:
        const zoomWidth = contenedorInterno.offsetWidth;
        const zoomHeight = contenedorInterno.offsetHeight;
    
        // console.log("dimensiones(contenedor externo): "+ contenedorExterno.offsetWidth + " y "+contenedorExterno.offsetHeight);
        // console.log("dimensiones: "+ zoomWidth + " y "+zoomHeight);
        

        const ejeX = zoomWidth * (rightPorc / 100);
        const ejeY = zoomHeight * (bottomPorc / 100);
    
        // console.log("ejes: "+ejeX +" y "+ejeY);
    
        // calculo los valores de traslación
        // const traslacionX = -(ejeX * (escala-1));
        // const traslacionY = -(ejeY * (escala-1));
    
        const factorCorreccionX = -1.1;
        const factorCorreccionY = -1.1;
        const traslacionX = -((ejeX - (zoomWidth / 2)) * (escala - 1)) * factorCorreccionX;
        const traslacionY = -((ejeY - (zoomHeight / 2)) * (escala - 1)) * factorCorreccionY;    

        // console.log("traslacion: "+ traslacionX +" y "+traslacionY+"; escala:"+escala);
        // reduzco el tamaño de los iconos proporcionalmente al aumento de la escala: 
        // también resto un 1.3 de right para corregir la posición de las propiedades relativas 
        const casasIconos = document.querySelectorAll('.IMGcontainer');
        casasIconos.forEach(icono => {
            icono.style.transform = 'scale('+1/escala+')';
            // cambio de color el icono de la propiedad seleccionada
            var iconoID = (icono.id).slice(-1); 
            if(idProp >= 10){
            var iconoID = (icono.id).slice(-2);
            }
            // console.log(parseInt(iconoID.slice(-2)));
            // console.log(idProp);
            if(parseInt(iconoID.slice(-2)) === idProp){
                console.log("ID encontrado. idComercio = "+idComercio);
                if(idComercio !== undefined){
                    
                    document.getElementsByClassName('lblueBall')[idComercio].style.setProperty('--color-medio','darkgrey');
                }else{
                    icono.style.setProperty('--color-medio','darkgrey');
                }
            }else{
                console.log("ID NO encontrado");
            }
        });
        // contenedorInterno.style.transform = `scale(${escala}) translate(${traslacionX}px, ${traslacionY}px)`;
        contenedorInterno.style.transform = 'translate('+traslacionX+'px, '+traslacionY+'px) scale('+escala+')';  
    // });
        contenedorExterno.addEventListener('dblclick',function(){
            window.location.href = 'Mapa.html';
        });
    // contenedorInterno.style.transform = 'translate(-10299.3px, -6092.13px) scale(10.6993);'; 
    // agrego los elementos al contenedor padre

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
             ((casa.ubicacion).toLowerCase() === inputBarrio.toLowerCase() || inputBarrio === "" ) &&
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

/* registro el evento submit del formulario */
document.getElementById("form-filtros").addEventListener('submit',filtro);


/* registro que, si existen las variables, aplico el filtro con los valores modificados */

    // Obtener los valores desde localStorage
    const accionSeleccionada = localStorage.getItem('selectAccion');
    const localidadSeleccionada = localStorage.getItem('selectLocalidad');
    const inmuebleSeleccionado = localStorage.getItem('selectPropiedad');
    const zonaSugerida = localStorage.getItem('zonaSugerida');
    const seleccionRealizada = localStorage.getItem('seleccionRealizada');

    if (accionSeleccionada) {
        // cambio el input por defecto de accion por el almacenado 
        document.getElementById('selectAccion').value = accionSeleccionada;
        // aplico el filtro
        filtro(new Event('submit')); // Simula un evento de submit
        // Limpiar localStorage para evitar selección en recargas futuras
        localStorage.removeItem('selectAccion');
    }
    if(localidadSeleccionada){
        // cambio el input por defecto de la localidad por el almacenado
        document.getElementById('selectLocalidad').value = localidadSeleccionada;
        // aplico el filtro
        filtro(new Event('submit')); // Simula un evento de submit
        // Limpiar localStorage para evitar selección en recargas futuras
        localStorage.removeItem('selectLocalidad');
    }
    if(inmuebleSeleccionado){
        document.getElementById('selectPropiedad').value = inmuebleSeleccionado;
        filtro(new Event('submit')); // Simula un evento de submit
        // Limpiar localStorage para evitar selección en recargas futuras
        localStorage.removeItem('selectPropiedad');
    }
    if(zonaSugerida){
        document.getElementById('inputZona').value = zonaSugerida;
        filtro(new Event('submit')); // Simula un evento de submit
        // Limpiar localStorage para evitar selección en recargas futuras
        localStorage.removeItem('zonaSugerida');
    }
    if(seleccionRealizada){
        document.getElementById('selectLocalidad').value = seleccionRealizada;
        filtro(new Event('submit')); // Simula un evento de submit
        // Limpiar localStorage para evitar selección en recargas futuras
        localStorage.removeItem('seleccionRealizada');
    }
