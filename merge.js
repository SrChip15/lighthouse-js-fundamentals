function merge(array1, array2) {
  // init merged array
  var result = [];

  var i = 0;
  var j = 0;
  var counter = 0;
  var n = array1.length + array2.length;

  while (counter < n) {
    if (j >= array2.length) {
      result[counter] = array1[i];
      i++;
    } else if (i >= array1.length) {
      result[counter] = array2[j];
      j++;
    } else if (array1[i] <= array2[j]) {
      result[counter] = array1[i];
      i++;
    } else {
      result[counter] = array2[j];
      j++;
    }

    counter++;
  }

  return result;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]));
console.log(merge([ 1, 2, 6 ], []));