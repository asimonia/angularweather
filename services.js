// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New York, NY";
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {

	this.GetWeather = function(city, days) {

	    let weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=8c245f915cc18374e6654a5fb6daac6a", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
	    
	    return weatherAPI.get({ q: city, cnt: days });

	};
}]);

