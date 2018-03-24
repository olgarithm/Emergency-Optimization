(function () {
	var $ = function(id) { return document.getElementById(id); };
	var geocoder;
	var content;

	window.onload = function() {
		geocoder = new google.maps.Geocoder();
		initMap();
		createCharts();
		$("submit").onclick = findType;
	}

	function initMap() {
		var mapCenter = {lat: 37.76, lng: -122.41};
		var map = new google.maps.Map($("map"), {
			center: mapCenter,
			zoom: 13
		});
		// TODO: make the markers different colors and add descriptions
		var marker1 = new google.maps.Marker(( {
			position: {lat: 37.79267912, lng: -122.3968535},
			optimized: false,
			map: map
		}));
		google.maps.event.addListener(marker1, 'click', function(){
			var infowindow = new google.maps.InfoWindow({
				content:"221 Market St",
				position: {lat: 37.80, lng: -122.3968535},
			});
			infowindow.open(map);
		});

		var marker2 = new google.maps.Marker(( {
			position: {lat: 37.74947846, lng: -122.4028663},
			optimized: false,
			map: map
		}));
		google.maps.event.addListener(marker2, 'click', function(){
			var infowindow = new google.maps.InfoWindow({
				content:"1501 Vermont Street",
				position: {lat: 37.75, lng: -122.4028663},
			});
			infowindow.open(map);
		});

		var marker3 = new google.maps.Marker(( {
			position: {lat: 37.74033299, lng: -122.4664486},
			optimized: false,
			map: map
		}));
		google.maps.event.addListener(marker3, 'click', function(){
			var infowindow = new google.maps.InfoWindow({
				content: "46 W Portal Ave",
				position: {lat: 37.75, lng: -122.4664486},
			});
			infowindow.open(map);
		});

		var marker4 = new google.maps.Marker(( {
			position: {lat: 37.79035287, lng: -122.4076956},
			optimized: false,
			map: map
		}));
		google.maps.event.addListener(marker4, 'click', function(){
			var infowindow = new google.maps.InfoWindow({
				content:"624 Bush St",
				position: {lat: 37.80, lng: -122.4664486},
			});
			infowindow.open(map);
		});

		var marker5 = new google.maps.Marker(( {
			position: {lat: 37.72229807, lng: -122.4113031},
			title: "644-650 Colby St",
			optimized: false,
			map: map
		}));
		google.maps.event.addListener(marker5, 'click', function(){
			var infowindow = new google.maps.InfoWindow({
				content: "644-650 Colby St",
				position: {lat: 37.73, lng: -122.4664486},
			});
			infowindow.open(map);
		});
	}

	function createCharts() {
		// Time of Emergency Calls
		var first = $("firstChart");
		var myChart = new Chart(first, {
		    type: 'bar',
		    data: {
		        labels: ["1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM", "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
		        		 "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM", "12:00 AM"],
		        datasets: [{
		            label: '# of Listings',
		            data: [5002, 2489, 547, 92, 6, 3, 4, 2, 1, 34, 5, 2, 0, 0, 0, 1, 2, 2, 3, 4, 1, 3, 2, 1],
		            backgroundColor: [
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
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
		            }]
		        }
		    }
		});

		// Severity of Emergency Call Chart
		var second = $("secondChart");
		var myDoughnutChart = new Chart(second, {
    		type: "doughnut",
   			data: {
   				labels: ["Non Life-Threatening", "Potentially Life-Threatening", "Alarm", "Fire"],
		        datasets: [{
		            data: [671, 786, 1025, 7],
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
		        labels: ["Entire Home", "Private Room", "Shared Room"],
		        datasets: [{
		            label: '# of Listings',
		            data: [5083, 3437, 186],
		            backgroundColor: [
		                'rgba(255, 99, 132, 1',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
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
	      	console.log(time);
	      	console.log(results);
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
	      		/*while (times[time] == null && count < 20) {
	      			time;
		      		timeString = String(long).substring(0, 7);
		      		count++;
	      		}*/
	      		if (count == 20) {
	      			alert("Sorry, we couldn't find that time. Please try again!");
	      		}
	      		var foundTime = document.createElement("p");
				var node = document.createTextNode("The most likely type of dispatch called at " + time +
												   " is: " + times[time]);
				foundTime.appendChild(node);
				element.appendChild(foundTime);
				// TODO combine the above dispatches
	      	} else {
	        	alert('Location typed in was outside of our sample data. Please try again!');
	      	}
   		});
	}
}());