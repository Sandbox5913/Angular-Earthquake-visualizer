function Earthquake(data) {
	

	 
	this.occuredAt =  new Date( moment(data.properties.time).unix() *1000 ).getTime(); // used as a key
    console.log(this.occuredAt);
	this.type = data.properties.type;
	this.latitude = parseFloat(data.geometry.coordinates[0]);
	this.longitude = parseFloat(data.geometry.coordinates[1]);
	this.depth = parseFloat(data.geometry.coordinates[2]);
	this.size = parseFloat(data.properties.mag);
	this.verified = 1;

	var humanReadable = "";

	this.humanReadableLocation = data.properties.place;
	
	this.quality = null;
}

// Checking if gps coordinates are near Bardarbunga
Earthquake.prototype.isFromBardarbunga = function() {

			return true;

};

Earthquake.prototype.color = function(now) {
	
	var diff = now- this.occuredAt;
	
	var hours = diff / (60 * 60 * 1000);
	var opacity = 0.75;

	if(hours <= 4) {
		return "rgba(255,0,0," + opacity + ")";
	}
	else if(hours <= 12) {
		return "rgba(255, 102, 0," + opacity + ")";
	}
	else if(hours <= 24) {
		return "rgba(255, 255, 0," + opacity + ")";
	}
	else if(hours <= 36) {
		return "rgba(51, 102, 204," + opacity + ")";
	}
	else {
		return "rgba(0, 0, 102," + opacity + ")";
	}
};

Earthquake.prototype.colorHex = function(now) {
	var diff = now - this.occuredAt;
	var hours = diff / (60 * 60 * 1000);

	if(hours <= 4) {
		return 0xff0000;
	}
	else if(hours <= 12) {
		return 0xff6600;
	}
	else if(hours <= 24) {
		return 0xffff00;
	}
	else if(hours <= 36) {
		return 0x3366cc;
	}
	else {
		return 0x0000ff;
	}
}