(function () {
	var $ = function(id) { return document.getElementById(id); };
	var geocoder;
	var content;
	var infoWindow;

	window.onload = function() {
		geocoder = new google.maps.Geocoder();
		infoWindow = new google.maps.InfoWindow();
		initMap();
		createCharts();
		$("submit").onclick = findType;
	}

	function initMap() {
		var mapCenter = {lat: 37.76, lng: -122.43};
		var map = new google.maps.Map($("map"), {
			center: mapCenter,
			zoom: 12
		});
		// TODO: make the markers different colors and add descriptions
		var marker1 = new google.maps.Marker(( {
			position: {lat: 37.79267912, lng: -122.3968535},
			optimized: false,
			label: {text: "1", color: "white"},
			map: map
		}));
		google.maps.event.addListener(marker1, 'click', function(){
			infoWindow.setContent('<div id="content">' + '<h1 id="heading"> 221 Market St </h1>'
				+ '<p>Average Dispatch Time: <br> 2 hours, 42 minutes, and 15 seconds</p>');
			infoWindow.setPosition({lat: 37.80267912, lng: -122.3968535});
			infoWindow.open(map);
		});

		var marker2 = new google.maps.Marker(( {
			position: {lat: 37.74947846, lng: -122.4028663},
			optimized: false,
			label: {text: "2", color: "white"},
			map: map
		}));
		google.maps.event.addListener(marker2, 'click', function(){
			infoWindow.setContent('<div id="content">' + '<h1 id="heading"> 1501 Vermont Street </h1>'
				+ '<p>Average Dispatch Time: <br> 1 hour, 8 minutes, and 56 seconds</p>');
			infoWindow.setPosition({lat: 37.75947846, lng: -122.4028663});
			infoWindow.open(map);
		});

		var marker3 = new google.maps.Marker(( {
			position: {lat: 37.74033299, lng: -122.4664486},
			optimized: false,
			label: {text: "3", color: "white"},
			map: map
		}));
		google.maps.event.addListener(marker3, 'click', function(){
			infoWindow.setContent('<div id="content">' + '<h1 id="heading"> 46 W Portal Ave </h1>'
				+ '<p>Average Dispatch Time: <br> 1 hour, 6 minutes, and 36 seconds</p>');
			infoWindow.setPosition({lat: 37.75033299, lng: -122.4664486});
			infoWindow.open(map);
		});

		var marker4 = new google.maps.Marker(( {
			position: {lat: 37.79035287, lng: -122.4076956},
			optimized: false,
			label: {text: "4", color: "white"},
			map: map
		}));
		google.maps.event.addListener(marker4, 'click', function(){
			infoWindow.setContent('<div id="content">' + '<h1 id="heading"> 624 Bush St </h1>'
				+ '<p>Average Dispatch Time: <br> 55 minutes and 6 seconds</p>');
			infoWindow.setPosition({lat: 37.80035287, lng: -122.4076956});
			infoWindow.open(map);
		});

		var marker5 = new google.maps.Marker(( {
			position: {lat: 37.72229807, lng: -122.4113031},
			optimized: false,
			label: {text: "5", color: "white"},
			map: map
		}));
		google.maps.event.addListener(marker5, 'click', function(){
			infoWindow.setContent('<div id="content">' + '<h1 id="heading"> 644-650 Colby St </h1>'
				+ '<p>Average Dispatch Time:<br> 45 minutes and 21 seconds</p>');
			infoWindow.setPosition({lat: 37.73229807, lng: -122.4113031});
			infoWindow.open(map);
		});
	}

	function createCharts() {
		// Time of Emergency Calls
		var first = $("firstChart");
		var myChart = new Chart(first, {
		    type: 'bar',
		    data: {
		        labels: ["1:00 AM - 2:00 AM", "3:00 AM - 4:00 AM", "5:00 AM - 6:00 AM", "7:00 AM - 8:00 AM", "9:00 AM - 10:00 AM", "11:00 AM - 12:00 PM",
		        		 "1:00 PM - 2:00 PM", "3:00 PM - 4:00 PM", "5:00 PM - 6:00 PM", "7:00 PM - 8:00 PM", "9:00 PM - 10:00 PM", "11:00 PM - 12:00 AM"],
		        datasets: [{
		            label: '# of Emergency Calls',
		            data: [304 + 283, 304 + 205, 224 + 193, 256 + 303, 348 + 502, 517 + 511, 588 + 506, 536 + 577, 595 + 503, 521 + 549, 487 + 383, 441 + 364],
		            backgroundColor: [
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		    	responsive: false,
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }],
		            xAxes: [{
		            	ticks: {
		            		autoSkip: false
		            	}
		            }]
		        }
		    }
		});

		// Severity of Emergency Call Chart
		var second = $("secondChart");
		var myDoughnutChart = new Chart(second, {
    		type: "doughnut",
   			data: {
   				labels: ["Potentially Life-Threatening", "Non Life-Threatening", "Alarm", "Fire"],
		        datasets: [{
		            data: [4753, 2468, 2385, 393],
		            backgroundColor: [
		                "rgba(255, 99, 132, 1)",
		                "rgba(54, 162, 235, 1)",
		                "rgba(255, 206, 86, 1)",
		                "rgba(75, 192, 192, 1)",
		            ],
		            borderWidth: 1
		        }]
   			},
    		options: {
		    	responsive: false,
		    }
		});

		// Room Type bar chart
		var third = $("thirdChart");
		var thirdChart = new Chart(third, {
		    type: 'bar',
		    data: {
		        labels: ["Code 2 Transport", "Fire", "Other", "Code 3 Transport", "Patient Declined Transport", "Against Medical Advice", "Cancelled", "Medical Examiner", "SFPD"],
		        datasets: [{
		            label: "Number of Transports",
		            data: [5039, 2641, 76 + 405 + 42 + 166, 491, 488, 212, 209, 174, 62],
		            backgroundColor: [
		                "rgba(255, 206, 86, 1)",
		                "rgba(75, 192, 192, 1)",
		                "rgba(255, 206, 86, 1)",
		                "rgba(75, 192, 192, 1)",
						"rgba(255, 206, 86, 1)",
		                "rgba(75, 192, 192, 1)",
						"rgba(255, 206, 86, 1)",
		                "rgba(75, 192, 192, 1)"
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		    	responsive: false,
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true,
		                    autoSkip: true
		                }
		            }]
		        },
		        scales: {
		            xAxes: [{
		                ticks: {
		                    autoSkip: false
		                }
		            }]
		        }
		    }
		});
	}

	function findType() {
		var address = $("address").value;
		var time = $("time").value;
    	geocoder.geocode( { "address": address}, function(results, status) {
	      	var lat = results[0].geometry.location.lat();
	      	var long = results[0].geometry.location.lng();
	      	if (status == 'OK' && lat >= 37.70862411 && lat <= 37.83166623 && long >= -122.5136484 && long <= -122.3651383) {
	      		var latString = String(lat).substring(0, 5);
	      		var longString = String(long).substring(0, 7);
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
	      		var foundLocation = document.createElement("p");
				var node = document.createTextNode("The most likely type of dispatch called near " + 
												   results[0].formatted_address + " is: " + locations[together]);
				foundLocation.appendChild(node);
				var element = $("found-dispatch");
				element.innerHTML = "";
				element.appendChild(foundLocation);
	      		var count = 0;
	      		if (count == 20) {
	      			alert("Sorry, we couldn't find that time. Please try again!");
	      		}
	      		var foundTime = document.createElement("p");
				var node = document.createTextNode("The most likely type of dispatch called at " + time +
												   " is: " + times[time]);
				foundTime.appendChild(node);
				element.appendChild(foundTime);
	      	} else {
	        	alert('Location typed in was outside of our sample data. Please try again!');
	      	}
   		});
	}
}());