var s = parseInt(readline().split(' ')[0]);
var dragons = [];
while (true) {
  var input = readline();
  if (!input) break;
  dragons.push(input.split(' ').map(x => parseInt(x)));
}
dragons.sort((a,b) => a[0] - b[0]);
var statement = 'YES';
for (var i = 0; i < dragons.length; i++) {
  if (dragons[i][0] < s) s+= dragons[i][1]
  else {
    statement = 'NO';
    break;
  }
}
print(statement);
