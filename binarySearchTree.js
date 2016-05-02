function binarySearch (array, target) {
  var newArray = Array.prototype.slice.call(array);


  function recurse(tmpArray, fromLeft, fromRight){
    var mid = Math.floor((fromLeft + fromRight) / 2);

    if(fromLeft > fromRight){ return -1; }
    if(tmpArray[mid] < target){ return recurse(tmpArray, mid + 1, fromRight); }
    if(tmpArray[mid] > target){ return recurse(tmpArray, fromLeft, mid - 1); }

    return mid;
  }

  return recurse(newArray, 0, newArray.length - 1);
}
