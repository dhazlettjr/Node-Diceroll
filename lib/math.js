'use strict';

let math = {};

math.randomInt = (top, bottom) => {
    return math.floor((math.random() * top) + bottom);
};

module.exports = math;