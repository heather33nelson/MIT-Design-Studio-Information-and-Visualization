var canvas5 = document.getElementById("plot5");

canvas5.width = 2 * document.getElementById("plot5").clientWidth;
canvas5.height = 2 * document.getElementById("plot5").clientHeight;

var ctx5 = canvas5.getContext("2d");

var x = 414;
var y = 736;

//ctx5.rotate(45*Math.PI/180);
//ctx5.fillStyle = "#ff8e0a";
//ctx5.fillRect(0, 0, 30, 33);

ctx5.fillStyle = "#000";
ctx5.fillRect(0, 0, 828, 1472);

function newline(length, vx, vy, x, y) {
    var ux = vx / (Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2)));
    var uy = vy / (Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2)));
    var dx = length * ux;
    var dy = length * uy;
    x = x + dx;
    y = y + dy;
    return [x, y];
}

function crack() {
    ctx5.strokeStyle = "#ffffff";
    ctx5.lineWidth = 1;
    ctx5.beginPath();
    ctx5.moveTo(x, y);
    var vals = newline(50, 2, -5, x, y);
    x = vals[0];
    y = vals[1];
    ctx5.lineTo(x, y);
    
    vals = newline(100, 8, -7, x, y);
    x = vals[0];
    y = vals[1];
    ctx5.lineTo(x, y);
    
    vals = newline(200, 3, -9, x, y);
    x = vals[0];
    y = vals[1];
    ctx5.lineTo(x, y);
    
    vals = newline(90, 1, -5, x, y);
    x = vals[0];
    y = vals[1];
    ctx5.lineTo(x, y);
    
    vals = newline(33, 6, -5, x, y);
    x = vals[0];
    y = vals[1];
    ctx5.lineTo(x, y);
    
    vals = newline(133, 2, -6, x, y);
    x = vals[0];
    y = vals[1];
    ctx5.lineTo(x, y);
    
    vals = newline(133, 2, -6, x, y);
    x = vals[0];
    y = vals[1];
    ctx5.lineTo(x, y);
    
    vals = newline(57, 5, -7, x, y);
    x = vals[0];
    y = vals[1];
    ctx5.lineTo(x, y);
    
    vals = newline(49, 1, -6, x, y);
    x = vals[0];
    y = vals[1];
    ctx5.lineTo(x, y);
    
    ctx5.stroke();
    
    x = 414;
    y = 736;
}

function clock() {
    ctx5.translate(414, 736);
    ctx5.rotate((360 / 12) * Math.PI / 180);
    ctx5.translate(-414, -736);
    crack();
}
crack();
setInterval(clock,1000);


//function clockclock() {
//    crack();
//    setTimeout(clock, 1000);
//    setTimeout(clock, 1000);
//    setTimeout(clock, 1000);
//    setTimeout(clock, 1000);
//    setTimeout(clock, 1000);
//    setTimeout(clock, 1000);
//    setTimeout(clock, 1000);
//    setTimeout(clock, 1000);
//    setTimeout(clock, 1000);
//    setTimeout(clock, 1000);
//    setTimeout(clock, 1000);
//    ctx5.clearRect(0, 0, 414, 736);
//    ctx5.fillStyle = "#000";
//    ctx5.fillRect(0, 0, 828, 1472);
//    //only do it once
//}

//setInterval(clockclock,12000);
//
//clockclock();
//clockclock();
//clockclock();



//ctx5.translate(canvas5.width / 2, canvas5.height / 2);
//ctx5.rotate((360 / 12) * Math.PI / 180);
//crack();
