var uaLang = {  "text" : "zdarova",
                "mistake" : "oshibochka vishla",
                "adv" : "zdes' mogla by byt' vasha reklama"};
var enLang = {  "text" : "hithere",
                "mistake" : "it's a mistake",
                "adv" : "Here could be your advertisement"};

var symbolArray = { 'KeyR' : '',
                    'KeyC' : ''};


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
userInp.addEventListener('keydown', symbolDel);


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
    img.src = symbolArray[e.code];
    out.appendChild(img);
    // console.log(e);
}

function symbolDel (e) {

    // if (e.code == 'Backslash') {
    // if (e.charCode == 0) {
    //     console.log('backspace');
    //     out.removeChild(out.lastChild);
    // }

    console.log(e);
}



