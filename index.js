const contenedor = document.querySelector(".flex-container"); // Selecciona el contenedor con la clase "flex-container"
let contador = 0;
let boton = document.querySelector(".send-button"); // Selecciona el botón con la clase "send-button"
let valorAntiguo = boton.value; // Guarda el valor actual del botón

// Array de imágenes de personajes con clases de imagen asignadas
const ilustraciones = [
    "<img src='/img/ArcherElf.jpg' class=llave.img>",
    "<img src='/img/humanExplorer.jpg' class=llave.img>",
    "<img src='/img/humanKnigth.jpg' class=llave.img>",
    "<img src='/img/humanWarrior.jpg' class=llave.img>",
    "<img src='/img/mageElf.jpg' class=llave.img>",
    "<img src='/img/mageHalfling.jpg' class=llave.img>",
    "<img src='/img/rougueElf.jpg' class=llave.img>",
    "<img src='/img/warriorElf.jpg' class=llave.img>",
    "<img src='/img/guerreroEnano.jpg' class=llave.img>",
    "<img src='/img/barbarrianGoblin.jpg' class=llave.img>",
    "<img src='/img/halflingPicaro.jpg' class=llave.img>",
    "<img src='/img/hummanBarbarian).jpg' class=llave.img>",
    "<img src='/img/jovenEnana.jpg' class=llave.img>",
    "<img src='/img/arqueraGoblin.jpg' class=llave.img>",
    "<img src='/img/nobleEscpadachina.jpg' class=llave.img>",
    "<img src='/img/noble.jpg' class=llave.img>",
    "<img src='/img/halflingGuerrera.jpg' class=llave.img>",
    "<img src='/img/comercianteEnano.jpg' class=llave.img>",
    "<img src='/img/goblinAsesino.jpg' class=llave.img>",
    "<img src='/img/paladin.jpg' class=llave.img>"
];

// Arrays de nombres, razas y profesiones de los personajes
const nombres = ["Glorfindel", "William", "Geoffrey", "Eleanor", "Erestor", "Galadros", "Aerendil", "Tuckbrin", "Dorlak", "Zorgash", "Ferdin","Tharion", "Bryndis","Luzgri", "Aveline", "Lindir","Brandyla", "Grimbald","Vroth", "Ceredin"];
const raza = ["Elfo", "Humano", "Humano", "Humano", "Elfo", "Halfling", "Elfo", "Elfo","Enano", "Goblin", "Mediano", "Humano", "Enano", "Goblin", "Humano", "Humano", "Mediano", "Enano", "Goblin", "humano"];

// Array de profesiones con características base
// Cada profesión tiene el formato [Nombre, Fuerza, Agilidad, Inteligencia, Carisma, [Combate, Conocimiento, Latrocinio, Magia, Sociales]]
const profesion = [
    ["Arquera", 1, 3, 2, 2, [3, 2, 2, 1, 2]], 
    ["Explorador", 1, 3, 2, 2, [3, 3, 2, 1, 1]], 
    ["Caballero", 2, 3, 2, 1, [4, 3, 0, 1, 2]], 
    ["Clériga Guerrera", 2, 2, 2, 2, [4, 3, 0, 3, 2]], 
    ["Mago", 1, 1, 4, 2, [1, 4, 0, 4, 1]], 
    ["Mago", 1, 1, 4, 2, [1, 4, 0, 4, 1]], 
    ["Pícaro", 1, 3, 2, 2, [2, 2, 4, 1, 1]], 
    ["Guerrero", 2, 2, 2, 2, [4, 3, 1, 1, 1]],
    ["Mercenario", 4, 1, 2, 1, [4, 3, 1, 0, 2]],
    ["Barbaro", 4, 2, 1, 1, [4, 3, 0, 1, 2]],
    ["Pícaro", 1, 3, 2, 2, [4, 1, 4, 0, 1]],
    ["Barbaro", 4, 2, 1, 1, [4, 3, 0, 1, 2]],
    ["Aventurera", 3, 1, 2, 2, [3, 2, 1, 1, 3]],
    ["Arquera", 2, 4, 1, 1, [4, 1, 4, 0, 1]],
    ["Esgrimista", 2, 3, 2, 1, [4, 3, 1, 0, 2]],
    ["Noble", 2, 2, 2, 2, [3, 3, 1, 0, 3]], 
    ["Guardia Halfling", 1, 3, 2, 2, [4, 2, 2, 0, 2]], 
    ["Mercader Enano", 2, 1, 3, 2, [3, 3, 1, 0, 3]], 
    ["Cazador Goblin", 3, 3, 1, 1, [4, 2, 3, 0, 1]], 
    ["Paladin", 3, 2, 1, 2, [4, 2, 1, 2, 1]], 
];

