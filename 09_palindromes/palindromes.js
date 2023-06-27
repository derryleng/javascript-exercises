const palindromes = function (testString) {
    let charString = testString.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
    return charString.split("").reverse().join("") == charString;
};

// Do not edit below this line
module.exports = palindromes;
