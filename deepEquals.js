deepEquals = function(a, b){

  var recurse = function(a, b){
    for(var key in a){
      if(a[key] !== b[key] && typeof a[key] !== 'object' && typeof b[key] !== 'object'){
        return false
      }
      if(typeof a[key] === 'object' && typeof b[key] === 'object'){
        return recurse(a[key], b[key]);
      }
    }

    return true;
  }


  return recurse(a, b) && recurse(b, a);

};
