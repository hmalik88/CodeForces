var bears = readline().split(' ');
var bear1 = parseInt(bears[0]), bear2 = parseInt(bears[1]);
var years = 0;
while (bear1 <= bear2) {
  bear1 *= 3;
  bear2 *= 2;
  years++;
}
print(years);
