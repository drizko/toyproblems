function isBalanced (string) {
  var result = true;
  parens = [
  ['[', 0, ']', 0],
  ['(', 0, ')', 0],
  ['{', 0, '}', 0]];

  var count = 0;
  for(var i = 0; i < string.length; i++){
    var tmp = string[i]
    for(var j = 0; j < parens.length; j++){
      if(tmp === parens[j][0]){
        parens[j][1] += 1;
      }
      if(tmp === parens[j][2]){
        parens[j][3] += 1;
      }
    }
  }

  for(var i = 0; i < parens.length; i++){
    if(parens[i][1] !== parens[i][3]){
      result = false;
    }
  }

  return result;
}


// "(x + y) - (4)" // true
// "(50)(" // false
// "(((10 ) ()) ((?)(:)))" // true
// "" // true

var string = "((((((((((1)2)3)4)5)6)7)8)9)0)"
isBalanced(string);