function loTrae(chances) {
    let equipado = parseInt(Math.random() * chances) ? true : false;
    return equipado;
}

// Función para generar números aleatorios y distribuir características base
const caractRandom = () => {
    let sumaF = parseInt(Math.random() * 4) + 1; // Entre 1 y 4 para Fuerza
    let sumaA = parseInt(Math.random() * 4) + 1; // Entre 1 y 4 para Agilidad
    let restante = 8 - sumaA - sumaF; // Actualiza números restantes para distribuir
    let restanteUtilizable = restante <= 4 ? restante : 4; // Asegura que ningún valor supere 4
    let sumaI = (restante > 0) ? parseInt(Math.random() * restanteUtilizable + 1) : 0; // Asigna a Inteligencia
    restante = 8 - sumaA - sumaF - sumaI; // Actualiza restantes
    restanteUtilizable = restante <= 4 ? restante : 4; // Actualiza para el último valor
    let sumaC = restanteUtilizable; // Carisma recibe lo restante
    restante -= restanteUtilizable;
    if (restante > 0) sumaI++; // Si sobra 1, lo sumamos a Inteligencia
    return [sumaF, sumaA, sumaI, sumaC];
}

// // Función para generar números aleatorios y distribuir características base
// const caractRandom = () => {
//     let sumaF = parseInt(Math.random() * 4) + 1; // Entre 1 y 4 para Fuerza
//     let sumaA = parseInt(Math.random() * 4) + 1; // Entre 1 y 4 para Agilidad
//     let restante = 8 - sumaA - sumaF; // Actualiza números restantes para distribuir
//     let restanteUtilizable = restante <= 4 ? restante : 4; // Asegura que ningún valor supere 4
//     let sumaI = (restante > 0) ? parseInt(Math.random() * restanteUtilizable + 1) : 0; // Asigna a Inteligencia
//     restante = 8 - sumaA - sumaF - sumaI; // Actualiza restantes
//     restanteUtilizable = restante <= 4 ? restante : 4; // Actualiza para el último valor
//     let sumaC = restanteUtilizable; // Carisma recibe lo restante
//     if (restante > 0) sumaI++; // Si sobra 1, lo sumamos a Inteligencia
//     return [sumaF, sumaA, sumaI, sumaC];
// }

// Función para generar habilidades aleatorias basadas en raza y profesión
const habilidadesRandom = (raza, profesion) => {
    let sumaMagia;
    let restante;
    if (raza == "Elfo") {
        sumaMagia = 3;
        restante = 7;
    } else if (profesion == "Clériga Guerrera" || "Paladin") {
        sumaMagia = 3;
        restante = 7;
    } else {
        sumaMagia = 0;
        restante = 10;
    }
    let sumaComb = parseInt(Math.random() * 4) + 1; // Entre 1 y 4 para Combate
    let sumaCono = parseInt(Math.random() * 3) + 1; // Entre 1 y 3 para Conocimiento
    restante = restante - sumaComb - sumaCono; // Actualiza números restantes
    let restanteUtilizable = restante <= 4 ? restante : 4; // Asegura que ningún valor supere 4
    let sumaLat = (restante > 0) ? parseInt(Math.random() * restanteUtilizable + 1) : 0; // Asigna a Latrocinio
    restante -= sumaLat; // Actualiza restantes
    let sumaSoc = restante <= 4 ? restante : 4; // Sociales recibe lo restante
    return [sumaComb, sumaCono, sumaLat, sumaMagia, sumaSoc];
}

function armas(){
    let armaEscondida = loTrae(4);
    let armaCorta = loTrae(8);
    let armaLarga = loTrae(3);
    let armaDistacia = loTrae(3);
    let armaDeCalidad = loTrae(2);
    let municion = parseInt(Math.random() * 30);
    return [armaEscondida, armaCorta, armaLarga, armaDistacia, armaDeCalidad, municion];
};

function equipadas(armaEsc, armaCor, armaLar, armaDis, armaCal, mun, razaHeroe, profesionMedieval ){
    if (profesionMedieval == "Mago"){
        AC = armaCal? "Cayado +1 ataque + 1 Ini":"";
    } ///quede por acá
}

