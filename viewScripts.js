
/**
 * despliega la barra lateral propia del usuario
 */
export function despliega(){
    
    var panel = document.getElementsByClassName("panel-lateral")[0];
    const propsFavsContainer = document.getElementsByClassName("propsFavsContainer")[0];
    const conversorContaienr = document.getElementsByClassName("conversorContainer")[0];
    const mensajesContainer = document.getElementsByClassName("mensajesContainer")[0];
    const novedadesContaienr = document.getElementsByClassName("novedadesContainer")[0];
    
    // utilizamos window. porque queremos acceder las propiedades de estilo computadas en el contexto de la ventana actual.
    // Esto debido a que la propiedad está relacionada a la renderizacion del estilo en la ventana actual y su visualización en el navegador.
    const panelComputado = window.getComputedStyle(panel).getPropertyValue("left");
    // const botonDesplegable = document.getElementById("desplegable");
    const flecha = document.getElementById("arrow");
    
    if(panelComputado === "-190px"){
        panel.style.transition = "2s";
        panel.style.left = "0px";
        flecha.style.transition = "4s";
        flecha.style.transform = "rotateY(180deg)";
    }else{
        panel.style.transition = "2s";
        panel.style.left = "-190px";
        flecha.style.transition = "4s";
        flecha.style.transform = "rotateY(0deg)";
    }
}

export function showContent(p){
    // console.log("imprimo el elemento: " + p.innerText);
    const triangulos = document.getElementsByClassName("trianguloDesplegable");
    const triangulosArray = Array.from(triangulos);
    /* obtengo el nodo padre (div) del parrafo */
        var nodoPadre = p.parentNode;
        console.log(nodoPadre);
        /* accedo al nodo hermano del padre (el otro div) para desplegar su contenido */
        var contDesplegado = nodoPadre.nextElementSibling;
        /* accedo al hijo del nodo hermano del padre ("primo") y muestro el texto*/
        var textoVacio = contDesplegado.firstElementChild;
        // console.log(contDesplegado);
    if(p.innerText === "▲"){
        /* bucle para cerrar los demás contenidos */
        triangulosArray.forEach(triangulo => {
            triangulo.innerText = "▲"; 
            var TrianguloPadre = triangulo.parentNode;
            console.log("elemento numero " + triangulosArray.indexOf(triangulo));
            console.log(TrianguloPadre);
            var TrianguloTio = TrianguloPadre.nextElementSibling; 
            console.log(TrianguloTio);
            var TrianguloPrimo = TrianguloTio.firstElementChild;
            console.log(TrianguloPrimo);
            TrianguloTio.style.height = '0px'; 
            TrianguloPrimo.style.display = 'none';
        });
        p.innerText = "▼";
        
        contDesplegado.style.transition = "1s";
        contDesplegado.style.height = '200px'; 
        textoVacio.style.display = 'inline';
    }else{
        p.innerText = "▲";
        contDesplegado.style.height = '0px'; 
        textoVacio.style.display = 'none';
    }
}

/**
 * Realiza la conversión de una moneda a otra
 */
export function conversor(input){

    var moneda1Value = parseFloat(document.getElementById("monedaValue1").value);
    var moneda1 = document.getElementById("monedaValue1");
    var moneda2Value = parseFloat(document.getElementById("monedaValue2").value);
    var moneda2 = document.getElementById("monedaValue2");


    // obtengo el tipo de moneda en ese momento

    var selectTag2 = document.getElementById("moneda2");
    var selectedOption2 = selectTag2.value;

    if(input.id =="monedaValue1"){
        if(selectedOption2 == "Dolar"){
            moneda2.value = (moneda1Value * (0.5888)).toFixed(5);
        }else{ // selectedOption2 == "Peso"
            moneda2.value = (moneda1Value / (0.5888)).toFixed(5);
        }
    }else{ //monedaValue2
        if(selectedOption2 == "Dolar"){
            moneda1.value = (moneda2Value * (1.7)).toFixed(5);
        }else{ // selectedOption2 == "Peso"
            moneda1.value = (moneda2Value / (1.7)).toFixed(5);
        }
    }
}