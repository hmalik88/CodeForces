var levels = parseInt(readline());
var str = '';
var i = 1
while (i < levels) {
  if (i % 2 === 1) str += 'I hate that ';
  else str += 'I love that ';
  i++;
}
if (levels % 2 === 1) str += 'I hate it';
else str += 'I love it';
print(str);
