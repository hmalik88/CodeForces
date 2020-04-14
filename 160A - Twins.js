var limit = parseInt(readline());
var count = 0, mySum = 0;
var coins = readline().split(' ').map(x => parseInt(x));
var totalSum = coins.reduce((a,b) => a+b, 0);
coins.sort((a,b) => b - a);
for (var i = 0; i < limit; i++) {
  mySum += coins[i];
  count++;
  if (mySum > totalSum - mySum) break;
}
print(count);
