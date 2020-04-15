var limit = parseInt(readline());
var increasing = [true];
var arr = readline().split(' ').map(x => parseInt(x));
var start = 0
var lengths = 1;
for (var i = 1; i < limit; i++) {
  if (arr[i] >= arr[i-1]) increasing[i] = true;
  else increasing[i] = false;
  if ((increasing[i-1] && arr[i] < arr[i-1]) || (i === limit - 1 && arr[i] >= arr[i-1])) {
    if (i === limit - 1 && arr[i] >= arr[i-1]) {
      if (!increasing[i-1]) start = i - 1
      lengths = Math.max(lengths, i + 1 - start);
    }
    lengths = Math.max(lengths, i - start);
    start = i;
  }
}
print(lengths);

