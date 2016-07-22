//This module reads the CMU dictionary and creates a 2d array 
//where each element is a word followed by pronounciation info 
var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){    
   var lines = data.toString().split("\n");  
   var newArr = []; 
   lines.forEach(function(line){    
    newArr.push(line.split(" "));    
  });   
   return newArr; 
}

var dictArray = formatData(cmudictFile);

module.exports = {
  dictArray: dictArray,
};