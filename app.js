#!/usr/bin/node

const add = require('./calc');
var x=process.argv[2] || 1;
var y=process.argv[3] || 2;
console.log(`${x} + ${y} = ${add(x, y)}`);
