// ------------------------------
// ------------------------------
// Edit Distance 
// ------------------------------

// Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2. (each operation is counted as 1 step.)



// You have the following 3 operations permitted on a word:



// a) Insert a character
// b) Delete a character
// c) Replace a character

(() => {
  editDistance = (word1, word2) => {
    if(Math.abs(word1.length - word2.length) > 1) {
      return false;
    };
    let j = 0;
    let edited = false;
    for(let i = 0; i < word1.length; i++) {
      let letter1 = word1.charAt(i);
      let letter2 = word2.charAt(j);
      if(letter1 !== letter2) {
        if(edited) {
          return false;
        };
        edited = true;
        if(letter1 === word2.charAt(j + 1)) {
          i--;
          j++;
        } else if(word2.charAt(j + 1) === word1.charAt(i + 1)) {
          j++;
        };
      } else {
        j++;
      }
    };
    return true;
  };
  console.log(editDistance('test','test1'));
})()