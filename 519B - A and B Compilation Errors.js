var limit = parseInt(readline());
var firstErrors = readline().split(' ').map(x => parseInt(x));
var secondErrors = readline().split(' ').map(x => parseInt(x));
var thirdErrors = readline().split(' ').map(x => parseInt(x));
firstErrors.sort((a,b) => a-b);
secondErrors.sort((a,b) => a-b);
thirdErrors.sort((a,b) => a-b);
var errors = [];
var somethingChanged = false;
for (var i = 0; i < limit - 1; i++) {
  if (secondErrors[i] !== firstErrors[i]) {
    errors.push(firstErrors[i]);
    somethingChanged = true;
    break;
  }
}
if (!somethingChanged) errors.push(firstErrors[limit-1]);
somethingChanged = false;
for (var j = 0; j < limit - 2; j++) {
  if (thirdErrors[j] !== secondErrors[j]) {
    errors.push(secondErrors[j])
    somethingChanged = true;
    break;
  }
}
if (!somethingChanged) errors.push(secondErrors[limit-2]);
for (var k = 0; k < errors.length; k++) print(errors[k]);

