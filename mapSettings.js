import { casasTotales } from "./infoProps.js";
/* creo y posiciono los iconos de las propiedades */
    // console.log(casasTotales[casa1LS][localidad]);

/**
 * Accede a las propiedades de los objetos casa referentes a sus coordenadas
 * y las inserta en el contenedor (con el mapa) recibido por parámetro
 */
export function insertProp(contenedor, correccion){
    
    Object.values(casasTotales).forEach(casa => {
    
        // si correccion es distinto de null, resto 1.3 a las propiedades
        if(correccion != null){
            casa["Right"]-= 1.3;
        }
    
        var casaUbicacion = document.createElement('div');
        casaUbicacion.id = "casaNro"+casa["primaryKey"];
        casaUbicacion.className = "IMGcontainer";
        
        var colourBall = document.createElement('div');
        colourBall.className = "colourBall";
        if(casa.tipoProp === "Comercio"){
            colourBall.classList.add("lblueBall");
        }
        casaUbicacion.appendChild(colourBall);
        // casaUbicacion.alt = "casa no seleccionada";
        // casaUbicacion.src = "imagenes/orangeUbicationLogo.png";
        casaUbicacion.style.bottom = casa["Bottom"]+"%";
        casaUbicacion.style.right = casa["Right"]+"%";
        contenedor.appendChild(casaUbicacion); 
        // agrego el evento mouseover para mostrar una previsualización de la propiedad que lo redirija a propiedad seleccionada
        casaUbicacion.addEventListener('mouseover',function(){
            var divIlustrativo = document.createElement('div');
            
            var iconScale = casaUbicacion.style.transform;
            divIlustrativo.className = 'divIlustrativo';
            divIlustrativo.style.bottom = (parseInt(casa["Bottom"]) + 3)+"%";
            divIlustrativo.style.right = (parseInt(casa["Right"]) + 3)+"%";
            divIlustrativo.style.transform = iconScale;


            var IMGilustrativa = document.createElement('img');
            IMGilustrativa.className = 'IMGilustrativa';
            IMGilustrativa.src = casa.imagenes[0];
            IMGilustrativa.alt = 'imagen de ilustracion de la casa';

            var textIlustrativo = document.createElement('p');
            textIlustrativo.className = 'textIlustrativo';
            textIlustrativo.innerHTML = casa.localidad + '<br>' + casa.ubicacion;

            divIlustrativo.append(IMGilustrativa, textIlustrativo);
            contenedor.appendChild(divIlustrativo);
            // agrego el evento en donde acerco el contenedor ilustrativo en caso de zoom
            divIlustrativo.addEventListener('wheel', function(){

            })
            // elimino el div una vez quito el mouse
            casaUbicacion.addEventListener('mouseout', function(){
                // como el evento mouseout se puede activar en cualquier lugar, verificamos antes si el div sigue siendo hijo del contenedor.
                if(contenedor.contains(divIlustrativo)){
                    contenedor.removeChild(divIlustrativo);
                }
            });
            
        });
    });   
}

/**
 * Recibe el contenedor externo, 
 * El contenedor de zoom,
 * Y la escala y posicion iniciales
*/
export function mapaDinamico(){
    var scale = 1,
    panning = false,
    pointX = 0,
    pointY = 0,
    start = {x: 0, y: 0},
    zoom = document.getElementById("zoom");

    insertProp(zoom, null);

    let orangeIcon = document.querySelectorAll('.IMGcontainer');

    function setTransform(){
        zoom.style.transform = "translate("+ pointX + "px," + pointY + "px) scale("+scale+")";
    }

    zoom.onmousedown = function(e){
        e.preventDefault();
        start = {x : e.clientX - pointX, y : e.clientY - pointY};
        panning = true;
    }
    zoom.onmouseup = function(e){
        panning = false;
    }

    zoom.onmousemove = function(e){
        e.preventDefault();

        if(!panning){
            return;
        }

        pointX = (e.clientX - start.x);
        pointY = (e.clientY - start.y);
        setTransform();
    }

    zoom.onwheel = function(e){
        // si detecto que la escala cambió para aumentar o disminuir el tamaño de los iconos de ubicación
        if(scale != 1){
            orangeIcon.forEach(icon => {
                var newScale = 1 / scale;
                // si la escala es negativa, la multiplico por 0 para que el icono no se ponga la revés.
                newScale < 0 ? (newScale * (-1)) : newScale;
                // la escala no puede ser menor a 0.3 (para que el ícono no se haga muy diminuto)
                // scale >= 2 ? (newScale = 0.3) : newScale; 
                // console.log("nueva escala: "+ newScale);
                icon.style.transform = "translate( 0px, 0px) scale("+ newScale +")";
            });
            // si divRef existe
            
        }
        e.preventDefault();
        var xs = (e.clientX - pointX) / scale,
            ys = (e.clientY - pointY) / scale,
            delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
            // console.log("xs es: "+xs+ "y el ys es: "+ys+", la escala es: "+scale);
        (delta > 0 ) ? (scale *= 1.2) : (scale /= 1.2);

        pointX = e.clientX - xs * scale;
        pointY = e.clientY - ys * scale;

        setTransform();
        
    }
    
}
    