var uaLang = {  "text" : "<h1>Імена закодовані у вишиванку</h1><p>Кожна літера - це вишитий символ, кожен символ - це потужний оберіг.</p><p>У нашому магазині ви маєте унікальну можливість підібрати та створити вишиванку до вашого смаку своїми руками.</p><p>Створи вишиванку власноруч.</p>",
                // "message" : "си"
                "mistake" : "можна вводити тільки літери",
                "adv" : "Тут може бути Ваша реклама",
                "team-p" : "Наша команда:",
                "contacts" : "Контакти:"
};
var enLang = {  "text" : "<h1>Names encoded in vyshyvanka</h1><p>Each character is a symbol embroidered, every character is a powerful charm.</p><p>In our store you will have a unique opportunity to choose and decorate your vyshyvanka.</p><p>Create your own vyshyvanka now.</p>",
                // "message" : ""
                "mistake" : "you can type only alphabet symbols",
                "adv" : "Here could be your advertisement",
                "team-p" : "Our team:",
                "contacts" : "Contacts:"
};


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
    'Period' : 'yu',
    'Space' : 'alphabet/space.png'
}


var btnUa = document.getElementById('btn-ua');
var btnEn = document.getElementById('btn-eng');
var userInp = document.getElementById('user-input');
var text = document.getElementById('text1');
var output = document.getElementById('out');

var teamP = document.getElementById('team-p');
var cont = document.getElementById('contacts-p');
var mistake = document.getElementById('mistake');
var contacts = document.getElementById('contacts');
var adv = document.getElementById('adv');

var forbiddenSymb = [44, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 96, 45, 92, 13];
var imgCodes = [];
var data = uaLang; //default ua
langChange(); //default language

btnUa.addEventListener('click', langChange);
btnEn.addEventListener('click', langChange);
userInp.addEventListener('keypress', symbolGenerator);
userInp.addEventListener('keydown', symbolDel);
// userInp.addEventListener('key', delAll);


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
    teamP.innerHTML = data['team-p'];
    cont.innerHTML = data['contacts'];
}



function symbolGenerator (e) {
    // console.log(e);
    for (var i = 0; i < forbiddenSymb.length; i++) {
        if (e.charCode == forbiddenSymb[i]) {
            e.preventDefault();
            mistakeFn();
            return false;
        }
    }

    var img = document.createElement('img');
    img.className = 'symbol-icon';
    img.src = symbolArray[e.code];
    // imgCodes.push(e.code);
    out.appendChild(img);
}

function symbolDel (e) {
    if (e.keyCode === 8) {
        if (out.lastChild != null) {
            out.lastChild.remove();
        }
    }

    // if (userInp.value.length == 0) {
    //     console.log(e.keyCode);
    //     if (e.keyCode == 8) {
    //         out.innerHTML = "";
    //     }
    // }
}

function delAll (e) {


    }
function mistakeFn () {
    mistake.style.visibility = 'visible';
    setTimeout(function () {
        mistake.style.visibility = 'hidden';
    }, 5000)
}



