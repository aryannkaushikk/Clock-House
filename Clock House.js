const hrs = document.getElementById("hours");
const min = document.getElementById("mins");
const sec = document.getElementById("secs");
const dt = document.getElementById("date");
const dd = document.getElementById("day");
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var date;
var txt;

const a = setInterval(settime,1000);

function settime(){
    date = new Date();
    txt = "";

    if (date.getHours()<10){
        txt = "0"+date.getHours()+":";
    }
    else{
        txt = date.getHours()+":";
    }

    hrs.textContent = txt;
    txt = "";

    if (date.getMinutes()<10){
        txt = "0"+date.getMinutes()+":";
    }
    else{
        txt = date.getMinutes()+":";    
    }

    min.textContent = txt;
    txt = "";

    if (date.getSeconds()<10){
        txt = txt+"0"+date.getSeconds();
    }
    else{
        txt = txt+date.getSeconds();    
    }
    sec.textContent = txt;

    dt.textContent = date.getDate();
    dd.textContent = days[date.getDay()];
}

// Analog Clock

const clock = document.getElementById("clock");
const tp = clock.offsetTop;
const lft = clock.offsetLeft;

const cen = document.getElementById("centre");
const tpcen = cen.offsetTop;
const lftcen = cen.offsetLeft;

var dte;

const shand = document.getElementById("shand");
shand.style.top = (tpcen-69)+"px";
shand.style.left = (lftcen+4.5)+"px";

const mhand = document.getElementById("mhand");
mhand.style.top = (tpcen-62.5)+"px";
mhand.style.left = (lftcen+3.5)+"px";

const hhand = document.getElementById("hhand");
hhand.style.top = (tpcen-56)+"px";
hhand.style.left = (lftcen+2.5)+"px";

function time(){
    dte = new Date();
    sh = dte.getSeconds()*6;
    mh = (dte.getMinutes()*6)+(dte.getSeconds()*0.1);
    hh = (dte.getHours()*30)+(dte.getMinutes()*0.5)+(dte.getSeconds()*0.00834);

    shand.style.transform = "rotateZ("+sh+"deg)";
    mhand.style.transform = "rotateZ("+mh+"deg)";
    hhand.style.transform = "rotateZ("+hh+"deg)";

}

setInterval(time,1000);


// TIME PALLETE

const xii = document.getElementById("twelve");
xii.style.top = (tpcen-87)+"px";
xii.style.left = (lftcen-1)+"px";

const i = document.getElementById("one");
i.style.top = (tpcen-76)+"px";
i.style.left = (lftcen+44)+"px";

const ii = document.getElementById("two");
ii.style.top = (tpcen-44)+"px";
ii.style.left = (lftcen+75)+"px";

const iii = document.getElementById("three");
iii.style.top = (tpcen-1.5)+"px";
iii.style.left = (lftcen+90)+"px";

const iv = document.getElementById("four");
iv.style.top = (tpcen+41)+"px";
iv.style.left = (lftcen+76)+"px";

const v = document.getElementById("five");
v.style.top = (tpcen+73)+"px";
v.style.left = (lftcen+45)+"px";

const vi = document.getElementById("six");
vi.style.top = (tpcen+84)+"px";
vi.style.left = (lftcen+2)+"px";

const vii = document.getElementById("seven");
vii.style.top = (tpcen+72)+"px";
vii.style.left = (lftcen-41)+"px";

const viii = document.getElementById("eight");
viii.style.top = (tpcen+40)+"px";
viii.style.left = (lftcen-73)+"px";

const ix = document.getElementById("nine");
ix.style.top = (tpcen-2)+"px";
ix.style.left = (lftcen-84)+"px";

const x = document.getElementById("ten");
x.style.top = (tpcen-44)+"px";
x.style.left = (lftcen-74)+"px";

const xi = document.getElementById("eleven");
xi.style.top = (tpcen-75)+"px";
xi.style.left = (lftcen-43)+"px";

// TIME PALLETE

// Analog Clock

