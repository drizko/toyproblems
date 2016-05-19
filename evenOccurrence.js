function evenOccurrence (arr) {
  // Write your code here, and
  // return your final answer.
  var storage = {};
  var count = 0;

  arr.forEach(function(item, index){
    if(storage[item]){
      storage[item] += 1;
    } else {
      storage[item] = 1;
    }
  })

  for(var i = 0; i < arr.length; i++){
    if(storage[arr[i]] % 2 === 0){
      return arr[i];
    }
  }

  return null
}
