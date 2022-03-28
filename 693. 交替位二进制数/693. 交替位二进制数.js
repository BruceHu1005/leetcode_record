/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
	var num = n.toString(2);
	var b = true;
	for (var i = 0; i < num.length-1; i++) {
		if(num[i]^num[i+1] == 0){
			b = false;
		}
	}
	return b;
};