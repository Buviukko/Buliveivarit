function setCookie(lk,lv,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = lk + "="+ lv + expires + ";path=/";
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

function checkCookie() {
    var lk=getCookie("username");
    if (lk != "") {
        var b = lk.split(',');
        alert(b[20]);
    } else {
       lk = "0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0;";
       if (lk != "" && lk != null) {
           setCookie("username", lk, 30);
       }
    }
}

function avaus(l) {
    b[0] = l;
    alert(b[0]);
}