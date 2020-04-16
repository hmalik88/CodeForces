var input = readline().split(' ');
var rows = input[0], cols = input[1];
var type = '#Black&White';
while (true) {
  var row = readline();
  if (!row) break;
  if (row.match(/C|M|Y/)) {
    type = '#Color';
    break;
  }
}
print(type);
