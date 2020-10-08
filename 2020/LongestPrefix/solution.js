/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var shortest;
    res = strs[0];
    for(let i = 0; i < strs.length; i++) {
        let word1 = strs[i];
        comparison = comparePrefixOverlap(res, word1);
        if (shortest > comparison[0] || shortest == undefined) {
            shortest = comparison[0];
            res = comparison[1];
        };
    };
    
    return res == undefined ? "" : res;
};

const comparePrefixOverlap = (word1, word2) => {
    let i = 0;
    for(i; i < word1.length; i++) {
        if(word1.charAt(i) != word2.charAt(i)) {
            break;
        };
    };
    return [i, word1.substring(0, i)]
};