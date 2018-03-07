'use strict';

let math = {};

math.randomInt = (top, bottom) => {
    return Math.floor((Math.random() * bottom) + top);
};

module.exports = math;