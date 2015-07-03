var weather2;
var callbackFunction = function(data) {
    var weather = data.query.results.channel.item.condition;
    var area = data.query.results.channel.location;
    weather2 = data.query.results.channel.item;
    document.getElementById('weatherdate').innerHTML = weather2.forecast[0].day + ", " + weather2.forecast[0].date;
    document.getElementById('weatherother').innerHTML = weather.text + " | " + weather.temp + " DEGREES | " + area.city + ", " + area.region;
    
    document.getElementById('forecast').style.display = "inline";
    document.getElementById('forecast1').style.display = "none";
    document.getElementById('nextday').style.display = "none";
    document.getElementById('nextday1').style.display = "none";
    switch(weather.code) {
    	case "0":
    		document.getElementById('weatherbox').src = "img/tornado.png";
    		break;
    	case "1":
    		document.getElementById('weatherbox').src = "img/storm.png";
    		break;
    	case "2":
    		document.getElementById('weatherbox').src = "img/hurricane.png";
    		break;
    	case "3":
    		document.getElementById('weatherbox').src = "img/storm.png";
    		break;
    	case "4":
    		document.getElementById('weatherbox').src = "img/storm.png";
    		break;
    	case "5":
    		document.getElementById('weatherbox').src = "img/snow.png";
    		break;
    	case "6":
    		document.getElementById('weatherbox').src = "img/clouds copy.png";
    		break;
    	case "7":
    		document.getElementById('weatherbox').src = "img/snow.png";
    		break;
    	case "8":
    		document.getElementById('weatherbox').src = "img/clouds.png";
    		break;
    	case "9":
    		document.getElementById('weatherbox').src = "img/clouds.png";
    		break;
    	case "10":
    		document.getElementById('weatherbox').src = "img/clouds.png";
    		break;
    	case "11":
    		document.getElementById('weatherbox').src = "img/clouds.png";
    		break;
    	case "12":
    		document.getElementById('weatherbox').src = "img/clouds.png";
    		break;
    	case "13":
    		document.getElementById('weatherbox').src = "img/snow.png";
    		break;
    	case "14":
    		document.getElementById('weatherbox').src = "img/snow.png";
    		break;
    	case "15":
    		document.getElementById('weatherbox').src = "img/snow.png";
    		break;
    	case "16":
    		document.getElementById('weatherbox').src = "img/snow.png";
    		break;
    	case "17":
    		document.getElementById('weatherbox').src = "img/snow.png";
    		break;
    	case "18":
    		document.getElementById('weatherbox').src = "img/snow.png";
    		break;
    	case "19":
    	case "20":
    	case "21":
    	case "22":
    	case "23":
    	case "24":
    	case "25":
    	case "26":
    		document.getElementById('weatherbox').src = "img/clouds copy.png";
    		break;
    	case "27":
    		document.getElementById('weatherbox').src = "img/clouds copy.png";
    		break;
    	case "28":
    		document.getElementById('weatherbox').src = "img/clouds copy.png";
    		break;
    	case "29":
    		document.getElementById('weatherbox').src = "img/clouds copy.png";
    		break;
    	case "30":
    		document.getElementById('weatherbox').src = "img/clouds copy.png";
    		break;
    	case "31":
    		document.getElementById('weatherbox').src = "img/moon.png";
    		break;
    	case "32":
    		document.getElementById('weatherbox').src = "img/sunny.png";
    		break;
    	case "33":
    		document.getElementById('weatherbox').src = "img/moon.png";
    		break;
    	case "34":
    		document.getElementById('weatherbox').src = "img/sunny.png";
    		break;
    	case "35":
    		document.getElementById('weatherbox').src = "img/rain.png";
    		break;
    	case "36":
    		document.getElementById('weatherbox').src = "img/sunny.png";
    		break;
    	case "37":
    		document.getElementById('weatherbox').src = "img/storm.png";
    		break;
    	case "38":
    		document.getElementById('weatherbox').src = "img/storm.png";
    		break;
    	case "39":
    		document.getElementById('weatherbox').src = "img/storm.png";
    		break;
    	case "40":
    		document.getElementById('weatherbox').src = "img/rain.png";
    		break;
    	case "41":
    		document.getElementById('weatherbox').src = "img/snow.png";
    		break;
    	case "42":
    		document.getElementById('weatherbox').src = "img/snow.png";
    		break;
    	case "43":
    		document.getElementById('weatherbox').src = "img/snow.png";
    		break;
    	case "44":
    		document.getElementById('weatherbox').src = "img/clouds copy.png";
    		break;
    	case "45":
    		document.getElementById('weatherbox').src = "img/storm.png";
    		break;
    	case "46":
    		document.getElementById('weatherbox').src = "img/snow.png";
    		break;
    	case "47":
    		document.getElementById('weatherbox').src = "img/storm.png";
    		break;
    }
};
function WeatherFunction1() {
    var zipcode = document.getElementById("codeInput").value;
    var script = document.createElement('script');
    script.src = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + zipcode + "')&format=json&callback=callbackFunction";
    document.getElementsByTagName('head')[0].appendChild(script);    
}
function WeatherFunction() {
    if(event.keyCode == 13) {
        var zipcode = document.getElementById("codeInput").value;
        var script = document.createElement('script');
        script.src = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + zipcode + "')&format=json&callback=callbackFunction";
        document.getElementsByTagName('head')[0].appendChild(script);
    }
}
 function ForecastFunction() {
    document.getElementById('forecast').style.display = "none";
    document.getElementById('forecast1').style.display = "inline";
    document.getElementById('nextday').style.display = "block";
    document.getElementById('nextday1').style.display = "block";
    document.getElementById('nextday').innerHTML = weather2.forecast[1].day + ", " + weather2.forecast[1].date + ": " + weather2.forecast[1].text + " (High: " + weather2.forecast[1].high+ ")";
    document.getElementById('nextday1').innerHTML = weather2.forecast[2].day + ", " + weather2.forecast[2].date + ": " + weather2.forecast[2].text + " (High: " + weather2.forecast[2].high+ ")";
 }
 function ForecastFunction1() {
    document.getElementById('forecast1').style.display = "none";
    document.getElementById('forecast').style.display = "inline";
    document.getElementById('nextday').style.display = "none";
    document.getElementById('nextday1').style.display = "none";

    
 }