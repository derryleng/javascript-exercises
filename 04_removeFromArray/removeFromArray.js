const removeFromArray = function(origArray, ...args) {
    let diffArray = origArray.filter(x => !args.includes(x));
    return diffArray;
};

// Do not edit below this line
module.exports = removeFromArray;
