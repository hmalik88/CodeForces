var input = readline().toLowerCase();
input = input.replace(/[aeoyui]/g, '');
input = input.replace(/([^aeouiAEOYEUI])/g, '.$1');
print(input);
