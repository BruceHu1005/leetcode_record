/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
	numA = 0;
	numB = 0;
	tmp = 0;
	cur = 'C';
	for(i = 0; i < colors.length; i++){
		const c = colors[i];
		if(c !== cur){
			tmp = 1;
			cur = c;
		}
		else{
			tmp += 1;
			if(tmp >= 3){
				if(cur === 'A'){
					numA += 1;
				}
				else{
					numB += 1;
				}
			}
		}
	}
	return numA > numB;
};