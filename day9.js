var fs = require('fs');

var input = fs.readFileSync('./day9.txt', "utf8");

// var input = 'X(8x2)(3x3)ABCY';

// var result = '';

var decomp = (string) => {
	var n = 0;
	for (var i = 0; i < string.length; i++) {
		if (string[i] === '(') {
			var comp = '';
			i++;
			while (string[i] !== ')') {
				comp += string[i];
				i++;
			}
			i++;
			comp = comp.split('x');
			var leng = Number(comp[0]);
			var times = Number(comp[1]);
			n += decomp(string.slice(i, i + leng)) * times;
			i += leng - 1;
		} else {
			n++;
		}
	}
	return n;
}

console.log(decomp(input));

// var leng = 0;
// var times = 0;

// var decomp = (times, leng, string) {
// 	if ()
// 	return string;
// }

// for (var i = 0; i < input.length; i++) {
// 	var cur = input[i];
// 	var comp = '';
// 	if (cur === '(') {
// 		i++;
// 		while (input[i] !== ')') {
// 			comp += input[i];
// 			i++;
// 		}
// 		i++;
// 		comp = comp.split('x');
// 		leng = Number(comp[0]);
// 		times = Number(comp[1]);

// 		var string = '';
// 		var index = i;
// 		for (var j = 0; j < times; j++) {
// 			for (var k = 0; k < leng; k++) {
// 				string += input[i+k]
// 			}
// 		}
// 		result += string;
// 		i += k - 1;
// 	} else {
// 		result += cur;
// 	}
// }	

// console.log(result.length);