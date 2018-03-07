#!/usr/bin/env node

'use strict'
const math = require('./math');
process.title = 'Dice Roll'

const { argv: [,, ...args] } = process
const { count, sides } = require('./parse-args')(args)
const { roll, toDiceNotation } = require('./dice')

const dice = toDiceNotation({count, sides})
const total = roll(dice)

console.log(total)

