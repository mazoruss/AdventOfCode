var fs = require('fs');
var input = fs.readFileSync('./day13.txt', "utf8");
input = '01000100010010111';
console.log(input.length)

while (input.length < 35651584) {
	var b = input.split('').reverse().map(x => (+x + 1) % 2).join('');
	input = input + '0' + b;
}
input = input.slice(0, 35651584);

var res = ''
while (input.length % 2 === 0) {
	res = ''
	for (var i = 0; i < input.length; i += 2) {
		input[i] !== input[i + 1] ? res += '0' : res += '1'
	}
	input = res;
}

console.log(res);
