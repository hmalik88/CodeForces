var n = readline();
var arr = readline().split('').map(pile => parseInt(pile));
var piles = [arr[0]];
for (var i = 1; i < arr.length; i++) {
  piles[i] = piles[i - 1] + arr[i];
}
var w = readline();
var wormNums = readline().split('').map(x => parseInt(x));
function binarySearch(el) {
  var beg = 0, end = piles.length, mid;
  while (beg < end) {
    mid = Math.floor((beg + end) / 2);
    if (el > piles[mid - 1] && el <= piles[mid]) {
      return mid;
    } else if (el > piles[mid]) {
      beg = mid + 1;
    } else if (el < piles[mid]) {
      end = mid - 1;
    }
  }
  return beg;
}
wormNums.forEach(worm => print(binarySearch(worm) + 1));

//[2, 9, 12, 16, 25]
