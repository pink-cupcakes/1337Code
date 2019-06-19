// ------------------------------
// ------------------------------
// Substring with Concatenation of All Words 
// ------------------------------

// You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.



// For example, given:
// s: "barfoothefoobarman"
// words: ["foo", "bar"]



// You should return the indices: [0,9].
// (order does not matter).

(() => {
  const func = (bank, str) => {
    let res = new Set();
    let found = false;
    for(let i = 0; i < str.length; i++) {
      let longestlength = 0;
      for(const word of bank) {
        let substr = str.substr(i, word.length);
        if(substr === word && word.length > longestlength) {
          if(!found) {
            res.add(i);
          };
          longestlength = word.length;
        };
      };
      if(longestlength > 0) {
        i = i + longestlength - 1;
        found = true;
      } else {
        found = false;
      };
    };
    return res;
  };
  console.log(func(["test", "testing", "ing"], "testtestingthetestingbarman"));
})()