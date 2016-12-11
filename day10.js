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
		bots[line[1]] = new Bot(line[11], line[6], line[1], line[5], line[10]);
	}
})
input.forEach(line => {
	line = line.split(' ');
	if (line[0] === 'value') {
		bots[line[5]].push(line[1]);
	}
})
console.log(output);
