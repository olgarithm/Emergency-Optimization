(function () {
	var $ = function(id) { return document.getElementById(id); };
	var geocoder;

	window.onload = function() {
		geocoder = new google.maps.Geocoder();
		$("submit").onclick = findType;
	}

	function findType() {
		var address = $("address").value;
    	geocoder.geocode( { "address": address}, function(results, status) {
	      	var lat = result[0].geometry.location.latitude;
	      	var long = result[0].geometry.location.longitude;
	      	if (status == 'OK' && lat >= 37.70862411 && lat <= 37.83166623 && 
	      		long >= -122.5136484 && long <= -122.3651383) {
	      		alert("all gucci");
	      	} else {
	        	alert('Location typed in was outside of our sample data. Please try again!');
	      	}
   		});
	}
}());