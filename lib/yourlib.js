
function getSpiral(row, col) {
	var result = [[]];
	
	for(var i = 0; i<col; i++){
		result[0][i] = i+1;
	}
	
	return result;
}