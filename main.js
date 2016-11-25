function setCookie(lk,lv,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = lk + "="+ lv+ ";" + expires + ";path=/";
}

function getCookie(lname) {
    var name = lname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function load(b) {
    var o = document.getElementsByClassName("flip-container");
    var i;
    for (i = 0; i < o.length; i++) {
        if(b[i] == 1) {
            o[i].className += " hover";
        }
    }
}
        
var lk=getCookie("username");
function checkCookie(l) {
    
    if (lk != "") {
        var b = lk.split(',');
        load(b);
    } else {
        lk = "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0;";
       if (lk != "" && lk != null) {
           setCookie("username", lk, 30);
       }
    }
}
function cookie(l,a) {
    var lista = lk.split(',');
    lista[l] = a;
    console.log(l,a);
    jono = lista.join();
    setCookie("username", jono, 30);
    var b = lk.split(',');
        load(b);
}

function avaus(l,a) {
    cookie(l,a);
}