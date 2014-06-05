// 1) Write a function that takes a starting latitude,
//    longitude and an end latitude longitude and returns
//    the distance between the two points in kilometers.
//    Please comment every line of code with the functionality
//    that the line of code serves.


function toRadians(){
	debugger
}


var findDistHaversine = (function(){
	var _toRadians = function(coord){
		return coord * Math.PI / 180;
	};

	var _findDiff = function(coord1, coord2){
		return _toRadians(coord1 - coord2)
	};

	var RADIUS_KM = 6471;

	return function haversine(coords){
		var lat1 = coords.initalPos.latitude;
		var long1 = coords.initalPos.longitude;
		var lat2 = coords.endPos.latitude;
		var long2 = coords.endPos.latitude;

		var dLat = _findDiff(lat1, lat2);



	}


})();



// function haversine(coords){
// 	var RADIUS_KM = 6371;
// 	return "hiii"


// }








var coordObj = {
	initalPos: {
		latitude: 37.7749295,
		longitude: -122.41941550000001,
	},
	endPos: {
		latitude: 38.90723089999999,
		longitude: -77.03646409999999,
	}
}

console.log(findDistHaversine(coordObj))

// console.log(findDistance()


























