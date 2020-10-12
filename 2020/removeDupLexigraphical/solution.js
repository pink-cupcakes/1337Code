/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let letterLastIndex = {};
    let res = {};
    let resArray = [];
    
    for(let i = 0; i < s.length; i ++) {
        let letter = s.charAt(i);
        let index = i
        letterLastIndex[letter] = index;
    };
    
    for(let i = 0; i < s.length; i ++) {
        let letter = s.charAt(i);
        let index = i
        
        if(res[letter] == undefined) {
            res[letter] = index;
        };
        
        for(let resLetter in res) {
            // console.log(`i is ${i} resLetter is ${resLetter}, futureResLetter is ${letterLastIndex[resLetter]}, letter is ${letter}`)
            if((letter < resLetter) && (letterLastIndex[resLetter] > index) && (res[letter] > res[resLetter])) {
                console.log(`Deleted ${resLetter}`)
                delete res[resLetter];
                continue;
            } else if(letterLastIndex[letter] == i) {
                console.log(`Locking in resLetter ${resLetter}`)
                letterLastIndex[resLetter] = 0;
            };
        };

    };
    
    for(let letter in res) {
        let index = res[letter];
        resArray[index] = letter;
    };
    
    return resArray.join('');
};