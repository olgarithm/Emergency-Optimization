(function () {
	var $ = function(id) { return document.getElementById(id); };
	var geocoder;
	var content;

	window.onload = function() {
		geocoder = new google.maps.Geocoder();
		$("submit").onclick = findType;

	}

	function findType() {
		var address = $("address").value;
		var time = $("time").value;
    	geocoder.geocode( { "address": address}, function(results, status) {
	      	var lat = results[0].geometry.location.lat();
	      	var long = results[0].geometry.location.lng();
	      	
	      	console.log(results);
	      	if (status == 'OK' && lat >= 37.70862411 && lat <= 37.83166623 && long >= -122.5136484 && long <= -122.3651383) {
	      		latString = String(lat).substring(0, 5);
	      		longString = String(long).substring(0, 7);
	      		var together = latString + ", " + longString;
	      		var count = 0;
	      		while (locations[together] == null && count < 20) {
	      			long += 0.01;
		      		longString = String(long).substring(0, 7);
		      		together = latString + ", " + longString;
		      		count++;
	      		}
	      		if (count == 20) {
	      			alert("Sorry, we couldn't find that location. Please try again!");
	      		}
	      		var foundDispatch = document.createElement("p");
				var node = document.createTextNode("The most likely type of dispatch called near " + results[0].formatted_address + " is: " + locations[together]);
				foundDispatch.appendChild(node);
				var element = $("found-dispatch");
				element.innerHTML = "";
				element.appendChild(foundDispatch);
	      	} else {
	        	alert('Location typed in was outside of our sample data. Please try again!');
	      	}
   		});
	}
}());