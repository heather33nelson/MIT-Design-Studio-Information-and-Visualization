var temp = 0;
var icon = "";
var temps = [];
var rains = [];
// var url = 'https://api.darksky.net/forecast/c6b293fcd2092b65cfb7313424b2f7ff/42.361145,-71.057083'

//$.ajax({
//  url: 'https://api.darksky.net/forecast/c6b293fcd2092b65cfb7313424b2f7ff/42.361145,-71.057083',
//  dataType: 'JSONP',
//  type: 'GET',
//  crossDomain: true,
//  complete: function (data) {
//    if (data.readyState == '4' && data.status == '200') {
//      console.log(data.responseJSON)
//    } else {
//      console.log("DATA FETCH FAILED")
//    }
//  }
//})

function draw(error,data){
    ////////////////////////////////////////////////////// WEATHER WOMAN
    //console.log(data);
    var daily = data.daily;
    icon = daily.data[2].icon;
    temp = daily.data[2].apparentTemperatureHigh;
    temp = Math.round(temp);
    document.getElementById('image').src = outfit();
    document.getElementById('skirt').style = skirt();
    document.getElementById("temp").innerHTML = temp.toString() + "°";
    
    ////////////////////////////////////////////////////// GRADIENTS OF WEATHER
    
    for (var i = 0; i < 49; i++){ //get 7 days of the week //use 7 to do 7 thing or 49 to do
        var TEMPS = temps.push(data.hourly.data[i].apparentTemperature);
//        var TEMPS = temps.push(Math.round(data.daily.data[i].apparentTemperatureHigh));
//        TEMPS = temps.push(Math.round(data.daily.data[i].apparentTemperatureLow));
    }
    var maxTemp = Math.max(...temps);
    var minTemp = Math.min(...temps);
    
    ////////////////////////////////////////////////////// TEMP
    var elem = document.getElementById('tempCanvas');
    
    if (elem.getContext) {
        var myRect = [];
        var dy = 736/temps.length;
        var R;
        var G;
        var B;
        
        for (var i = 0; i < temps.length; i++){
            R = 250 - 250*((temps[i]-minTemp)/(maxTemp-minTemp));
            G = R;
            B = R;
//            R = 250 - 103*((temps[i]-minTemp)/(maxTemp-minTemp));
//            G = (R-152)/(103/255) - 5; //line from the max red i want to 250,250,250 = near white
//            B = G;
            R = Math.round(R);
            G = Math.round(G);
            B = Math.round(B);
            myRect.push(new Shape(0,-2+dy*i,120,dy,R.toString(),G.toString(),B.toString()));
        }
        
        context = elem.getContext('2d');
        for (var i in myRect) {
            oRec = myRect[i];
            context.fillStyle = oRec.fill;
            context.fillRect(oRec.x, oRec.y, oRec.w, oRec.h);
        }
    }
    
    ////////////////////////////////////////////////////// RAIN
    
    for (var i = 0; i < 49; i++){ //get 7 days of the week
        var RAINS = rains.push(data.hourly.data[i].precipProbability);
//        var RAINS = rains.push((data.daily.data[i].precipIntensity));
//        RAINS = rains.push((data.daily.data[i].precipIntensityMax));
    }
    var maxRain = Math.max(...rains);
    var minRain = Math.min(...rains);
    
    var elem2 = document.getElementById('rainCanvas');
    
    if (elem2.getContext){
        var myRectr = [];
        var dy = 736/(rains.length);
        var Rr;
        var Gr;
        var Br;
        
        for (var i = 0; i < rains.length; i++){
            Br = 250 - 103*((rains[i]-minRain)/(maxRain-minRain));
            Gr = (Br-152)/(103/255) - 5; //line from the max red i want to 250,250,250 = near white
            Rr = Gr;
            Rr = Math.round(Rr);
            Gr = Math.round(Gr);
            Br = Math.round(Br);
            console.log(Rr,Gr,Br);
            myRectr.push(new Shape(0,-2+dy*i,120,dy,Rr.toString(),Gr.toString(),Br.toString()));
        }
        
        context2 = elem2.getContext('2d');
        for (var i in myRectr) {
            oRec = myRectr[i];
            context2.fillStyle = oRec.fill;
            context2.fillRect(oRec.x, oRec.y, oRec.w, oRec.h);
        }
    }
    
    ////////////////////////////////////////////////////// WEATHER CIRCLE
    
    var currentT = data.currently.apparentTemperature;
    var Rt = 250 - 250*((currentT-minTemp)/(maxTemp-minTemp));
    var Gt = Rt;
    var Bt = Rt;
//    var Rt = 250 - 103*((currentT-minTemp)/(maxTemp-minTemp));
//    var Gt = (Rt-152)/(103/255) - 5; 
//    var Bt = Gt;
    Rt = Math.round(Rt);
    Gt = Math.round(Gt);
    Bt = Math.round(Bt);
    Rt = Rt.toString();
    Gt = Gt.toString();
    Bt = Bt.toString();
    //console.log(Rt,Gt,Bt);
    colorback = "rgb(" +Rt+ "," +Gt+ "," +Bt+ ")";
    //console.log(colorback);
    document.getElementById("CIRCLE").style = "width:140px;height:140px;border:0px solid #000; border-radius: 70px; background:" + colorback;
    
    document.getElementById("temperature").innerHTML = Math.round(currentT).toString()+ "°";
    
    ////////////////////////////////////////////////////// DATE
    
    var d = new Date();
    if (d.getDay() == 0){
        document.getElementById("day").innerHTML = "SUNDAY";
    }
    if (d.getDay() == 1){
        document.getElementById("day").innerHTML = "MONDAY";
    }
    if (d.getDay() == 2){
        document.getElementById("day").innerHTML = "TUESDAY";
    }
    if (d.getDay() == 3){
        document.getElementById("day").innerHTML = "WEDNESDAY";
    }
    if (d.getDay() == 4){
        document.getElementById("day").innerHTML = "THURSDAY";
    }
    if (d.getDay() == 5){
        document.getElementById("day").innerHTML = "FRIDAY";
    }
    if (d.getDay() == 6){
        document.getElementById("day").innerHTML = "SATURDAY";
    }
    
    ////////////////////////////////////////////////////// CURRENT RAIN% FOR DATE
    
    var currentR = data.currently.precipProbability;
    var BR = 250 - 103*((currentR-minRain)/(maxRain-minRain));
    var GR = (BR-152)/(103/255) - 5;;
    var RR = GR;
    RR = Math.abs(Math.round(RR));
    GR = Math.abs(Math.round(GR));
    BR = Math.abs(Math.round(BR));
    RR = RR.toString();
    GR = GR.toString();
    BR = BR.toString();
    colorfont = "rgb(" +RR+ "," +GR+ "," +BR+ ")";
    console.log(RR,GR,BR);
    document.getElementById("day").style = "color:" + colorfont;
    
    ////////////////////////////////////////////////////// KEY!
    
    
    document.getElementById("highT").innerHTML = Math.round(maxTemp).toString()+ "°";
    document.getElementById("lowT").innerHTML = Math.round(minTemp).toString()+ "°";
    document.getElementById("highR").innerHTML = (100*maxRain).toString()+ "%";
    document.getElementById("lowR").innerHTML = (100*minRain).toString()+ "%";
}




