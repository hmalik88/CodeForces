var input = readline().split(' ');
var n = parseInt(input[0]);
var k = parseInt(input[1]);
var isFromOdd = false
if (k <= Math.ceil(n / 2)) isFromOdd = true;
if (isFromOdd) print((k * 2) - 1);
else print((k - Math.ceil(n / 2)) * 2);
