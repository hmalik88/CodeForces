var limit = parseInt(readline());
var map = {}
map['Icosahedron'] = 20;
map['Dodecahedron'] = 12;
map['Octahedron'] = 8;
map['Cube'] = 6;
map['Tetrahedron'] = 4;
var sum = 0;
for (var i = 0; i < limit; i++) {
  sum += map[readline()];
}
print(sum);
