const reverseString = function(string) {
    let stringCharacters = string.split('');
    let result = ""
    for (let index = stringCharacters.length - 1; index >= 0; index--) {
        result = result.concat(stringCharacters[index]);
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
