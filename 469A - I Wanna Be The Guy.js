var n = parseInt(readline());
var X = readline().slice().split(' ').map(x => parseInt(x));
X.shift();
var Y = readline().slice().split(' ').map(x => parseInt(x));
Y.shift();
var set = new Set([...X,...Y]);
if (set.size === n && Math.max(...set) === n) print('I become the guy.');
else print('Oh, my keyboard!');

