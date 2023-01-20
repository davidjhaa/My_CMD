// 1) node wcat.js filepath => displays the contents of a file in terminal
// 2) node wcat.js filepath1 filepath2 filepath3  => displays the content of all files in terminal in concatinated form in given order
// 3) node wcat.js -n file1 file 2 file3 OR node wcat.js -n file1 
//node wcat.js f1.txt
//node wcat.js f1.txt f2.txt f3.txt

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

// console.log("Files to be read are :-> \n" + files);

let content = "";

for(let i = 0; i < filesarray.length; i++){
    let contentfile = fs.readFileSync(filesarray[i]);
    content += contentfile + "\r\n";
}

// console.log(content);

let contentarray = content.split("\r\n");
// console.table(contentarray);


// -s is used here for deleting redundant line
let temparray = [];
if(optionsarray.includes("-s")){
    for(let i = 1; i < contentarray.length; i++){
        if(contentarray[i-1] == "" && contentarray[i] == ""){
            contentarray[i-1] = null;
        }
    }

    for(let j = 0; j < contentarray.length; j++){
        if(contentarray[j] != null){
            temparray.push(contentarray[j]);
        }
    }
    contentarray = temparray;
}

// console.table(contentarray);

// printing data of all files at once
for(let i = 0; i < contentarray.length; i++){
    // console.log(contentarray[i]);
}

let indexOfN = optionsarray.indexOf("-n");
let indexOfB = optionsarray.indexOf("-b");
let finalOption = "";

if(indexOfN != -1 && indexOfB != -1){
    if(indexOfN < indexOfB)
        finalOption = "-n";
    else
        finalOption = "-b";
}

else{
    if(indexOfN != -1)
        finalOption = "-n";
    else
        finalOption = "-b";
}

if(finalOption == "-n"){
    modifyContentByN();
}

if(finalOption == "-b"){
    modifyContentByB();
}


function modifyContentByN(){
    for(let i = 0; i < contentarray.length; i++){
        contentarray[i] = (i+1) + "> " + contentarray[i];
    }
}

function modifyContentByB(){
    count = 1;
    for(let i = 0; i < contentarray.length; i++){
        if(contentarray[i] != ""){
            contentarray[i] = count + "> " + contentarray[i];
            count++;
        }
    }
}

console.log(contentarray);


