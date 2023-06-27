const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }
    return (max * (max + 1) / 2) - ((min - 1) * min / 2);
};

// Do not edit below this line
module.exports = sumAll;
