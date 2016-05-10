commonCharacters = function(string1, string2){
  var result = ''

  for(var i = 0; i < string1.length; i++){
    if(string2.includes(string1[i]) && result.indexOf(string1[i]) === -1 && string1[i] !== " "){
      result += string1[i];
    }
  }

  return result;
};
