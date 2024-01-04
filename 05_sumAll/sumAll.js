const sumAll = function(num1, num2) {
    // check if inputs are numbers
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    // check if inputs are negative
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    // check if inputs are reversed
    if (num1 > num2) {
        // perform swap
        var temp = num2;
        num2 = num1;
        num1 = temp;
    }

    // calculate sum
    let sum = 0;
    for (i = num1; i <= num2; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
