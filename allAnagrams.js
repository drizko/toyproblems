function allAnagrams(string) {
  var results = [];

  (function recurse(temp, available) {
    if (temp.length === string.length && results.indexOf(temp) === -1) {
      results.push(temp);
    } else {
      for (var i = 0; i < available.length; i++) {
        recurse(temp + available[i], available.slice(0, i).concat(available.slice(i + 1)));
      }
    }
  })('', string);

  return results;
}

allAnagrams('abc');
