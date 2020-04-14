var input = readline().split(" ");
var n = parseInt(input[0]);
var k = parseInt(input[1]);
while (k > 0) {
  if (n.toString()[n.toString().length - 1] === '0') n = Math.floor(n / 10);
  else n--;
  k--;
}
print(n);
