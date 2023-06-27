const reverseString = function(origString) {
    let revString = "";
    for (let i = origString.length - 1; i >= 0; i--) {
        revString += origString[i];
    }
    // Or:
    // let revString = origString.split("").reverse().join("");
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
