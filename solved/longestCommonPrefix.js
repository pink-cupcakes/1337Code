// ------------------------------
// ------------------------------
// Longest Common Prefix 
// ------------------------------
// Write a function to find the longest common prefix string amongst an array of strings.

const findOverlap = (str1, str2) => {
  let overlap = '';
  for(let i = 0; i < Math.min(str1.length, str2.length); i++) {
    if(str1[i] === str2[i]) {
      overlap += str1[i];
    };
  };
  return overlap;
}

(() => {
  const longestPrefix = (words) => {
    let longest = words[0];
    for(const word of words) {
      longest = findOverlap(longest, word);
    };
    return longest;
  };
  console.log(longestPrefix(['test', 'testing', 'test12', 'test1']));
})()