//FUNCTIONS____________________________________________

function load(){
    d3.json("../data/boston_weather.json",draw);
}

function outfit(){
    //console.log(icon);
    if (icon == "rain"){
        return "rain.svg"
    }
    if (temp > 70){
        return "hot.svg"
    }
    if (temp < 70 && temp > 50){
        return "coldish.svg"
    } 
    if (temp < 50){
        return "cold.svg"
    } 
}

function skirt(){
    if (80-temp <= 0){
        return "width:400px;height:420px;border:3px solid #000; background:#ff5800"
    }
    else if (temp < 80 && temp > 70){
        return "width:400px;height:440px;border:3px solid #000; background:#ff5800"
    }
    else if (temp < 70 && temp >= 60){
        return "width:400px;height:460px;border:3px solid #000; background:#ff5800"
    }
    else if (temp < 60 && temp >= 50){
        return "width:400px;height:480px;border:3px solid #000; background:#ff5800"
    }
    else if (temp < 50 && temp >= 40){
        return "width:400px;height:500px;border:3px solid #000; background:#ff5800"
    }
    else if (temp < 40 && temp >= 30){
        return "width:400px;height:520px;border:3px solid #000; background:#ff5800"
    }
    else if (temp < 30 && temp >= 20){
        return "width:400px;height:540px;border:3px solid #000; background:#ff5800"
    }
    else if (temp < 20 && temp >= 10){
        return "width:400px;height:560px;border:3px solid #000; background:#ff5800"
    }
    else if (temp < 10 && temp >= 0){
        return "width:400px;height:580px;border:3px solid #000; background:#ff5800"
    }
    else if (temp < 0 && temp >= -10){
        return "width:400px;height:600px;border:3px solid #000; background:#ff5800"
    }
}

function Shape(x, y, w, h, r, g, b) {
    var color = "rgb(" + r + "," + g + "," + b + ")";
    var colors = "#000098"; //testing colors
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.fill = color;
}

