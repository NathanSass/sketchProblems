// 1) Write a function that takes a starting latitude,
//    longitude and an end latitude longitude and returns
//    the distance between the two points in kilometers.
//    Please comment every line of code with the functionality
//    that the line of code serves.


var findDistHaversine = (function(){          
	var RADIUS_KM = 6371;                                                        // I made this capital because it is a constant
	
	var _toRadians = function(coord){                                            // I usually prefix my helper functions with '_'
		return coord * Math.PI / 180;
	};

	var _haversineLogic = function(coordObj){                                    // Although I very much enjoyed reading
		var a = Math.sin(coordObj.dLat/2) * Math.sin(coordObj.dLat/2) +            // about this formula on wikipedia, I elected
		        Math.sin(coordObj.dLong/2) * Math.sin(coordObj.dLong/2) *          // to keep it intact including the variable
		        Math.cos(coordObj.lat1) * Math.cos(coordObj.lat2);                 // naming conventions.
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		return RADIUS_KM * c;
	};

	return function haversine(coords){
		var coordObj = {
			
			lat1:  _toRadians(coords.initalPos.latitude),                            // I considered just passing the coords
			long1: _toRadians(coords.initalPos.longitude),                           // object into a helper function and have it sort
			lat2:  _toRadians(coords.endPos.latitude),                               // out the details, I decided to leave it in the
			long2: _toRadians(coords.endPos.longitude),                              // method because I realize that my coordObj is 
			dLat:  _toRadians(coords.endPos.latitude  - coords.initalPos.latitude),  // not the most efficient (read more below) and 
			dLong: _toRadians(coords.endPos.longitude - coords.initalPos.longitude), // I wanted the next person changing this code
			                                                                         // to notice that.
		}

    return _haversineLogic(coordObj);                
	}
})();


var coordObj = {                                                                // I chose to represent the data in this way 
	initalPos: {                                                                  // because of a method in my LocalHUNT app
		latitude: 37.77,                                                            // that packages data in a similar way as this.
		longitude: -122.41,                                                         // I wanted to pretend that I was working on a
	},                                                                            // code base.
	endPos: {
		latitude: 38.90,
		longitude: -77.03,
	}
}

console.log(findDistHaversine(coordObj))                                        // I wanted to pass in an object here
                                                                                // instead of a big collection of numbers