
function getSpiral(row, col) {
	var result = [];
	
	for(var i=0 ; i<row ; i++) {
		result[i] = [];
	}
	
	var n=1;
	
	for(var i=0 ; i<row ; i++) {
		for(var j=0; j<col && n<=row*col; j++){
			result[i][j] = n++;
		}
		i++;
		for(var j=col-1; j>=0 && n<=row*col; j--){
			result[i][j] = n++;
		}
	}
	
	return result;
}