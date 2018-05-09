app.factory("EarthquakeService", [
    "$http",
    function($http,test,test2) {
        return {
            getEarthquakesLastHours: function(hours, getAllQuakes) {
 
				//+"&maxlatitude=34.683&minlatitude=12.726&maxlongitude=-129.199&minlongitude=-177.012"

                return $http.get("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime="+ moment().subtract(1, "days").format('YYYY/MM/DD')).then(
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