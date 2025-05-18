const array = [1, 4, 2, 4, 6, 3, 1, 7, 8, 5, 3, 10, 25, 1, 54, 33];

function bubbleSort(arr) {
  if (!arr.length) {
    return -1;
  }

  //jth loop for pairwise bubbling
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp;
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(array));
