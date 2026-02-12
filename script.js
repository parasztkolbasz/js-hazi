function letrehoz() {
    //Lépések, amit követhet:
    //Az üres DIV megkeresése. Ebbe tesszük majd a listát

    var div = document.getElementById("DIV_generalt_lista");
    div.innerHTML = ""; // előző lista törlése


    //Az <ol> elem (node) létrehozása

    var ol = document.createElement("ol")

    //Behelyezés a DIV-be
    div.appendChild(ol);


    //Jöhetnek az <li> elemek
    //Hány elem van? Olvassuk ki!
    var darab = document.getElementById("elemszam").value



    //Egy listaelem létrehozása, utána az <ol> gyermekeként felvétel

    for (let index = 1; index <= darab; index++) {
        var li = document.createElement("li")
        li.innerHTML="Elem"+ index;
        ol.appendChild(li)
        
    }
}

function szinez() {
    //nth-child() - hoz szükséges értékek beszerzése

    //Lekérjük azokn az <li> elemeknek a kollekcióját, amelyekre igaz a szelektor
    //Végigmegyünk minden elemen és a listában megadott színűre állítjuk a backgroundColor-t

    var szam= parseInt(document.getElementById("nth_szam").value)
    var elso = parseInt(document.getElementById("nth_elso").value);
    var szín= document.getElementById("színek").value;


    var div = document.getElementById("div_lista")
    var ol = div.getElementsByTagName("ol")[0]
    if (!ol) {
        return
    }

    for (let index = 0; index < darab; index++) {
        if ((index+1-elso)%szam===0&&(index+1-elso)>=0) {
            li[index].style.backgroundColor=szín
        }
        
    }

}

function szelektorParamterValtozas(kuldo, mi_valtozott) {
    document.getElementById(mi_valtozott).innerHTML = kuldo.value;
}

function szinekTorles() {
    let osszes_li_elem = document.getElementsByTagName("li");

    for (let index = 0; index < osszes_li_elem.length; index++) {
        osszes_li_elem[index].style.backgroundColor = "";
    }
}