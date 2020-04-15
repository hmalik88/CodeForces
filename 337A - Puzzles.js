var input = readline().split(' ').map(x => parseInt(x));
var n = input[0];
var m = input[1];
var puzzleCounts = readline().split(' ').map(x => parseInt(x));
puzzleCounts.sort((a,b) => a-b);
var differences = [];
for (var i = 0; i < m - (n - 1); i++) {
  var arr = [];
  for (var j = i; j < i + n; j++) {
    arr.push(puzzleCounts[j]);
  }
  var lowest = Math.min(...arr);
  var highest = Math.max(...arr);
  differences.push(highest-lowest);
}
print(Math.min(...differences));
