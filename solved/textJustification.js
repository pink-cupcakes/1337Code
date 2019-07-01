// ------------------------------
// ------------------------------
// Text Justification 
// ------------------------------

// Given an array of words and a length L, format the text such that each line has exactly L characters and is fully (left and right) justified.
 


// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly L characters.



// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.



// For the last line of text, it should be left justified and no extra space is inserted between words.



// For example,
// words: ["This", "is", "an", "example", "of", "text", "justification."]
// L: 16.



// Return the formatted lines as:

// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]


(() => {
  const justifyContent = (arr, len) => {
    let rows = [];
    for(const word of arr) {
      let lastRow = rows[rows.length - 1];
      if(lastRow === undefined || lastRow.len + 1 + word.length > len) {
        let row = {
          words: [word],
          len: word.length
        };
        rows.push(row);
      } else {
        lastRow.words.push(word);
        lastRow.len += (word.length + 1);
      };
    };
    // console.log(rows);
    return rows.map((row) => {
      let spaces = len - (row.len - (row.words.length - 1));
      let eachSpace = row.words.length - 1 > 1 ? Math.floor(spaces / (row.words.length - 1)) : 0;
      let spillOver = spaces - (eachSpace * (row.words.length - 1));
      console.log(row)
      console.log(`Spaces is ${spaces}, eachSpace is ${eachSpace}, spillOver is ${spillOver}`)
      for(let i = 0; i < spillOver; i++) {
        if(eachSpace === 0) {
          row.words[0] += " ";
        } else {
          row.words[i] += " ";
        };
      };
      spaces = " ".repeat(eachSpace);
      console.log(row.words.join(spaces).length)
      return row.words.join(spaces);
    });
  };
  console.log(justifyContent(["This", "is", "an", "example", "of", "text", "justification."], 16));
})()