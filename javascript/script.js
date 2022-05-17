//näyttää nappia painamalla esimerkkikuvan roduista sekä pienen kuvailun.
function cat1() {

document.querySelector("#catPicture").innerHTML="";

document.querySelector("#showCat").innerHTML = "<span>Persialainen</span> on kotikissarotu, joka tunnetaan pitkäkarvaisuudestaan ja lyhyestä kuonostaan.(www.wikipedia.fi)";

let img = document.createElement("img");
img.src = "../pictures/persialainen.jpg";
let div = document.getElementById("catPicture");
div.appendChild(img);
}

//näyttää nappia painamalla esimerkkikuvan roduista sekä pienen kuvailun.
function cat2() {

document.querySelector("#catPicture").innerHTML="";

document.querySelector("#showCat").innerHTML = "<span>American Curl</span> Rodulle on tyypillistä erikoisen näköiset korvat, jotka kiertyvät taakse poispäin kasvoista.(www.wikipedia.fi)";


let img = document.createElement("img");
img.src = "../pictures/american_curl.jpg";
let div = document.getElementById("catPicture");
div.appendChild(img);
}

//näyttää nappia painamalla esimerkkikuvan roduista sekä pienen kuvailun.
function cat3() {

document.querySelector("#catPicture").innerHTML="";

document.querySelector("#showCat").innerHTML = "<span>Bengali</span>Tyypillistä bengalille ovat lihaksikas ja pitkänomainen vartalo ja pienehkö pää suhteessa vartaloon.(www.wikipedia.fi)";

let img = document.createElement("img");
img.src = "../pictures/bengal.jpg";
let div = document.getElementById("catPicture");
div.appendChild(img);
}

//näyttää nappia painamalla esimerkkikuvan roduista sekä pienen kuvailun.
function cat4() {

document.querySelector("#catPicture").innerHTML="";

document.querySelector("#showCat").innerHTML = "<span>Abessiinialainen</span> on leikkisä ja hieman pienikokoista puumaa muistuttava kissarotu. Se on yksi vanhimmista tunnetuista kissaroduista, ja sen tunnusmerkki on turkin ticking-kuviointi.(www.wikipedia.fi)";

let img = document.createElement("img");
img.src = "../pictures/abessiinialainen.jpg";
let div = document.getElementById("catPicture");
div.appendChild(img);
}

//etusivun rest api, jossa erilaisia faktoja kissoista
fetch('https://catfact.ninja/fact?max_length=140')
    .then(response => response.json())
    .then(data =>  document.getElementById('restApi').innerHTML = data.fact);


//Näyttää vitsin nappia painamalla sekä tyhjennys
function joke1() {

document.querySelector("#showJoke").innerHTML="";
        
document.querySelector("#showJoke").innerHTML = "Mitä kissa sanoi kun näki koiran? Miau....";
}       

//Näyttää vitsin nappia painamalla sekä tyhjennys
function joke2() {

    document.querySelector("#showJoke").innerHTML="";
            
    document.querySelector("#showJoke").innerHTML = "Pitääkö kissasi lapsista? Pitää, mutta enemmän se tykkää silakoista.";
}       
    
//Näyttää vitsin nappia painamalla sekä tyhjennys
function joke3() {

    document.querySelector("#showJoke").innerHTML="";
                
    document.querySelector("#showJoke").innerHTML = "Mikä suklaa on kielletty kissoilta? Tietysti Nougat.";
}       

//etusivun otsikon mouseover
function mouseOver() {
    document.getElementById("frontH1").style.color = "orange"
    document.getElementById("frontH1").style.fontSize = "50px";
  }
  
  function mouseOut() {
    document.getElementById("frontH1").style.color = "black"
    document.getElementById("frontH1").style.fontSize = "40px";
  }

//Rodut sivun otsikon mouseover
  function mouseOver2() {
    document.querySelector("#rodutH1").style.color = "orange"
    document.querySelector("#rodutH1").style.fontSize = "50px";
  }
  
  function mouseOut2() {
    document.querySelector("#rodutH1").style.color = "black"
    document.querySelector("#rodutH1").style.fontSize = "40px";
  }