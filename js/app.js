


// const api = "http://localhost:3000/shop";

// fetch(api)
// .then(response => response.json())
// .then(data => {
   
//     let nombres = "";
//     data.forEach(function (data) {

//         nombres +=  ` <h1 class="px-2"> ${data.nombre} </h1> `;
//         // nombres +=  ` <h1> ${data.address} </h1>`;

        
//         document.querySelector('#name').innerHTML = nombres;

//     });


// })
// .catch(err => console.log(err) )

var miRuleta = new Winwheel({
    'numSegments': 26,
    'outerRadius': 250,
    'innerRadius': 85,
    'textFontSize': 15,
    'lineWidth'   : 1,
    'textAlignment': 'center',
    'responsive': true,
    'segments'    :
[
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ffffff', 'fillStyle' : '#ec0000', 'text' : 'Eric Gimenez'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ec0000', 'fillStyle' : '#ffffff', 'text' : 'Mariana Diaz'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ffffff', 'fillStyle' : '#ec0000', 'text' : 'Daniel Kerman'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ec0000', 'fillStyle' : '#ffffff', 'text' : 'Matias Altieri'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ffffff', 'fillStyle' : '#ec0000', 'text' : 'Pablo Gonzalez'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ec0000', 'fillStyle' : '#ffffff', 'text' : 'Mauro Oviedo'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ffffff', 'fillStyle' : '#ec0000', 'text' : 'Araceli Bascur'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ec0000', 'fillStyle' : '#ffffff', 'text' : 'Barbara Calderon'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ffffff', 'fillStyle' : '#ec0000', 'text' : 'Eduardo Aguilar'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ec0000', 'fillStyle' : '#ffffff', 'text' : 'Mariangeles Luengo'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ffffff', 'fillStyle' : '#ec0000', 'text' : 'Maximiliano Gomez'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ec0000', 'fillStyle' : '#ffffff', 'text' : 'Hector Jesus Prieto'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ffffff', 'fillStyle' : '#ec0000', 'text' : 'Maria Riquelme'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ec0000', 'fillStyle' : '#ffffff', 'text' : 'Hernan Pampin'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ffffff', 'fillStyle' : '#ec0000', 'text' : 'Maria Puglisi'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ec0000', 'fillStyle' : '#ffffff', 'text' : 'Gustavo Dick'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ffffff', 'fillStyle' : '#ec0000', 'text' : 'Natacha Carrizo'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ec0000', 'fillStyle' : '#ffffff', 'text' : 'Jose Hernandez'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ffffff', 'fillStyle' : '#ec0000', 'text' : 'Emanuel Garcia'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ec0000', 'fillStyle' : '#ffffff', 'text' : 'Serra Maria'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ffffff', 'fillStyle' : '#ec0000', 'text' : 'Maria Pilar Ortiz'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ec0000', 'fillStyle' : '#ffffff', 'text' : 'Celina Leyes '},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ffffff', 'fillStyle' : '#ec0000', 'text' : 'Alejandra Pineyro'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ec0000', 'fillStyle' : '#ffffff', 'text' : 'Leonardo Flory'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ffffff', 'fillStyle' : '#ec0000', 'text' : 'Juana Gimenez'},
    {'strokeStyle' : '#ffffff', 'textFillStyle' : '#ec0000', 'fillStyle' : '#ffffff', 'text' : 'Sleiman Olivar'}
],
'animation': {
    'type': 'spinToStop',
    'duration': 5,
    'callbackFinished': 'Mensaje()',
    'callbackAfter': 'dibujarIndicador()'
    },
});

function Mensaje(){
    var segmentoSeleccionado = miRuleta.getIndicatedSegment();
    let SegNumber = miRuleta.getIndicatedSegmentNumber()
    // alert("Elemento seleccionado: " + segmentoSeleccionado.text + "!");
    mostrarNombre(segmentoSeleccionado.text)
    //Reinicio de la ruleta(valor inicial)
    miRuleta.stopAnimation(false);
    miRuleta.rotationAngle = 0;
    dibujarIndicador();
    miRuleta.deleteSegment(SegNumber);
    miRuleta.draw();
}

let modal = document.getElementById('modal')
modal.className = 'hide'

let mostrarNombre = (texto) => {
    modal.innerHTML = `<h3>La persona elegida fue:</h3>
    <p>¡${texto}!</p>`
    modal.className = 'show'
}

function dibujarIndicador(){
    var ctx = miRuleta.ctx;
    ctx.strokeStyle = 'navy';
    ctx.fillStyle = '#ec0000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(275, 0);
    ctx.lineTo(300, 0);
    ctx.lineTo(275, 15);
    ctx.lineTo(250, 0);
    ctx.stroke();
    ctx.fill();
}
dibujarIndicador();


/*         function removeSegment(winSegNumber){
    var winSegNumber = miRuleta.getIndicatedSegmentNumber();
    miRuleta.deleteSegment(winSegNumber);
    miRuleta.draw();
} */

//Cards
//Retraso para la animación adecuada.

let delay = 600;

//Colección de todas las cartas.

let cds = document.getElementsByClassName("card");

let cur_num = 0;

document.oncontextmenu = function() { //Desactiva el inspeccionar elemento en navegador.
return true;
}

/*
La función agrega detectores de eventos para todas las tarjetas:
uno para voltear con el botón izquierdo y otro para eliminar
en clic derecho.
*/
function updRules()
{
for (; cur_num < cds.length; cur_num++)
{
let cd = document.getElementsByClassName("card")[cur_num];
let wd = document.getElementsByClassName("word")[cur_num];
let ts = document.getElementsByClassName("trans")[cur_num];

function flipCard() {
    if (!cd.classList.contains("rotator")) {
        cd.classList.add("rotator");
        setTimeout(function(){
            wd.classList.add("hide");
            ts.classList.remove("hide");
            cd.classList.toggle("bgcol");
        }, delay);
        clicked = true;
    }
    else {
        cd.classList.remove("rotator");
        setTimeout(function(){
            wd.classList.remove("hide");
            ts.classList.add("hide");
            cd.classList.toggle("bgcol");
        }, delay);
        clicked = false;
    }
}

function rem() {
    cd.style
    // cd.remove();
    cur_num -= 1;
}

cd.addEventListener("click", flipCard);
cd.addEventListener("contextmenu", rem, false);
}
};

updRules();

/*
La función verifica si la entrada cumple con los requisitos;
construye una nueva tarjeta; limpia campos y agrega detectores de eventos
a la nueva tarjeta.
*/
function addCard() {
let inp_w = document.getElementById("word-inp").value.trim();
let inp_t = document.getElementById("trans-inp").value.trim();

if (inp_w != "" && inp_t != "" && inp_w.length < 30 && inp_t.length < 30)
{
let newCard = document.createElement("div");
let word = document.createElement("div");
let trans = document.createElement("div");
let cont_w = document.createTextNode(inp_w);
let cont_t = document.createTextNode(inp_t);
newCard.className = "card";
word.className = "word";
trans.className = "trans hide";
word.appendChild(cont_w);
trans.appendChild(cont_t);
newCard.append(word);
newCard.append(trans);
document.getElementsByClassName("cards")[0].append(newCard);
document.getElementById("word-inp").value = "";
document.getElementById("trans-inp").value = "";
updRules();
}

};


