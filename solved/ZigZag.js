// ------------------------------
// ------------------------------
// ZigZag Conversion 
// ------------------------------

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
// (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R


// And then read line by line: "PAHNAPLSIIGYIR"


// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string text, int nRows);

// convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

(() => {
  const workatpaypal = (str, zaglen) => {
    let letters = str.split('');
    let matrix = [];
    for(let j = 0; j < zaglen; j++) {
      matrix.push([]);
    }
    let upArray = true;
    let matrixIndex = 0;
    for(let i = 0; i < letters.length; i++) {
      matrix[matrixIndex].push(letters[i]);
      if(matrixIndex === 0) {
        upArray = true;
      } else if(matrixIndex === zaglen - 1) {
        upArray = false;
      };
      if(upArray) {
        matrixIndex++;
      } else {
        matrixIndex--;
      };
    };
    return(matrix.reduce((resArr, arr) => {
      resArr = [].concat(resArr, arr);
      return resArr;
    }, []).join(''));
  };

  console.log(workatpaypal("PAYPALISHIRING", 3));
})()