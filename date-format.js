Date.prototype.format = function(pattern) {
	var result = '';
	for (var i = 0; i < pattern.length; i++) {
		var c = pattern[i];
		switch (c) {
			case 'd':
				result += ('0' + this.getDate()).slice(-2);
				break;
			
			case 'm':
				result += ('0' + String(this.getMonth()+1)).slice(-2);
				break;
			
			case 'Y':
				result += this.getFullYear();
				break;
			
			case 'H':
				result += ('0' + this.getHours()).slice(-2);
				break;

			case 'i':
				result += ('0' + this.getMinutes()).slice(-2);
				break;

			case 's':
				result += ('0' + this.getSeconds()).slice(-2);
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