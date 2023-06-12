function bubbleSort1(array) {
    let n = array.length;
    for (let i = 1; i < n; i++) {
        for(let j = 0; j < n-i; j++) {
            if (array[j] > array[j+1]) {
                swap(array, j, j+1);
            }
        }
    }
}

function swap(array, a, b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}