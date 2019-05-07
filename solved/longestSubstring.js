// ------------------------------
// ------------------------------
// Longest Substring Without Repeating Characters 
// ------------------------------
// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

(() => {
  const lengthOfLongestSubstring = (str) => {
    let res = '';
    let letters = str.split('');
    let i = 0;
    while(i < letters.length) {
      let letter = letters[i];
      let letterSet = new Set([letter]);
      i++;
      for(let j = i; j < str.length; j++) {
        let subletter = letters[j];
        let start = i - 1;
        if(letterSet.has(subletter)) {
          if(j - start > res.length) {
            res = str.substring(start, j);
          }
          break;
        };
        if(j === str.length - 1) {
          if(j + 1 - start > res.length) {
            res = str.substring(start, j + 1);
          };
        };
        letterSet.add(subletter);
      };
    };
    return res.length;
  };

  console.log(lengthOfLongestSubstring('abcd'))
})()