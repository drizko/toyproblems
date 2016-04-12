(function() {
  'use strict';

  function zipSum(xs, ys) {
    return xs.map((x,y) => xs[y] + ys[y]).slice(0, Math.min(xs.length, ys.length));
  };

  // Input
  // var xs = [10, 20, 30];
  // var ys = [1, 2, 3];

  // Output
  // [ 11, 22, 33 ]

  // Input
  // var xs = [100, 1];
  // var ys = [50, 5];

  // Output
  // [150, 6]

  // Input
  // var xs =  [10, 20, 30];
  // var ys = [1, 2];

  // Output
  // [11, 22]

  var xs = [10, 20];
  var ys = [1, 2, 3];

  // Output
  // [11, 22]

  return zipSum(xs, ys);

})();
