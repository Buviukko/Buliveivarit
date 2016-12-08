var d = new Date();
if(document.cookie == "") {
    var luukut = ["0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"];
    document.cookie = luukut;
} else {
    var c = document.cookie;
    var lk = c.split(",");
    load(lk);
}
function load(l) {
    document.getElementById("l"+d.getDate()).style.boxShadow = "0px 0px 62px 15px rgba(255,0,0,1)";
    var o = document.getElementsByClassName("flip-container");
        for (var i=0; i < o.length; i++) {
            if(l[i] == 1) {
                o[i].className += " hover";
            }
        }
}
function avaus(l,v) {
    //if((l+1) <= d.getDate()) {
        v.classList.toggle('hover');
        if(lk[l] == 0) {
            lk[l] = 1;
        } else {
            lk[l] = 0;
        }
        document.cookie = lk;
   // }
}