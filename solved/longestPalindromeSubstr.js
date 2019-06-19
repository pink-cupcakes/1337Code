// ------------------------------
// ------------------------------
// Longest Palindromic Substring 
// ------------------------------
// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example:

// Input: "babad"

// Output: "bab"

// Note: "aba" is also a valid answer.



// Example:

// Input: "cbbd"

// Output: "bb"

(() => {
  const findPalSubstr = (str) => {
    let letters = str.split('');
    let res = {
      index: 0,
      length: 0
    }
    for(let i = 0; i < letters.length - (res.length / 2); i++) {
      let j = 0;
      while(letters[i - j] === letters[i + j]) {
        j++;
      };
      if(j > res.length) {
        res.index = i;
        res.length = j;
      };
    };
    return str.substring(res.index - res.length, res.index + res.length);
  };

  
  console.log(findPalSubstr("abbbbd").length)
})()