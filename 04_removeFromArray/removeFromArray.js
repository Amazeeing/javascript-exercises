const removeFromArray = function(array, ...elementsToRemove) {
    for (const element of elementsToRemove) {
        let elementIndex = array.indexOf(element); 

        if(elementIndex != - 1) {
            array.splice(elementIndex, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
