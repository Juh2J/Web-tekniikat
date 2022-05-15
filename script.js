


function cat1() {

document.querySelector("#catPicture").innerHTML="";

document.querySelector("#showCat").innerHTML = "<span>Persialainen</span> on kotikissarotu, joka tunnetaan pitkäkarvaisuudestaan ja lyhyestä kuonostaan.";

let img = document.createElement("img");
img.src = "../pictures/persialainen.jpg";
let div = document.getElementById("catPicture");
div.appendChild(img);
}

function cat2() {

document.querySelector("#catPicture").innerHTML="";

document.querySelector("#showCat").innerHTML = "<span>American Curl</span> Rodulle on tyypillistä erikoisen näköiset korvat, jotka kiertyvät taakse poispäin kasvoista.";


let img = document.createElement("img");
img.src = "../pictures/american_curl.jpg";
let div = document.getElementById("catPicture");
div.appendChild(img);
}



function cat3() {

document.querySelector("#catPicture").innerHTML="";

document.querySelector("#showCat").innerHTML = "<span>Bengali</span>Tyypillistä bengalille ovat lihaksikas ja pitkänomainen vartalo ja pienehkö pää suhteessa vartaloon.";

let img = document.createElement("img");
img.src = "../pictures/bengal.jpg";
let div = document.getElementById("catPicture");
div.appendChild(img);

}

function cat4() {

document.querySelector("#catPicture").innerHTML="";

document.querySelector("#showCat").innerHTML = "<span>Abessiinialainen</span> on leikkisä ja hieman pienikokoista puumaa muistuttava kissarotu. Se on yksi vanhimmista tunnetuista kissaroduista, ja sen tunnusmerkki on turkin ticking-kuviointi.";

let img = document.createElement("img");
img.src = "../pictures/abessiinialainen.jpg";
let div = document.getElementById("catPicture");
div.appendChild(img);

}



fetch('https://catfact.ninja/fact?max_length=140')
    .then(response => response.json())
    .then(data =>  document.getElementById('restApi').innerHTML = data.fact);
    
function joke1() {

document.querySelector("#showJoke").innerHTML="";
        
document.querySelector("#showJoke").innerHTML = "Mitä kissa sanoi kun näki koiran? Miau....";
}       

function joke2() {

    document.querySelector("#showJoke").innerHTML="";
            
    document.querySelector("#showJoke").innerHTML = "Pitääkö kissasi lapsista? Pitää, mutta enemmän se tykkää silakoista.";
}       
    

function joke3() {

    document.querySelector("#showJoke").innerHTML="";
                
    document.querySelector("#showJoke").innerHTML = "Mikä suklaa on kielletty kissoilta? Tietysti Nougat.";
}       

function mouseOver() {
    document.getElementById("frontH1").style.color = "orange"
    document.getElementById("frontH1").style.fontSize = "50px";
  }
  
  function mouseOut() {
    document.getElementById("frontH1").style.color = "black"
    document.getElementById("frontH1").style.fontSize = "40px";
  }

  function mouseOver2() {
    document.querySelector("#rodutH1").style.color = "orange"
    document.querySelector("#rodutH1").style.fontSize = "50px";
  }
  
  function mouseOut2() {
    document.querySelector("#rodutH1").style.color = "black"
    document.querySelector("#rodutH1").style.fontSize = "40px";
  }