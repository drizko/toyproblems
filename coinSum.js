function coinSums (change) {
  var coins = [1,2,5,10,20,50,100,200];
  var count = 0;

  (function recurse(input, index){
    if(input === change){
      count += 1;
      return;
    }

    if(input > change){
      return;
    }

    for(var i = index; i < coins.length; i++){
      recurse(input + coins[i], i);
    }

  })(0, 0);

  return count;
}
