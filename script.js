

document.getElementById('record1').style.visibility='hidden';
document.getElementById('record2').style.visibility='hidden';

function sprint() {
document.querySelector("#showDistance").innerHTML = "<span>Sprinttimatka:</span>  750 metriä uintia, 20 kilometriä pyöräilyä ja viisi kilometriä juoksua.";
}

function olympia() {
document.querySelector("#showDistance").innerHTML = "<span>Perusmatka eli olympiamatka:</span> 1,5 kilometriä uintia, 40 kilometriä pyöräilyä ja kymmenen kilometriä juoksua.";
}

function half() {
document.querySelector("#showDistance").innerHTML = "<span>Puolimatka:</span> 1,9 kilometriä uintia, 90 kilometriä pyöräilyä ja 21 kilometriä juoksua.";
}

function full() {
document.querySelector("#showDistance").innerHTML = "<span>Täysmatka (Ironman-matka):</span>  3,8 kilometriä uintia, 180 kilometriä pyöräilyä ja maratonjuoksu (42,195 kilometriä).";
}

