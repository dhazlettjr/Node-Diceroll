'use strict';

module.exports = (argsArr) => {
    let argsObj = {};
    if (argsArr[1]) {
        argsObj.count = argsArr[0];
        argsObj.sides = argsArr[1];
    } else if (argsArr[0]) {
        argsObj.count = 1;
        argsObj.sides = argsArr[0];
    } else {
        argsObj.count = 1;
        argsObj.sides = 6;
    };
    return argsObj;
};