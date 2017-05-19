var uaLang = {  "text" : "zdarova",
                "mistake" : "oshibochka vishla",
                "adv" : "zdes' mogla by byt' vasha reklama"};
var enLang = {  "text" : "hithere",
                "mistake" : "it's a mistake",
                "adv" : "Here could be your advertisement"};


langChange(); //default language
var text = document.getElementById('text');
var btnUa = document.getElementById('btn-ua');
var btnEn = document.getElementById('btn-eng');
var userInp = document.getElementById('user-input');

btnUa.addEventListener('click', langChange);
btnEn.addEventListener('click', langChange);


function langChange (e) {
    var data = uaLang; //default ua
    if (e.target.id === "btn-eng") {
        // console.log('eng');
        data = enLang;
    } else {
        // console.log('ua');
        data = uaLang;
    }
}