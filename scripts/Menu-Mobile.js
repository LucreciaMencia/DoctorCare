// Functions from here -------------------------------------------------------------------------------------------

function activarCarouseles(){
    infoCarousel = new Flickity('.info', { cellAlign: "left", contain: true, prevNextButtons: false});
    popularesCarousel = new Flickity('.grid-layout', { cellAlign: "left", contain: true, prevNextButtons: false});        
}

function desactivarCarouseles(){
    if (infoCarousel) {
        infoCarousel.destroy();
    }
    if(popularesCarousel) {
        popularesCarousel.destroy();
    }
}

function screenTest(e) {
    if (e.matches) {
       activarCarouseles();
    } else {
        desactivarCarouseles();
    }
}

function openMenu(){
    const sidebar = document.querySelector('#sidebar')
    sidebar.style.display = 'flex'
}

function closeMenu(){
    const sidebar = document.querySelector('#sidebar')
    sidebar.style.display = 'none'
}

// Script from here -------------------------------------------------------
let infoCarousel;
let popularesCarousel;

const mql = window.matchMedia("(max-width: 360px)");

if(mql.matches){
    activarCarouseles();
}

mql.addEventListener("change", screenTest);


/* Primero: 
 identificar el tamaño de la pantalla en la que hay que desactivar el menu desktop
    tamaño: probemos con 900px
    BREAKPOINTS: 0 - 320 - 480 - 960 - 1328
    
    @media screen and (min-width:321px) and (max-width:480px){}
    @media screen and (min-width:481px) and (max-width:960px){}
    @media screen and (min-width:961px){}
    
    que es lanscape y como utilizarlo?


 guardar el valor en una variable con EJEMPLO: const mql = window.matchMedia("(max-width: 360px)");
Segundo: 
si la variable tiene ese valor en true, apagar el display del menu desktop y activar la hamburguesa del menu mobile
si esta en false que vuelva a verse y desactivar la hamburguesa del menu mobile
 */