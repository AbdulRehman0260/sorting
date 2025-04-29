// code a bubble sort array


function bubbleSort(array){
    for (let i = 0;i < array.length ;i++){
        for (let j = 0; j < array.length; j++){
            if (array[j] > array[j + 1]){
                let temp = array[j + 1]
                array[j+1] = array[j]
                array[j] = temp
            }
        }
    } 
    return array
}

let numbers = [1, 4, 2, 6, 3, 2, 7, 23, 11, 75, 2, 12, 16];

const answer = bubbleSort(numbers)
console.log(answer)