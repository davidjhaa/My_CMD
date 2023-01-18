//  FS module allows you to work with the file system on your computer
const fs = require("fs");
// process module is useful in taking command line argument         
//also it is preinstalled in nodejs so we do not need to require it
const process = require("process");

// also process.argv returns all the argument from cli as an array
let inputarray = process.argv.slice(2);

// console.log(inputarray);

let filesarray = [];
let optionsarray = [];

for(let i = 0; i < inputarray.length; i++){
    if(inputarray[i].charAt(0) == "-"){
        optionsarray.push(inputarray[i]);
    }
    else{
        filesarray.push(inputarray[i]);
    }
}

// console.log(optionsarray);
// console.table(filesarray);

for(let i = 0; i < filesarray.length; i++){
    let doesexist = fs.existsSync(filesarray[i]);
    if(doesexist == false){
        console.log(filesarray[i] + " :-> File/Files does not exist");
        return;
    }
}

let files = "";
for(let i = 0; i < filesarray.length; i++){
    files += filesarray[i] + "\n";
}

console.log("Files to be read are :-> \n" + files);

let content = "";

for(let i = 0; i < filesarray.length; i++){
    content += fs.readFileSync(filesarray[i]) + "\n";
}

console.log(content);

let contentarray = content.split("\n");

if(optionsarray.includes("-s"){

}

