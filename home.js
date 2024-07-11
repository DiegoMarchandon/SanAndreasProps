
const seccion = document.getElementById('seccionElegida');

var ciudades = {
            LosSantos: {
                Cardclases: 'ciudad fontLS',
                cityContainerClass: 'losSantos',
                descripcionClass: 'descripcionLS',
                cityFontID: 'LSfuente',
                cityFontSRC: 'imagenes/losSantos.png',
                cityFontALT: 'letra los santos',
                cityDescripcionText: 'Ciudad con precios más accesibles y la más fácil para adaptarse. Propiedades sospechosamente baratas <br><br><u><b>ver propiedades en Los Santos</b></u>',
                cityBLUR: 'url(imagenes/LosSantosBLUR.png)'
            },
            SanFierro: {
                Cardclases: 'ciudad fontSF',
                cityContainerClass: 'sanFierro',
                descripcionClass: 'descripcionSF',
                cityFontID: 'SFfuente',
                cityFontSRC: 'imagenes/sanFierro.png',
                cityFontALT: 'letra san fierro',
                cityDescripcionText: 'Ciudad con mayor variedad de precios, propiedades y actividades. Viviendas desde lo bohemio hasta lo elegante. Espacio para todos los estilos de vida. <br><br><u><b>ver propiedades en San Fierro</b></u>',
                cityBLUR: 'url(imagenes/SanFierroBLUR.jpg)'
            },
            LasVenturas: {
                Cardclases: 'ciudad fontLV',
                cityContainerClass: 'lasVenturas',
                descripcionClass: 'descripcionLV',
                cityFontID: 'LVfuente',
                cityFontSRC: 'imagenes/lasVenturas.png',
                cityFontALT: 'letra las venturas',
                cityDescripcionText: 'Ciudad con mayor vida nocturna y viviendas lujosas. Predominancia de hoteles y alquileres temporales para las personas poder que buscan disfrutar de las variadas actividades <br><br><u><b>ver propiedades en Las Venturas</b></u>',
                cityBLUR: 'url(imagenes/LasVenturasBLUR.png)'
            }
        };
    /**
     * Función para crear el div contenedor de ciudades 
     * y mostrar ciudades secuencialmente
     * 
     */
    var index = 0;
    var ciudadContainer;
    // contenedor general del slide automático de ciudades

    function mostrarCiudades() {
        
        // para evitar que se creen nuevos contenedores clickeando su botón, verifico que no se haya creado antes 
        
            if(ciudadContainer == undefined){
            ciudadContainer = document.createElement('div');
            ciudadContainer.className = 'ciudades';
            ciudadContainer.style.display = 'flex';
            ciudadContainer.style.justifyContent= 'center';
            ciudadContainer.style.alignItems = 'center';
            seccion.appendChild(ciudadContainer); 
            }else{
                ciudadContainer.innerHTML = '';
            }

            // carta de presentación de la ciudad
            const cityCard = document.createElement('div');
            // contenedor de la imagen de la ciudad + la descripción
            const cityContainer = document.createElement('div');
            // contenedor de la descripción de la ciudad
            const cityDescripcion = document.createElement('div');
            // imagen fuente de la ciudad
            const cityFont = document.createElement('img');
            // texto descriptivo de la ciudad
            const cityText = document.createElement('p');
                
            // realizo las inserciones de nodos
            cityDescripcion.append(cityFont, cityText);
            cityContainer.appendChild(cityDescripcion);
            cityCard.appendChild(cityContainer);
            ciudadContainer.appendChild(cityCard);

            // selecciono la ciudad actual según el índice:
        let ciudadActual = Object.values(ciudades)[index];

            cityCard.className = ciudadActual.Cardclases;
            cityContainer.className = ciudadActual.cityContainerClass;
            cityDescripcion.id = ciudadActual.descripcionClass;
            cityFont.id = ciudadActual.cityFontID;
            cityFont.src = ciudadActual.cityFontSRC;
            cityFont.alt = ciudadActual.cityFontALT;
            cityText.innerHTML = ciudadActual.cityDescripcionText;
            
            ciudadContainer.style.backgroundImage = ciudadActual.cityBLUR;
            // ciudadContainer.style.backdropFilter = 'blur(20px)';


            // Incrementar el índice y resetear si es necesario
            // index = (index + 1) % (Object.keys(ciudades).length);
            index++;
            if(index == Object.keys(ciudades).length){
                index = 0;
            }
        // Configurar para mostrar la siguiente ciudad después de 8 segundos
    setTimeout(mostrarCiudades, 8000);


    }

    function mostrarEmprendimientos(){
        // antes de mostrar la tarjeta, borro los anteriores hijos:
        if(seccion.childElementCount != 0){
            seccion.innerHTML = '';
        }else{
            
        }

    }

function verPropuesta(button){
    // location.href='#seccionElegida';
    let buttonContainer = document.getElementById('button-container');
    let botones = buttonContainer.querySelectorAll('button');
    // Restablecer el estilo de todos los botones
    botones.forEach(btn => {
       
        btn.style.borderColor = 'black';
        btn.style.backgroundColor = 'rgb(255, 184, 51)';
    });
    
    button.style.borderColor = 'white';
    button.style.backgroundColor = 'orangered';
    
    switch(button.id){
        case 'buton1':
            mostrarCiudades();
            seccion.scrollIntoView({
            behavior: "smooth",
            block: "start" 
            });
        // alert("presionado boton 1");
        break;
        case 'buton2':
            mostrarEmprendimientos();
            seccion.scrollIntoView({
            behavior: "smooth",
            block: "start" 
            });
        // alert("presionado boton 2");
        break;
        case 'buton3':
        // alert("presionado boton 3");
        break;
        case 'buton4':
        // alert("presionado boton 4");
        break;
    }
    
}