var array = [
  'AACACCCTATA',
  'CTTCATCCACA',
  'TTTCAATTTTC',
  'ACAATCAAACC',
  'ATTCTACAACT',
  'ATTCCTTATTC',
  'ACTTCTCTATT',
  'TAAAACTCACC',
  'CTTTTCCCACC',
  'ACCTTTTCTCA',
  'TACCACTACTT'
];


function compareTwoStrings(string1, string2) {
  var score = 0;

  for(var i = 0; i < string1.length; i++) {
    if(string1[i] !== string2[i]) {
      score += 1;
    }
  }

  return score;
}

function findClosestString(array) {
  var minIndexScore = 0;
  var minScore;
  var score;

  for(var i = 0; i < array.length; i++) {
    score = 0
    for(var j = 0; j < array.length; j++) {
      if (i !== j) {
        score += compareTwoStrings(array[i], array[j])

      }
    }

    if(!minScore || score < minScore) {
      minScore = score;
      minIndexScore = i;
    }
  }

  return array[minIndexScore];
}

console.log(findClosestString(array));
