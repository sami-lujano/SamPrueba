const STASTIC_ = "static"
//se declara un vector con la ubicación y el nombre de los 
const APP_SHELL =[
    "/",
    "index.html",
    "styles./style.css",
    "js/functions.js",
    "js/main.js",
    "js/script1.js",
    "js/script2.js",
    "images/beerjs-logo.png",
];
    //En el evento install se agregan los archivos a la carpetas
self.addEventListener("install", (e) => {
    const cacheStatic = caches
    .open(STATIC_CACHE)
    .then((cache) => cache.addAll (APP_SHELL));
    
    e.waitUntil(cacheStatic);
});

self.addEventListener("fetch", (e) => {
    console.log("fectch! ", e.request);

    e.respondWith(
        caches
        .match(e.request)
        .then(res => res || fetch(e.request))
        .catch(console.log)
    );
});