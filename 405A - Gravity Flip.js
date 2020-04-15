var limit = parseInt(readline());
var arr = readline().split(' ').map(x => parseInt(x));
arr.sort((a,b) => a-b);
print(arr.join(' '));
