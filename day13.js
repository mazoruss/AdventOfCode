var fs = require('fs');
var input = fs.readFileSync('./day13.txt', "utf8");
input = input.split('\n');

var isWall = (num) => {
	var binary = (num >>> 0).toString(2);
	var total = 0;
	binary.split('').forEach(x => total += Number(x));
	return total % 2 === 1;
}

console.log(isWall(100));