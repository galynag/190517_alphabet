var uaLang = {  "text" : "zdarova",
                "mistake" : "oshibochka vishla",
                "adv" : "zdes' mogla by byt' vasha reklama"};
var enLang = {  "text" : "hithere",
                "mistake" : "it's a mistake",
                "adv" : "Here could be your advertisement"};

var symbolArray = {
    'KeyR' : 'alphabet/k.png',
    'KeyF' : 'alphabet/k.png',
    'KeyA' : 'alphabet/a.png',
}


var btnUa = document.getElementById('btn-ua');
var btnEn = document.getElementById('btn-eng');
var userInp = document.getElementById('user-input');
var text = document.getElementById('text1');
var output = document.getElementById('out');

var mistake = document.getElementById('mistake');
var adv = document.getElementById('adv');
var data = uaLang; //default ua
langChange(); //default language

btnUa.addEventListener('click', langChange);
btnEn.addEventListener('click', langChange);
userInp.addEventListener('keypress', symbolGenerator);


function langChange (e) {
    if (e !== undefined) {
        if (e.target.id === "btn-eng") {
            console.log('eng');
            data = enLang;
        } else {
            console.log('ua');
            data = uaLang;
        }
    }
    // console.log(data['text']);
    text.innerHTML = data['text'];
    mistake.innerHTML = data['mistake'];
    adv.innerHTML = data['adv'];
}

function symbolGenerator (e) {
    var img = document.createElement('img');
    img.className = 'symbol-icon';
    console.log(e.code);
    // console.log(e.keyCode);
    // console.log(e);
    img.src = "img/logo.png"

    out.appendChild(img);
}

