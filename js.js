var uaLang = {  "text" : "zdarova",
                "mistake" : "oshibochka vishla",
                "adv" : "zdes' mogla by byt' vasha reklama"};
var enLang = {  "text" : "hithere",
                "mistake" : "it's a mistake",
                "adv" : "Here could be your advertisement"};


var symbolArray = {
    'KeyQ' : 'alphabet/y.png',
    'KeyW' : 'alphabet/ts.png',
    'KeyE' : 'alphabet/u.png',
    'KeyR' : 'alphabet/k.png',
    'KeyT' : 'alphabet/e.png',
    'KeyY' : 'alphabet/n.png',
    'KeyU' : 'alphabet/g.png',
    'KeyI' : 'alphabet/sh.png',
    'KeyO' : 'alphabet/shch.png',
    'KeyP' : 'alphabet/z.png',
    'BracketLeft' : 'alphabet/kh.png',
    'BracketRight' : 'alphabet/yi.png',
    'KeyA' : 'alphabet/f.png',
    'KeyS' : 'alphabet/yy.png',
    'KeyD' : 'alphabet/apostroph.png',
    'KeyF' : 'alphabet/a.png',
    'KeyG' : 'alphabet/p.png',
    'KeyH' : 'alphabet/r.png',
    'KeyJ' : 'alphabet/o.png',
    'KeyK' : 'alphabet/L.png',
    'KeyL' : 'alphabet/d.png',
    'Semicolon' : 'alphabet/zh.png',
    'Quote' : 'alphabet/ie.png',
    'KeyZ' : 'alphabet/ya.png',
    'KeyX' : 'alphabet/ch.png',
    'KeyC' : 'alphabet/c.png',
    'KeyV' : 'alphabet/m.png',
    'KeyB' : 'alphabet/yy.png',
    'KeyN' : 'alphabet/t.png',
    'KeyM' : 'alphabet/myak_znak.png',
    'Comma' : 'alphabet/b.png',
    'Period' : 'yu'
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
}

function symbolDel (e) {


    if (e.keyCode === 8) {
        out.lastChild.remove();
    }


}



