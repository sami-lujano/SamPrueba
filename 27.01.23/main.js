let swLocation ="sw.js";

//En el primer if se identifica si el navegador trabaja
if(navigator.serviceWorker){
    //En el segundo if se identifica en que servidor
    if(window.location.href.includes("localhost"))
        swLocation = "/sw.js";
    //registra la ubicación
    navigator.serviceWorker.register(swLocation);
}