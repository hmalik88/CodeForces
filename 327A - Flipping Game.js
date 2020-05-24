var n = parseInt(readline());
var integers = readline().split(' ').map(x => parseInt(x));
var ones = 0, zeros = 0, max = 0;
var maxSequence = [];
for (var i = 0; i < n; i++) {
  if (integers[i] === 1) zeros++, ones--;
  else ones++;
  if (ones < 0) ones = 0;
  max = Math.max(max, ones);
}
if (zeros === n) print(n - 1);
else print(max + zeros);

