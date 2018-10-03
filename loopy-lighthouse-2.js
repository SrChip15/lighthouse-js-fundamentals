function loopyLighthouse(range, multiples, words) {
  // Add safeguard against ambiguous args
  if (range.length === 0 || range.length > 2 ||
    multiples.length === 0 || multiples.length > 2 ||
    words.length === 0 || words.length > 2) {
    return -1;
  }

  for (var i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
