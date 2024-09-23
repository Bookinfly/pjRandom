const contenedor = document.querySelector(".flex-container"); // Selecciona el contenedor con la clase "flex-container"
let contador = 0;

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
const raza = ["Elfo", "Humano", "Humano", "Humano", "Elfo", "Mediano", "Elfo", "Elfo","Enano", "Goblin", "Mediano", "Humano", "Enano", "Goblin", "Humano", "Humano", "Mediano", "Enano", "Goblin", "humano"];

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

///////////////////////////añadido para la librería de descargar como PDF siguiendo tutorial
// document.getElementById("descargarPDF").addEventListener('click', function() {
//     const selectedCardId = "id-de-la-card-seleccionada"; // Aquí debes obtener el ID dinámicamente
//     const selectedCard = document.getElementById(selectedCardId);

//     if (selectedCard) {
//         // Aquí iría la lógica para generar el PDF, que añadiremos en los próximos pasos
//         console.log('Card seleccionada: ', selectedCard);
//     } else {
//         console.error('No se encontró la card seleccionada');
//         }
// })

///////////////////////////

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

// Función para generar habilidades aleatorias basadas en raza y profesión
const habilidadesRandom = (raza, profesion) => {
    let sumaMagia;
    let restante;
    if (raza === "Elfo") {
        sumaMagia = 3;
        restante = 7;
    } else if (profesion === "Clériga Guerrera" || profesion === "Paladin") {
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

///Le da cierto grado de azhar a la tenencia de armas medievales
function equipo(){
    let armaEscondida = loTrae(6);
    let armaCorta = loTrae(10);
    let armaLarga = loTrae(3);
    let armaDistancia = loTrae(3);
    let armaDeCalidad = loTrae(2);
    let municion = parseInt(Math.random() * 30);
    let armadura = loTrae(3);
    let casco = loTrae(3);
    let escudo = loTrae(3);
    let tesoro = parseInt(Math.random() * 5) +1;
    let mochila = loTrae(6);
    let muda = loTrae(3);
    let capa = loTrae(4);
    let provisiones = parseInt(Math.random() * 30);
    let cuerda = loTrae(3);
    let equipoProf = loTrae(3);
    return [armaEscondida, armaCorta, armaLarga, armaDistancia, armaDeCalidad, municion, armadura, casco, escudo, tesoro, mochila, muda, capa, provisiones, cuerda, equipoProf];
};

function equipadas(profesionMedieval){
    let [armaEscondida, armaCorta, armaLarga, armaDistancia, armaDeCalidad, municion, armadura, casco, escudo, tesoro, mochila, muda, capa, provisiones, cuerda, equipoProf] = equipo();//inicia desestructurando equipo(

    let escondida = armaEscondida == true ? "Cuchillo: Combate +0 ":"";
    let corta = armaCorta == true ? "Espada Corta: Combate +1 ":"";
    let larga = armaLarga == true ? "Hacha a 2 manos: Combate +2 ":"";
    let distancia = armaDistancia == true ? "Arco: Combate +1 ":"";
    let calidad = armaDeCalidad == true ? "Espada Larga: Combate +2 Iniciativa +1 " : "";
    municion = armaDistancia == true ? municion : "";
    escudo = escudo == true ? "Escudo +1 Defensa": "";
    casco = casco == true ? "casco +1 Defensa": "";
    armadura = armadura == true ? "Armadura ligera +1 Defensa": "";
    tesoro = `${tesoro * 3} monedas de cobre + ${tesoro } monedas de plata`;
    mochila = mochila == true ? "Mochila de viaje, con equipo de acampar, yesquero, una antorcha, cuenco de cocina y pieles":"Tiene una bolsa colgada al hombro, podrías guardar algo ahí";
    muda = muda == true ? "Un cambio de ropa":"";
    capa = capa == true ? "Capa de viajero con capucha":"";
    provisiones = `Provisiones de viaje para ${provisiones} días`
    cuerda = cuerda == true ? "Una cuerda, ninguna aventura debería comenzar sín una":"";    

    ////////////excepciones
    if (profesionMedieval === "Caballero" || profesionMedieval === "Paladin" || profesionMedieval === "Guerrero" || profesionMedieval === "Noble" || profesionMedieval === "Esgrimista" ){
        calidad = "Espada Larga: Combate +2 Iniciativa +1 ";
        escondida = "Daga: Combate +0";
        distancia = armaDistancia == true ? "Ballesta: Combate + 2":"";
        larga = armaLarga == true ? "Espada a 2 manos: Combate + 2":"";
        armadura = armadura == true ? "Armadura Pesada +3 Defensa": "Armadura de Cota +2 Defensa";
        equipoProf = equipoProf == true ? "Piedra de afilar, equipo de sutura, sello familiar, papiro, pluma y tinta":"";
    } else if ( profesionMedieval ===  "Clériga Guerrera" ||profesionMedieval ===  "Mercenario"|| profesionMedieval ===  "Barbaro" || profesionMedieval === "Mercader Enano") {
        corta = armaCorta == true ? "Masa de Armas: Combate +1":"";
        distancia = armaDistancia == true ? "Ballesta: Combate + 2": "Resortera Combate -1";
        calidad = "Hacha de Batalla: Combate +2 Iniciativa +1 ";
        armadura = armadura == true ? "Armadura de Cota +2 Defensa": "Armadura ligera +1 Defensa";
    } else if (profesionMedieval ===  "Mago"){
        larga = "Cayado: Combate +1, + un hechizo de luz gratis";
        distancia = "Anillo hechizado + 1 hechizo de ataque +0";
        municion = "El anillo guarda 1 de magia para su hechizo, se puede recargar";
        escudo = "";
        casco = "";
        armadura = armadura == true ? "Amuleto protector, te salva una vez, requiere 9 de magia para recargar": "Frasco de Neblina Fatua +1D8 defensa, un solo uso";
        equipoProf = equipoProf == true ? "Bolsitas con hiervas, unguentos, frascos con elixires y toda clase de polvos":"";
    } else if (profesionMedieval === "Arquera" || profesionMedieval === "Pícaro" || profesionMedieval === "Aventurera" ){
        larga = "";
        distancia = armaDistancia == true ? "Arco de caza: Combate + 2 + 1 Iniciativa":"Arco: Combate + 1";
        escondida = "Daga: Combate +0";
        calidad = "Daga Curva: Combate +1 Iniciativa +1";
        equipoProf = equipoProf == true ? "Ganzúas, cuerda y gancho":"";
    } else if (profesionMedieval === "Explorador" || profesionMedieval === "Cazador Goblin" || profesionMedieval === "Guardia Halfling") {
        larga = armaLarga == true ? "Lanza: Combate + 2": "Baston de viajero ataque +0";
        distancia = armaDistancia == true ? "Arco Corto: Combate +1":"Arco: Combate +0";
        corta = armaCorta == true ? "Espada Corta: Combate + 1":"Garrote + Combate +0";
        armadura = armadura == true ? "Armadura ligera de calidad +2 Defensa": "Armadura ligera +1 Defensa";
    } else {
        equipoProf = equipoProf == true ? "Algún elemento de tu profesión combeniente para la trama":"";
    }
    if (profesionMedieval === "Caballero" || profesionMedieval === "Paladin" || profesionMedieval === "Guerrero" || profesionMedieval === "Noble" || profesionMedieval === "Esgrimista" || profesionMedieval === "Mago" || profesionMedieval === "Mercader Enano" || profesionMedieval === "Aventurera" ){
        tesoro = tesoro + ", 3 monedas de oro";
    }
    return[escondida, corta, larga, distancia, calidad, municion, escudo, casco, armadura, tesoro, mochila, muda, capa, provisiones, cuerda, equipoProf];
}       

// Función para crear un aventurero con todas sus características y habilidades
function crearAventurero() {
    contador++; // Incrementa el contador global
    /////////DATOS
    let razaHeroe = raza[contador - 1]; // Asigna la raza del aventurero
    let nombreHeroe = nombres[contador - 1]; // Asigna el nombre del aventurero
    let profesionMedieval = profesion[contador -1][0]
    ///////////CARACTERISTICAS
    let [sumaF, sumaA, sumaI, sumaC] = caractRandom(); // Genera características aleatorias
    let fuerza = `${profesion[contador-1][1] + sumaF}`;
    let agilidad = `${profesion[contador-1][2] + sumaA}`;
    let inteligencia = `${profesion[contador-1][3] + sumaI}`;
    let carisma = `${profesion[contador-1][4] + sumaC}`;
    ///////////HABILIDADES
    let [hCombate, hConocimiento, hLatrocinio, hMagia, hSociales] = profesion[contador -1][5]; // Extrae las habilidades base de la profesión
    let habilidadesAleatorias = habilidadesRandom(razaHeroe, profesionMedieval); // Genera habilidades adicionales
    hCombate += habilidadesAleatorias[0];
    hConocimiento += habilidadesAleatorias[1];
    hLatrocinio += habilidadesAleatorias[2];
    hMagia += habilidadesAleatorias[3];
    hSociales += habilidadesAleatorias[4];
    //////////EQUIPO
    [escondida, corta, larga, distancia, calidad, municion, escudo, casco, armadura, tesoro, mochila, muda, capa, provisiones, cuerda, equipoProf] = equipadas(profesionMedieval);
    /////////HTML
    let idPj = "Pj" + (contador - 1); // crea un ID al personaje
    let img = ilustraciones[contador - 1]; // Selecciona la ilustración correspondiente
    // Genera el HTML de las profesiones, características y habilidades del aventurero
    let pjDatosHTML =
    `<div>
    ${img}<br><div class="pjData">
    <h3><strong >Profesión: ${profesion[contador - 1][0]}</strong></h3>
    <h4 id='${idPj}'>Nombre: <strong>${nombreHeroe}</strong></h4>
    <p><strong >Raza: ${razaHeroe}</strong></p></div></div>`;    
    let caracteristicasHTML = 
    `<div class="separador">
        <h5><strong>Características</strong></h5><br><p>
        <strong>Fuerza ${fuerza}<br>
        Agilidad ${agilidad}<br>
        Inteligencia ${inteligencia}<br>
        Carisma ${carisma}<br>
        <strong class="pv">Puntos de Vida ${fuerza*3}</strong></p>
        <br>
        <p/>
        <h5><strong>Habilidades</strong></h5><br><p></p>
        Combate ${hCombate}<br>
        Conocimiento ${hConocimiento}<br>
        Latrocinio ${hLatrocinio}<br>
        Magia ${hMagia}<br>
        Sociales ${hSociales}<br></p></strong>
    </div>`;
    let armasHTML = `<div class="armas oculto separador">
        <h5><strong>Armamento</strong></h5><br><p>
        <strong>Arma Oculta:</strong> ${escondida}<br>
        <strong>Arma Corta:</strong> ${corta}<br>
        <strong>Arma Larga:</strong> ${larga}<br>
        <strong>Arma de Distancia:</strong> ${distancia}<br>
        <strong>Munición:</strong> ${municion}<br>
        <strong>Arma Especial:</strong> ${calidad}<br></p>  
    </div>`;
    let armaduraHTML = `<div class="armas oculto separador">
        <h5><strong>Protección</strong></h5><br><p>
        <strong>Casco:</strong> ${casco}<br>
        <strong>Armadura:</strong> ${armadura}<br>
        <strong>Escudo:</strong> ${escudo}<br></p>
    </div>`;
    let equipoHTML = `<div class="armas oculto separador">
        <h5><strong>Equipo</strong></h5><br>
        <p><strong>Tesoro:</strong> ${tesoro}<br>
        <strong>Mochila:</strong> ${mochila}<br>
        <strong>Muda:</strong> ${muda} <br>
        <strong>Capa:</strong> ${capa}<br>
        <strong>Provisiones:</strong> ${provisiones}<br>
        <strong>Cuerda:</strong> ${cuerda}<br>
        <strong>Equipo Profesional:</strong> ${equipoProf}<br>
        <strong>Liquido:</strong> Llevas on odre de agua<br></p>
    </div>`;
    return [pjDatosHTML, caracteristicasHTML, armasHTML, armaduraHTML, equipoHTML, idPj];
}

let documentFragment = document.createDocumentFragment(); // Crea un fragmento de documento para insertar múltiples elementos de forma eficiente

// Itera para generar 20 aventureros
for (var i = 1; i <= 20; i++) {
    //let precioRandom = Math.round(Math.random()*10+30);
    [pjDatosHTML ,caracteristicasHTML,armasHTML,armaduraHTML, equipoHTML, idPj] = crearAventurero();//invova función crear llave, inserta datos con template literals, la iteración se vuelve el nombre
    //console.log("verificación " + idPj);
////////////
//si agrego el escuchador de evento y paso el idPj como parametro hace cosas raras, si es global sigue sumando, sino  cuando quiero usar destructuring lo leé en el console.log, pero no para pasarlo por parametro. Voy a hacerlo por fuera.
/////////
    let div = document.createElement("div");//creamos un contenedor en memoria
    div.setAttribute('id', idPj);
    div.classList.add('pj');//clase para dejar de ocultar elementos
    div.setAttribute("tabindex", "0"); // Esto permite que el div reciba el foco
    div.classList.add(`flex-item`,`item-${i}`);//le sumamos clases como atributos
    div.innerHTML = pjDatosHTML + caracteristicasHTML + armasHTML + armaduraHTML + equipoHTML;//inserta elementos del array llave en el div antes creado.
    documentFragment.appendChild(div);//agregamos el div como hijo del documentFragment
}

contenedor.appendChild(documentFragment); //agregamos el documenFragment como hijo de contenedor (ver primera variable);

//////////addEventListener (podría seleccionar todos por clase y creo que consumiría menos recursos, queda para el backlog)
for (i = 0; i <= 19; i++) {
    let ident = "Pj" + i;
    let card = document.getElementById(ident);
    card.addEventListener("focus", function(){// Función que cambia el valor oculto (hidden) del campo del formulario
        document.querySelector(".key-data").value = this.id;
        console.log(document.querySelector(".key-data").value)
    } )
}
