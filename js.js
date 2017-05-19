var uaLang = {  "text" : "zdarova",
                "mistake" : "oshibochka vishla",
                "adv" : "zdes' mogla by byt' vasha reklama"};
var enLang = {  "text" : "hithere",
                "mistake" : "it's a mistake",
                "adv" : "Here could be your advertisement"};


var btnUa = document.getElementById('btn-ua');
var btnEn = document.getElementById('btn-eng');
var userInp = document.getElementById('user-input');
var text = document.getElementById('text1');

var mistake = document.getElementById('mistake');
var adv = document.getElementById('adv');
var data = uaLang; //default ua
langChange(); //default language

btnUa.addEventListener('click', langChange);
btnEn.addEventListener('click', langChange);


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