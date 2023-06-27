const repeatString = function(word, times) {
    if (times < 0) return "ERROR";
    let fullString = "";
    for (let i = 0; i < times; i++) {
        fullString += word;
    }
    return fullString;
};

// Do not edit below this line
module.exports = repeatString;
