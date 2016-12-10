var fs = require('fs');

var input = fs.readFileSync('./day10.txt', "utf8");

input = input.split('\n');

function Bot(high, low, num, lowoutput, highoutput) {
	this.store = [];
	this.high = high;
	this.low = low;
	this.number = num;
	this.lowoutput = lowoutput;
	this.highoutput = highoutput;
}

Bot.prototype.push = function(value) {
	this.store.push(value);
	this.store.sort( (x, y) => x - y );
	if (this.store.length === 2) {
		this.highoutput === 'bot' ? bots[this.high].push(this.store[1]) : output[this.high] = this.store[1];
		this.lowoutput === 'bot' ? bots[this.low].push(this.store[0]) : output[this.low] = this.store[0];
		this.store = [];
	}
}

var bots = {};
var output = {};

input.forEach(line => {
	line = line.split(' ');
	if (line[0] === 'bot') {
		var num = line[1];
		var low = line[6];
		var high = line[11];
		var lowoutput = line[5];
		var highoutput = line[10];
		bots[num] = new Bot(high, low, num, lowoutput, highoutput);
	}
})
input.forEach(line => {
	line = line.split(' ');
	if (line[0] === 'value') {
		var value = line[1];
		var num = line[5];
		bots[num].push(value);
	}
})
console.log(output);
console.log(31*5*7);
