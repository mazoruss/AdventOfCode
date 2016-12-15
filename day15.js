var fs = require('fs');
var input = fs.readFileSync('./day15.txt', "utf8");
input = input.split('\n');

console.log(input);

var disc = function(slots, start, num) {
	this.slots = slots;
	this.start = start;
	this.num = num;
}

disc.prototype.canPass = function(time) {
	if ((this.num + time + this.start) % this.slots === 0) {
		return true;
	}
	return false;
}
var disc1 = new disc(5, 2, 1);
var disc2 = new disc(13, 7, 2);
var disc3 = new disc(17, 10, 3);
var disc4 = new disc(3, 2, 4);
var disc5 = new disc(19, 9, 5);
var disc6 = new disc(7, 0, 6);
var disc7 = new disc(11, 0, 7);

for (var i = 0; i < 10000000; i++) {
	if(
		disc1.canPass(i) &&
		disc2.canPass(i) &&
		disc3.canPass(i) &&
		disc4.canPass(i) && 
		disc5.canPass(i) &&
		disc6.canPass(i) &&
		disc7.canPass(i)
		) 
	{
		console.log(i);
		i = 1000000000;
	}
}