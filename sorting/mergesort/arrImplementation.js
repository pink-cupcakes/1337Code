const merge = (arr1, arr2) => {
    console.log(`Arr1 is: ${JSON.stringify(arr1)}\nArr2 is: ${JSON.stringify(arr2)}`)
    let pointer1 = 0;
    let pointer2 = 0;
    
    while(pointer1 < arr1.length) {
        console.log(`Pointer1 Index: ${pointer1}. Pointer1 value: ${arr1[pointer1]}. Pointer2 index: ${pointer2}. Pointer2 value: ${arr2[pointer2]}`)
        if(arr1[pointer1] < arr2[pointer2] || arr2[pointer2] === undefined) {
            arr2.splice(pointer2, 0, arr1[pointer1]);
            pointer1++;
        } else {
            pointer2++;
        }
    }
    console.log(`The merge result is: ${arr2}`)
    return arr2;
}

const mergeSort = (arr) => {
    if(arr.length < 2) {
        return arr;
    };

    let midpoint = Math.floor(arr.length/2);
    let leftArr = mergeSort(arr.slice(0, midpoint));
    let rightArr = mergeSort(arr.slice(midpoint, arr.length));
    return merge(leftArr, rightArr);
}

(() => {
    merge([5, 20], [2, 32])
    // console.log(mergeSort([5, 20, 2, 32, 7, 19, 52, 61, 31, 21, 24, 1, -2, 94, -63, -4]));
})()