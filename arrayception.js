function arrayception(array) {
  var result = 0;

  var checkArray = function(array, n) {
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && array[i].length > 0) {
        checkArray(array[i], n + 1);
      } else if (!Array.isArray(array[i])) {
        result = Math.max(n + 1, result);
      }
    }
  };

  checkArray(array,0);
  return result;
}

// Should be 4
// var input = [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ];
// Should be 2
// var input = [[ 5 ], [ [ ] ] ];

var input = [[1,[2],[3,[[4,[6,[],7]],[5]]]]];

// var input = [
//   [1,
//     [2],
//     [3,
//       [
//         [4,
//           [6,[],7]],
//           [5]
//       ]
//     ]
//   ]
// ]
arrayception(input);
