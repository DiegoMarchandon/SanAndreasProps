function slideCiudades() {
    var ciudadContainer = document.getElementsByClassName('ciudades');
    var ciudades = document.getElementsByClassName('ciudad');
    // Mostrar el contenedor principal
    ciudadContainer[0].style.display = 'flex';
    ciudadContainer[0].style.justifyContent= 'center';
    ciudadContainer[0].style.alignItems = 'center';
    

    // Función para mostrar ciudades secuencialmente
    index = 0;
    function mostrarCiudad() {
        
            // Oculto todas las ciudades
            for (let i = 0; i < ciudades.length; i++) {
                ciudades[i].style.display = 'none';
            }
                // muestro la ciudad actual
                ciudades[index].style.display = 'block';

                // Incrementar el índice y resetear si es necesario
                index = (index + 1) % ciudades.length;
                
            
            // Configurar para mostrar la siguiente ciudad después de 4 segundos
            setTimeout(mostrarCiudad, 8000);
            
    }
    
    // Iniciar el ciclo con la primera ciudad
    mostrarCiudad();
}

function verPropuesta(button){
    // location.href='#seccionElegida';
    let seccion = document.getElementById('seccionElegida');
    let buttonContainer = document.getElementById('button-container');
    let botones = buttonContainer.querySelectorAll('button');
    // Restablecer el estilo de todos los botones
    botones.forEach(btn => {
       
        btn.style.borderColor = 'black';
        btn.style.backgroundColor = 'orange';
    });
    
    button.style.borderColor = 'white';
    button.style.backgroundColor = 'orangered';
    
    switch(button.id){
        case 'buton1':
            slideCiudades();
            seccion.scrollIntoView({
            behavior: "smooth",
            block: "start" 
            });
        // alert("presionado boton 1");
        break;
        case 'buton2':
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