var num = parseInt(readline());
var numStr = num.toString();
var isLucky = true;
var isAlmostLucky = false;
for (var i = 0; i < numStr.length; i++) {
  if (numStr[i] !== '4' && numStr[i] !== '7') isLucky = false;
}
if (isLucky) isAlmostLucky = true;
else {
  function recurse(str) {
    if (str.length > numStr.length) return false;
    if (str.length && num % parseInt(str) === 0) return true;
    if (recurse(str + '4')) return true;
    if (recurse(str + '7')) return true;
    return false;
  }
  isAlmostLucky = recurse('');
}
if (isAlmostLucky) print('YES');
else print('NO');
