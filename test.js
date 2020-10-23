/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length === 0) {
        return false;
    };
    let tempRes = findArr(matrix, target);
    console.log(tempRes);
    return bstArr(tempRes, target);
};

const findArr = (matrix, target) => {
    let midpoint = (Math.floor(matrix.length/2));
    let arr = matrix[midpoint];
    let bstArr = compareArr(arr, target);
    
    while(bstArr != 0) {
        console.log(`bstArr is ${bstArr}, arr is ${arr}, midpoint is ${midpoint}`)
        switch(bstArr) {
            case 1:
                if(midpoint === matrix.length -1 || target < matrix[midpoint + 1][0]) {
                    return arr;
                };
                midpoint = Math.floor((matrix.length + midpoint)/2);
            // case -1:
            //     if(midpoint === 0 || target > matrix[midpoint - 1][matrix[midpoint - 1].length]) {
            //         return arr;
            //     }
            //     midpoint = Math.floor(midpoint/2);

        };
        
        arr = matrix[midpoint];
        bstArr = compareArr(arr, target);
        
    };
    return arr;
};
    
const compareArr = (arr, target) => {
    // console.log(`Target is ${target} arr is ${arr} type of arr ${typeof(arr)}`)
    if(target < arr[0]) {
        return -1;
    } else if(target > arr[arr.length - 1]) {
        return 1;
    };
    return 0;
};

const bstArr = (arr, target) => {
    let midpoint = Math.floor(arr.length/2);
    let num = arr[midpoint];
    
    while(num != target) {
        console.log(num === target);
        console.log(`Target is ${target}, Num is ${num}, Midpoint is ${midpoint}`);
        if(num < target) {
            if(arr[midpoint + 1] === undefined || target < arr[midpoint + 1]) {
                return false;
            };
            midpoint = Math.floor((arr.length + midpoint)/2);
        } else {
            if(arr[midpoint - 1] === undefined || target > arr[midpoint - 1]) {
                return false;
            };
            midpoint = Math.floor(midpoint/2);
        };
        num = arr[midpoint];
    };
    return true;
};

(() => {
    console.log(searchMatrix([[1],[3],[5]], 5));
})()