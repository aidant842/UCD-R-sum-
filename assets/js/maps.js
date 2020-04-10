function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: 46.619261,
                    lng: -33.134766
                }
            });

            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
            var locations = [{
                lat: 40.785091,
                lng: -73.968285
            }, {
                lat: 41.084045,
                lng: -73.874256
            }, {
                lat: 40.754932,
                lng: -73.984016
            }];

            var markers = locations.map(function(location, i) { //.map is a javascript function, not a google maps function, and it works like a for each method. it can take upto 3 arguements.
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length] //we use the % operator so that if we have more than 26 locations, then it will loop around to the start of our string again going from Z to A instead of throwing an error.
                });
            });
            var markerCluster = new MarkerClusterer(map, markers,{
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }