var input = readline().split(' ');
var socks = parseInt(input[0]), m = parseInt(input[1]);
var i = 1;
while (true) {
  if (!socks) break;
  socks--;
  if (i++ % m === 0) socks++;
}
print(i-1);
