var input = "monk, konm, bbc, cbb, dell, ledl";
function allAnagrams(string) {

  function permutation(start, string) {
    if (string.length === 1) {
      return [start + string];
    } else {
      var result = [];
      for (var i = 0; i < string.length; i++) {
        var result = permutation(string[i], string.substr(0, i) + string.substr(i + 1));
        for (var j = 0; j < result.length; j++) {
          result.push(start + result[j]);
        }
      }
      return result;
    }
  }

  return permutation('', string);

}

allAnagrams('abc');
