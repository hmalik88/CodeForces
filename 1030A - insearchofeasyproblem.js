var n = parseInt(readline())
var arr = readline().split(' ');
var flag = 'EASY';
for (var i = 0; i < n; i++) {
  if (arr[i] === '1') {
    flag = 'HARD';
    break;
  }
}
print(flag);
