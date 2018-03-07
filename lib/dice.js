'use strict';

let randomRoll = require('./math');
let objDice = {};


objDice.toDiceNotation = (countSideObj) => {
    let countSideText = `${countSideObj.count}d${countSideObj.sides}`
    return countSideText;
    console.log(countSideText)
};

objDice.roll = (diceNotationString) => {
    let diceSides = parseInt(diceNotationString.substr(diceNotationString.indexOf('d')+ 1, diceNotationString.length));
    let rollCount = parseInt(diceNotationString.substr(0, diceNotationString.indexOf('d')));
    let returnInt = 0;

    for (let i=0; i <rollCount; i ++) {
        let randomNumber = randomRoll.randomInt(1, diceSides);
        returnInt += randomNumber;
    };
    
    return returnInt;
};


module.exports = objDice;
