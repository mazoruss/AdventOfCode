var fs = require('fs');
var input = fs.readFileSync('./day14.txt', "utf8");

const md5Base64 = require('md5-base64');
var crypto = require('crypto');
 
input = 'yjdafjpo';
var count = 0;
var store = [];
var res = 0;

for (var i = 0; i < 30000; i++) {
	var data = input + i;
	var string = crypto.createHash('md5').update(data).digest("hex");
	for (var j = 0; j < 2016; j++) {
		string = crypto.createHash('md5').update(string).digest("hex");
	}
	store.push(string);
}

var index = 0;
while (count < 64) {
	var hash = String(store[index]);
	var match = hash.match(/(.)\1\1/);
	if (match) { 
		match = match[0].split('')[0]; 
		match = match + match + match + match + match;
		for (var i = 1; i < 1001; i++) {
			var hash = String(store[index+i]);
			if (hash.includes(match)) {
				count++;
				i = 2000;
				if (count === 64) {
					count = 100;
					console.log(index);
					res = index;
				}
			}
		}
	}
	index++;
}
