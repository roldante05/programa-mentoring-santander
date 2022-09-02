//Retraso para la animación adecuada.

let delay = 600;

//Colección de todas las cartas.

let cds = document.getElementsByClassName("card");

let cur_num = 0;

document.oncontextmenu = function() {
    return false;
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
            cd.remove();
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

