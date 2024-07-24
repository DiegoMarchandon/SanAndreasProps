
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
    // variables globales para mostrarCiudad()
    var index = 0;
    var ciudadContainer;
    // variable global para almacenar el timeout de mostrarCiudad() y eliminarlo/resetearlo luego en caso de que ya no se necesite
    var newTimeout; 
    // contenedor general del slide automático de ciudades
    
    function mostrarCiudades() {
        
        // antes de ir creando y reemplazando el contenedor de ciudades, verifico que no se haya creado el contenedor que muestra las demás ciudades.
            // (problema con haber utilizado el childElementCount, porque después de 8 segundos me borraba todo el contenedor y no veía las demás ciudades (SF, LV)).
        if(seccion.querySelector('.backgroundOpcion')){
            seccion.innerHTML = '';
        }
        // si ya está definido un timeout, lo limpio.
        if(newTimeout != undefined){
            clearTimeout(newTimeout);
            // console.log("!= undefined. clearTimeout desde mostrarCiudades");
        }

        // para evitar que se creen nuevos contenedores clickeando su botón, verifico que no se haya creado antes 
        if(ciudadContainer == undefined){
        // console.log("creo el contenedor");
        ciudadContainer = document.createElement('div');
        ciudadContainer.className = 'ciudades';
        ciudadContainer.style.display = 'flex';
        ciudadContainer.style.justifyContent= 'center';
        ciudadContainer.style.alignItems = 'center';
        }else{
            // console.log("limpio el contenedor para crear una nueva ciudad");
            ciudadContainer.innerHTML = '';
        }
        seccion.appendChild(ciudadContainer); 

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
        // Incrementar el índice y resetear si es necesario
        // index = (index + 1) % (Object.keys(ciudades).length);
        index++;
        if(index == Object.keys(ciudades).length){
            index = 0;
        }
        // Configurar para mostrar la siguiente ciudad después de 8 segundos
        newTimeout = setTimeout(mostrarCiudades, 8000);
        // console.log("timeuotización");

    }
    

    function propEmpAlq(opcion){
        
        // si ya está definido un timeout, lo limpio.
        if(newTimeout != undefined){
            // console.log("!= undefined. clearTimeout desde propEmpAlq y limpio el contenedor de ciudades en caso de volver a seleccionarse");
            ciudadContainer.remove();
            clearTimeout(newTimeout);
            // newTimeout = undefined;
        }
        /* creo elementos por defecto que serán modificados dependiendo de la elección de la opción:
        emprendimientos, propiedades o alquileres. */
        const backgroundOpcion = document.createElement('div');
        backgroundOpcion.className = 'backgroundOpcion';
        const cardOpcion = document.createElement('div');
        cardOpcion.className = 'cardOpcion glass-effect';
        
        const IMGopcionContainer = document.createElement('div');
        IMGopcionContainer.id = 'IMGopcionContainer';
        const anuncio = document.createElement('span');
        anuncio.innerText = 'DESTACADO';
        anuncio.style.cssText = 'background-color: red; padding: 5px; border-radius: 15px;';
        const IMGopcionEjemplo = document.createElement('img');
        IMGopcionEjemplo.alt = 'imagen de ejemplo';
        IMGopcionEjemplo.src = 'C:\Users\diego\OneDrive\Imágenes\in_search_of_sunrise_by_zerve.jpg';
        IMGopcionContainer.append(anuncio, IMGopcionEjemplo);

        const opcionTextContainer = document.createElement('div');
        opcionTextContainer.id = 'descripcionOpcion';
        const textOpcion = document.createElement('p');
        textOpcion.innerText = 'la imagen mostrada seleccionada por defecto. Inserte el texto de la opción seleccionada.';
        textOpcion.style.cssText = 'text-shadow: 1px 1px 0px #000, -1px -1px 0px #000, -1px 1px 0px #000, 1px -1px 0px #000; margin: 5px';
        textOpcion.style.color = 'white';
        const buttonOpcion = document.createElement('span');
        buttonOpcion.innerText = 'especifique la opción';
        buttonOpcion.style.cssText = 'color:black; background-color: black; padding: 5px; margin: 5px; border: 1px ridge black; border-radius: 20px';    
        opcionTextContainer.append(textOpcion, buttonOpcion);

        cardOpcion.append(IMGopcionContainer, opcionTextContainer);
        backgroundOpcion.appendChild(cardOpcion);


        // antes de mostrar la tarjeta, borro los anteriores hijos:
        if(seccion.childElementCount != 0){
            seccion.innerHTML = '';
        }
        // ahora personalizo la tarjeta dependiendo de la opción:
        if(opcion === "emprendimiento"){
            backgroundOpcion.style.backgroundImage = 'url(imagenes/wang-cars.jpg)';
            cardOpcion.style.border = '2px solid lightblue';
            cardOpcion.style.backgroundColor = '#0dd8ce10';
            cardOpcion.style.cursor = 'pointer';
            /* cardOpcion.addEventListener('click',function(){

            }) */
            IMGopcionContainer.style.backgroundImage = 'linear-gradient(lightblue,black)';
            IMGopcionEjemplo.src = 'imagenes/wangCarsAI.jpg';
            textOpcion.innerText = 'Ofrecemos inversiones atractivas a través de nuestras unidades en preventa con precios competitivos y diversas facilidades de pago. Abarcamos una gama exclusiva de proyectos innovadores y de alta calidad, diseñados para satisfacer sus necesidades y transformar sus sueños en realidades.';
            buttonOpcion.style.backgroundColor = 'lightblue';
            buttonOpcion.innerText = ' ver Emprendimientos';

        }else if(opcion === "propiedades"){
            backgroundOpcion.style.backgroundImage = 'url(imagenes/propiedadesBackground.jpg)';
            cardOpcion.style.border = '2px solid rgb(64, 180, 64)';
            cardOpcion.style.backgroundColor = '#3cff0010';
            cardOpcion.style.cursor = 'pointer';
            cardOpcion.addEventListener('click',function(){
                window.location.href = 'propiedades.html';
            })
            IMGopcionContainer.style.backgroundImage = 'linear-gradient(rgb(64, 180, 64),black)';
            IMGopcionEjemplo.src = 'imagenes/prop1Smoke.jpg';
            textOpcion.innerHTML = '<b>descubre tu hogar ideal con nosotros. </b> Escoge entre una amplia variedad de opciones que se adaptan a tus necesidades y estilo de vida. Desde acogedores apartamentos hasta lujosas casas, cada propiedad ha sido seleccionada cuidadosamente para ofrecerte la mejor calidad y ubicación. ¡Tu próxima aventura comienza con un nuevo hogar, y estamos aquí para ayudarte a encontrarlo!';
            buttonOpcion.style.backgroundColor = 'lightgreen';
            buttonOpcion.innerText = ' ver Propiedades';

        }else if(opcion === "alquileres"){
            backgroundOpcion.style.backgroundImage = 'url(imagenes/alquileresBackground.jpg)';
            cardOpcion.style.border = '2px solid rgb(233, 166, 66)';
            cardOpcion.style.backgroundColor = '#ee871210';
            cardOpcion.style.cursor = 'pointer';
            cardOpcion.addEventListener('click',function(){
                window.location.href = 'propiedades.html';
                // muestraAlquileres();
            })
            IMGopcionContainer.style.backgroundImage = 'linear-gradient(rgb(233, 166, 66),black)';
            IMGopcionEjemplo.src = 'imagenes/slider/casasFotos/gallery55.jpg';
            textOpcion.innerText = 'Encuentra, en nuestra amplia gama de opciones, la que mejor se adapte a tu presupuesto y estilo de vida. Ya sea que busques un apartamento moderno en el centro de la ciudad o una casa espaciosa en un barrio tranquilo, tenemos la propiedad ideal para ti. Descubre la comodidad y flexibilidad del alquiler con nosotros, y encuentra tu próximo hogar sin complicaciones.';
            buttonOpcion.style.backgroundColor = 'rgb(233, 166, 66)';
            buttonOpcion.innerText = ' ver Alquileres';
        }
        seccion.appendChild(backgroundOpcion);
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
            propEmpAlq("emprendimiento");
            seccion.scrollIntoView({
            behavior: "smooth",
            block: "start" 
            });
        // alert("presionado boton 2");
        break;
        case 'buton3':
            propEmpAlq("alquileres");
            seccion.scrollIntoView({
                behavior: "smooth",
                block: "start" 
                });
        // alert("presionado boton 3");
        break;
        case 'buton4':
            propEmpAlq("propiedades");
            seccion.scrollIntoView({
            behavior: "smooth",
            block: "start" 
            });
        // alert("presionado boton 4");
        break;
    }
    
}