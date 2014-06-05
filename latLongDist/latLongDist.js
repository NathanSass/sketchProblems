// 1) Write a function that takes a starting latitude,
//    longitude and an end latitude longitude and returns
//    the distance between the two points in kilometers.
//    Please comment every line of code with the functionality
//    that the line of code serves.


var findDistHaversine = (function(){
	var RADIUS_KM = 6371;
	
	var _toRadians = function(coord){
		return coord * Math.PI / 180;
	};

	var _haversineLogic = function(dLati, dLongi, lati1, lati2){
		 var a = Math.sin(dLati/2) * Math.sin(dLati/2) +
             Math.sin(dLongi/2) * Math.sin(dLongi/2) *
             Math.cos(lati1) * Math.cos(lati2);
     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
     return RADIUS_KM * c;
	};

	return function haversine(coords){
		var lat1  = _toRadians(coords.initalPos.latitude);
		var long1 = _toRadians(coords.initalPos.longitude);
		var lat2  = _toRadians(coords.endPos.latitude);
		var long2 = _toRadians(coords.endPos.longitude);
		var dLat  = lat2  - lat1;
		var dLong = long2 - long1;

    return _haversineLogic(dLat, dLong, lat1, lat2);
	}
})();




var coordObj = {
	initalPos: {
		latitude: 37.77,
		longitude: -122.41,
	},
	endPos: {
		latitude: 38.90,
		longitude: -77.03,
	}
}

console.log(findDistHaversine(coordObj))




// https://github.com/niix/haversine/blob/master/haversine.js