// Función para crear un aventurero con todas sus características y habilidades
function crearAventurero() {
    contador++; // Incrementa el contador global
    let [armaEsc, armaCor, armaLar, armaDis, armaCal, mun] = armas();
    let razaHeroe = raza[contador - 1]; // Asigna la raza del aventurero
    let nombreHeroe = nombres[contador - 1]; // Asigna el nombre del aventurero
    let profesionMedieval = profesion[contador - 1]; // Asigna la profesión
    let [hCombate, hConocimiento, hLatrocinio, hMagia, hSociales] = profesionMedieval[5]; // Extrae las habilidades base de la profesión
    let habilidadesAleatorias = habilidadesRandom(razaHeroe, profesionMedieval[0]); // Genera habilidades adicionales
    hCombate += habilidadesAleatorias[0];
    hConocimiento += habilidadesAleatorias[1];
    hLatrocinio += habilidadesAleatorias[2];
    hMagia += habilidadesAleatorias[3];
    hSociales += habilidadesAleatorias[4];
    let idPj = "Pj" + (contador - 1); // Asigna un ID al personaje
    let img = ilustraciones[contador - 1]; // Selecciona la ilustración correspondiente
    let [sumaF, sumaA, sumaI, sumaC] = caractRandom(); // Genera características aleatorias
    let fuerza = `${profesionMedieval[1] + sumaF}`;
    let agilidad = `${profesionMedieval[2] + sumaA}`;
    let inteligencia = `${profesionMedieval[3] + sumaI}`;
    let carisma = `${profesionMedieval[4] + sumaC}`;
    
    // Genera el HTML de las profesiones, características y habilidades del aventurero
    let profesionHeroeHTML = `<h2>${profesion[contador - 1][0]}</h2>`;
    let nombreHTML = `<h3 id='${idPj}'>${nombreHeroe}</h3>`;
    let razaHTML = `<p>Raza: <b>${razaHeroe}</b></p>`;
    let caracteristicasHTML = 
    `<p>
        <b>Características</b><br>
        Fuerza ${fuerza}<br>
        Agilidad ${agilidad}<br>
        Inteligencia ${inteligencia}<br>
        Carisma ${carisma}<br>
        <b class="pv">Puntos de Vida ${fuerza*3}</b>
    </p>`;

    let habilidadesHTML = `<p>
        <b>Habilidades</b><br>
        Combate ${hCombate}<br>
        Conocimiento ${hConocimiento}<br>
        Latrocinio ${hLatrocinio}<br>
        Magia ${hMagia}<br>
        Sociales ${hSociales}<br>
    </p>`;
    
    let armasHTML = `<p class="armas">
    <b>Armamento Inicial</b><br>
    Cuchillo pequeño ${hCombate}<br>
    Arma de puño ${hConocimiento}<br>
    Arma de mano ${hLatrocinio}<br>
    Arma Larga ${hMagia}<br>
    Arma de Distancia${hSociales}<br>
    Munición${hSociales}<br>

</p>`;
    return [img, profesionHeroeHTML, razaHTML, nombreHTML, caracteristicasHTML, habilidadesHTML, armasHTML];
}

// Función que cambia el valor oculto (hidden) del campo del formulario
const changeHidden = (number) => {
    document.querySelector(".key-data").value = number;
}

let documentFragment = document.createDocumentFragment(); // Crea un fragmento de documento para insertar múltiples elementos de forma eficiente

// Itera para generar 8 aventureros
for (var i = 1; i <= 20; i++) {
    //let precioRandom = Math.round(Math.random()*10+30);
    [img,profesionHeroeHTML,razaHTML,nombreHTML,caracteristicasHTML, habilidadesHTML] = crearAventurero();//invova función crear llave, inserta datos con template literals, la iteración se vuelve el nombre
    let div = document.createElement("div");//creamos un contenedor en memoria
    div.setAttribute("tabindex", "0"); // Esto permite que el div reciba el foco
    div.addEventListener("click", ()=>changeHidden());
    div.classList.add(`flex-item`,`item-${i}`);//le sumamos clases como atributos
    div.innerHTML = img + profesionHeroeHTML + razaHTML + nombreHTML + caracteristicasHTML + habilidadesHTML;//inserta elementos del array llave en el div antes creado.
    // contenedor.innerHTML += div;
    documentFragment.appendChild(div);//agregamos el div como hijo del documentFragment
}

contenedor.appendChild(documentFragment); //agregamos el documenFragment como hijo de contenedor (ver primera variable)