Date.prototype.format = function(pattern, gmt) {
	var result = '';
	var date = this;
	if(gmt != undefined) {
		var utc = date.getTime() + (date.getTimezoneOffset() * 60000);
		date = new Date(utc + (3600000 * gmt));
	}
	for (var i = 0; i < pattern.length; i++) {
		var c = pattern[i];
		switch (c) {
			case 'd':
				result += ('0' + date.getDate()).slice(-2);
				break;
			
			case 'm':
				result += ('0' + String(date.getMonth()+1)).slice(-2);
				break;
			
			case 'Y':
				result += date.getFullYear();
				break;
			
			case 'H':
				result += ('0' + date.getHours()).slice(-2);
				break;

			case 'i':
				result += ('0' + date.getMinutes()).slice(-2);
				break;

			case 's':
				result += ('0' + date.getSeconds()).slice(-2);
				break;

			case '\\':
				result += pattern[++i];
				break;

			default:
				result += c;
				break;
		}
	}
	return result;
}