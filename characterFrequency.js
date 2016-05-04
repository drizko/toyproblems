function characterFrequency (string) {
  var array = string.split('');
  var storage = {};
  var result = [];

  for(var i = 0; i < array.length; i++){
    if(storage[array[i]]){
      storage[array[i]] += 1;
    } else {
      storage[array[i]] = 1;
    }
  }

  for(var key in storage){
    result.push([key, storage[key]])
  }

  return result.sort(function(a, b) {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
  });
}
