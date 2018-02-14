var canvas4 = document.getElementById("plot4");

canvas4.width = 2 * document.getElementById("plot4").clientWidth;
canvas4.height = 2 * document.getElementById("plot4").clientHeight;
var canvas4RealWidth = document.getElementById("plot4").clientWidth;
var canvas4RealHeight = document.getElementById("plot4").clientHeight;

var ctx4 = canvas4.getContext("2d");

var tan = "#e6c083";
var brown = "#643d00";
var highlight = "#9b773c";

//COOKIE 1
ctx4.beginPath();
ctx4.fillStyle = tan;
ctx4.arc(414,736,150,0,2*Math.PI);
ctx4.fill();
ctx4.closePath();

chip(323,736,15);
chip(378,630,20);
chip(504,686,11);
chip(420,720,20);
chip(343,820,13);
chip(453,800,9);

//COOKIE 2
ctx4.beginPath();
ctx4.fillStyle = tan;
ctx4.arc(414,336,150,0,2*Math.PI);
ctx4.fill();
ctx4.closePath();

chip(323,336,15);
chip(378,230,20);
chip(504,286,11);
chip(420,320,20);
chip(343,420,13);
chip(453,400,9);


//COOKIE 3rd
ctx4.beginPath();
ctx4.fillStyle = tan;
ctx4.arc(414,1136,150,0,2*Math.PI);
ctx4.fill();
ctx4.closePath();

chip(323,1136,15);
chip(378,1030,20);
chip(504,1086,11);
chip(420,1120,20);
chip(343,1220,13);
chip(453,1200,9);

//function eatme () {
//    //adding white circles
//}

//HOURS
ctx4.beginPath();
ctx4.fillStyle = "white";
ctx4.arc(414,186,40,0,2*Math.PI);
ctx4.fill();
ctx4.closePath();

ctx4.beginPath();
ctx4.fillStyle = "white";
ctx4.arc(484,206,40,0,2*Math.PI);
ctx4.fill();
ctx4.closePath();

ctx4.beginPath();
ctx4.fillStyle = "white";
ctx4.arc(544,256,40,0,2*Math.PI);
ctx4.fill();
ctx4.closePath();

ctx4.beginPath();
ctx4.fillStyle = "white";
ctx4.arc(564,326,40,0,2*Math.PI);
ctx4.fill();
ctx4.closePath();


//MINUTE 1
ctx4.beginPath();
ctx4.fillStyle = "white";
ctx4.arc(414,586,40,0,2*Math.PI);
ctx4.fill();
ctx4.closePath();

ctx4.beginPath();
ctx4.fillStyle = "white";
ctx4.arc(484,606,40,0,2*Math.PI);
ctx4.fill();
ctx4.closePath();

//MINUTE 2
ctx4.beginPath();
ctx4.fillStyle = "white";
ctx4.arc(414,986,40,0,2*Math.PI);
ctx4.fill();
ctx4.closePath();




function chip (x,y,size){
    ctx4.beginPath();
    ctx4.fillStyle = brown;
    ctx4.arc(x,y,size,0,2*Math.PI);
    ctx4.fill();
    ctx4.closePath();
    ctx4.beginPath();
    ctx4.fillStyle = highlight;
    ctx4.arc(x,y-2,size/2,Math.PI,2*Math.PI);
    ctx4.fill();
    ctx4.closePath();
}