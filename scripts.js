(function () {
	var $ = function(id) { return document.getElementById(id); };
	var geocoder;
	var content;

	window.onload = function() {
		geocoder = new google.maps.Geocoder();

		//readTextFile();
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
	      		lat = String(lat).substring(0, 5);
	      		long = String(long).substring(0, 7);
	      		console.log(lat);
	      		console.log(long);
	      	} else {
	        	console.log("yikes");
	        	alert('Location typed in was outside of our sample data. Please try again!');
	      	}
   		});
	}

	/* FIGURE OUT TEXT PROCESSING LATER...
	function readTextFile() {
	    var client = new XMLHttpRequest();
		client.open("GET", "http://127.0.0.1:8080/LatLongDispatchMax.txt", true);
		client.send();
		client.onreadystatechange = function() {
		  if(this.readyState == this.HEADERS_RECEIVED) {
		    content = client.responseText.split("\n");
		    console.log(content);
		  }
		}
	} */
}());