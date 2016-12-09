var fs = require('fs');

var input = fs.readFileSync('./day9.txt', "utf8", (err, data) => {});

input = input.split('\n');

var matrix = [];
for (var i = 0; i < 6; i++) {
    var row = [];
    for (var j = 0; j < 50; j++) {
        row.push(0);
    }
    matrix.push(row);
}

var makeRect = (x, y) => {
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < y; j++) {
            matrix[j][i] = 1;
        }
    }
}

var moveRow = (index, dist) => {
    var row = matrix[index];
    var newRow = [];
    for (var i = 0; i < 50; i++) {
        newRow[((i + dist) % 50)] = Number(row[i]);
    }
    matrix[index] = newRow;
}

var moveCol = (index, dist) => {
    var newCol = [];
    matrix.forEach((row, i) => {
        newCol[((i + dist) % 6)] = row[index]
    })
    newCol.forEach((x, j) => {
        matrix[j][index] = x;
    })

}

input.forEach(line => {
    line = line.split(' ');
    if (line[0] === 'rect') {
        var x = line[1].split('x')[0];
        var y = line[1].split('x')[1];
        makeRect(x, y);
    } else {
        var dist = Number(line[4]);
        var z = line[2].split('=')[1];
        line[1] === 'row' && moveRow(z, dist);
        line[1] === 'column' && moveCol(z, dist);
    }
}) 

var result = 0;
matrix.forEach(row => {
    row.forEach(col => {
        result += col;
    })
})

console.log(result);

matrix.forEach(row => {
    var line = ''
    row.forEach( (x, i) => {
        line += x === 1 ? '#' : ' ';
    })
    console.log(line);
})



















