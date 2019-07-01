// ------------------------------
// ------------------------------
// Simplify Path 
// ------------------------------
// Given an absolute path for a file (Unix-style), simplify it.

// For example,
// path = "/home/", => "/home"
// path = "/a/./b/../../c/", => "/c"


// click to show corner cases.

// Corner Cases:



// Did you consider the case where path = "/../"?
// In this case, you should return "/".
// Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
// In this case, you should ignore redundant slashes and return "/home/foo".

(() => {
  const simplifyPath = (string) => {
    let components = string.split('/');
    let lastIndex = 0;
    let queue = [];
    for(const instruction of components) {
      if(instruction === '..') {
        lastIndex--;
      } else if(instruction !== '.' && instruction !== '') {
        queue[lastIndex] = instruction;
        lastIndex++;
      };
    };
    return '/' + queue.slice(0, lastIndex).join('/');
  };
  console.log(simplifyPath('/../../a'));
})()