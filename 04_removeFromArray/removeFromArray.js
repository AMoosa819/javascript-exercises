const removeFromArray = function(arr, ...args) {
    // new tech here
    return arr.filter(val => !args.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
