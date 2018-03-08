d3.json("../data/boston_weather.json",draw);

function draw(error,data){
    console.log(data);
    var daily = data.daily;
    icon = daily.data[6].icon;
    temp = daily.data[6].apparentTemperatureHigh;
    temp = Math.round(temp);
}