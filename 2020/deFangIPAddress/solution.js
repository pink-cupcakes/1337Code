/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let ints = address.split('');
    result = ints.reduce((res, int) => {
        if(int === ".") {
            res += "[.]";
            return res;
        };
        res += int;
        return res;
    });
    return result;
};