//  FS module allows you to work with the file system on your computer
let fs = require("fs");
// process module is useful in taking command line argument         
//also it is preinstalled in nodejs so we do not need to require it
let process = require("process");

// also process.argv returns all the argument from cli as an array
let inputarr = process.argv.slice(2);

console.log(inputarr);
