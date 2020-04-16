var target = parseInt(readline());
var inserted = 0;
while (true) {
  if (target === 1) {
    inserted++;
    break;
  }
  if (Math.ceil(target / 2) !== target / 2) {
    while (Math.ceil(target / 2) !== target / 2) {
      target--
      inserted++;
    }
  }
  target = target / 2;
}
print(inserted);
