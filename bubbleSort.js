function bubbleSort (input) {
  var result = input.slice();
  var sorted = false;

  while(!sorted){
    var count = 0;
    for(var i = 0; i < input.length; i++){
      if(result[i] > result[i + 1]){
        var tmp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = tmp;
      } else {
        count++;
      }
      if(count >= input.length){
        sorted = true;
      }
    }
  }

  return result;
}
