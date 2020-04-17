var limit= parseInt(readline());
var angle;
for (var i = 0; i < limit; i++) {
  angle = parseInt(readline());
  if (360 % (180-angle) === 0) print('YES');
  else print('NO');
}
