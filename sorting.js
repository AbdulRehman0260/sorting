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

function insertSort(arr) {
  if (!arr.length) {
    return -1;
  }
  for (let i = 1; i < arr.length; i++) {
    // unsorted array
    let key = arr[i]; // sorted key
    let j = i - 1; // reverse start of the sorted array
    while (j >= 0 && arr[j] > key) {
      // condition to check and flip
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key; // insert the key in the right place
  }
  return arr;
}

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  // select pivot
  let left = [];
  let right = [];
  let pivot = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  //combining the result and recursion
  return [...quickSort(left), pivot, ...quickSort(right)];
}

function merge_sort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(merge_sort(left), merge_sort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(bubbleSort(array));
console.log(insertSort(array));
console.log(quickSort(array));
console.log(merge_sort(array));
