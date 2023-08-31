const sumAll = function(lowerBound, upperBound) {
    if(lowerBound < 0 || upperBound < 0 || typeof lowerBound !== "number" || typeof upperBound !== "number") {
        return "ERROR";
    }

    let result = 0;
    if(lowerBound > upperBound) {
        const temp = lowerBound;
        lowerBound = upperBound;
        upperBound = temp;
    }    

    for (let counter = lowerBound; counter <= upperBound; counter++) {
       result += counter; 
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
