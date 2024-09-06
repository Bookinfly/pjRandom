const contenedor = document.querySelector(".flex-container");//selecciona el contenedor
let contador = 0;
let boton = document.querySelector(".send-button");
let valorAntiguo = boton.value;
boton.value = valorAntiguo.toUpperCase();
const ilustraciones = [
    "<img src='/img/ArcherElf.jpg' class=llave.img>",
    "<img src='/img/humanExplorer.jpg' class=llave.img>",
    "<img src='/img/humanKnigth.jpg' class=llave.img>",
    "<img src='/img/humanWarrior.jpg' class=llave.img>",
    "<img src='/img/mageElf.jpg' class=llave.img>",
    "<img src='/img/mageHalfling.jpg' class=llave.img>",
    "<img src='/img/rougueElf.jpg' class=llave.img>",
    "<img src='/img/warriorElf.jpg' class=llave.img>"
]
const nombres = ["Glorfindel", "William", "Geoffrey", "Eleanor", "Erestor", "Fredegar", "Glorfindel", "Haldir"]
const raza = ["Elfo","Humano","Humano","Humano","Elfo","Halfling","Elfo","Elfo"];
const profesion = [["Arquera",1,4,1,2], ["Explorador",2,3,2,1], ["Caballero",2,3,2,1], ["Cleriga Guerrera",2,2,2,2], ["Mago",1,1,4,2], ["Mago",1,1,4,2], ["Pícaro",1,3,1,3], ["Guerrero",3,3,1,1]]
class caracteristicas {
    fuerza;
    agilidad;
    inteligencia;
    carisma;

    constructor(fuerza,agilidad,inteligencia,carisma){
        this.fuerza = fuerza;
        this.agilidad = agilidad;
        this.inteligencia = inteligencia;
        this.carisma = carisma;
    }
}

const caractRandom = () => {
    let sumaF = parseInt(Math.random() * 5); // entre 0 y 4
    let sumaA = parseInt(Math.random() * 5);
    let restante = 8 - sumaA - sumaF;
    let restanteUtilizable = restante <= 4 ? restante : 4;
    let sumaI = (restante > 0) ? parseInt(Math.random() * restanteUtilizable) : 0;
    restante = 8 - sumaA - sumaF - sumaI;
    restanteUtilizable = restante <= 4 ? restante : 4;
    let sumaC = (restante > 0) ? parseInt(Math.random() * restanteUtilizable) : 0;
    return [sumaF, sumaA, sumaI, sumaC];
}

//Introduces 3 variables para crear una "llave" se retorna una lista de variables
function crearAventurero(){
    contador++;//aumenta contador del scoupe global
    razaHeroe = raza[contador-1];
    nombreHeroe = nombres[contador-1];
    profesionMedieval = profesion[contador-1];
    idPj = "Pj" + contador - 1;
    img = ilustraciones[contador-1];
    [sumaF,sumaA,sumaI,sumaC] = caractRandom();
    fuerza = `${profesionMedieval[1]+sumaF}`;
    agilidad = `${profesionMedieval[2]+sumaA}`;
    inteligencia = `${profesionMedieval[3] + sumaI}`;
    carisma = `${profesionMedieval[4] + sumaC}`
    profesionHeroeHTML = `<h2>${profesion[contador-1][0]}</h2>`;
    nombreHTML = `<h3 id='${idPj}'>${nombreHeroe}</h3>`;//incluye el modelo como ID atributo del elemento html
    razaHTML = `<p>Raza: <b>${razaHeroe}</b></p>`
    caracteristicasHTML = 
    `<p>Fuerza ${fuerza}<br>
        Agilidad ${agilidad}<br>
        Inteligencia ${inteligencia}<br>
        Carisma ${carisma}
    </p>`;
        return [img,profesionHeroeHTML,razaHTML,nombreHTML,caracteristicasHTML];
}


const changeHidden = (number)=>{
    document.querySelector(".key-data").value = number;
}

let documentFragment = document.createDocumentFragment();//variable que guarda el metódo para crear fragmentos de html, son mejores que otras opociones que insetan html pero requieren volver a cargar
//mientras que document.createDocumentFragment() va guardando en memoria para despues actualizar todo junto.


for (var i = 1; i <= 8; i++) {
    
    //let precioRandom = Math.round(Math.random()*10+30);
    [img,profesionHeroeHTML,razaHTML,nombreHTML,caracteristicasHTML] = crearAventurero();//invova función crear llave, inserta datos con template literals, la iteración se vuelve el nombre
    let div = document.createElement("div");//creamos un contenedor en memoria
    div.setAttribute("tabindex", "0"); // Esto permite que el div reciba el foco
    div.addEventListener("click", ()=>changeHidden());
    div.classList.add(`flex-item`,`item-${i}`);//le sumamos clases como atributos
    div.innerHTML = img + profesionHeroeHTML + razaHTML + nombreHTML + caracteristicasHTML;//inserta elementos del array llave en el div antes creado.
    // contenedor.innerHTML += div;
    documentFragment.appendChild(div);//agregamos el div como hijo del documentFragment
}

contenedor.appendChild(documentFragment); //agregamos el documenFragment como hijo de contenedor (ver primera variable)