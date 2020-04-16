var input = readline().split(' ').map(x => parseInt(x));
var n = input[0], l = input[1];
var sorted = readline().split(' ').map(x => parseInt(x)).sort((a,b) => a-b);
var difference = -Infinity;
for (var i = 1; i < sorted.length; i++) difference = Math.max(difference, sorted[i] - sorted[i-1]);
difference /= 2;
if (sorted[0] !== 0) difference = Math.max(sorted[0], difference);
if (sorted[n-1] !== l) difference = Math.max(difference, l - sorted[n-1]);
print(difference);
