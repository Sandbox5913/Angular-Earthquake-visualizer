app.factory("EarthquakeService", [
    "$http",
    function($http) {
        return {
            getEarthquakesLastHours: function(hours, getAllQuakes) {
				

                return $http.get("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=44.764037&longitude=-110.820208&maxradius=10&updatedafter="+ moment().format('YYYY/MM/DD')).then(
                    function(response) {
                        var earthquakes = [];

                        if(response.status === 200) {
                            for(var i = 0; i < response.data.features.length; ++i) {
                                var currentEarthquakeData = response.data.features[i];
                                var earthquake = new Earthquake(currentEarthquakeData);
                                
                                    earthquakes.push(earthquake);
                                
                            }
                        }
                        
                        return earthquakes;
                    }
                );
            }
        }
    }
]);