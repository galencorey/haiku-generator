//This module searches for naturally -occuring haikus in a text 
var fs = require("fs");
var find = require("./find_text_patterns.js"); 
//var textFile = readTextFile('./thesis.txt');
var textFile = readTextFile('./the-importance-of-being-earnest.txt');
var syllableReference = require("./syllable_by_word").syllablesByWord; 

function readTextFile(file){
  return fs.readFileSync(file).toString();
}

// remove punctuation and extra spaces from text file 
textFile = textFile.replace(/[^a-z0-9\s]/ig, "");
textFile = textFile.replace(/\s+/g, " "); 
textFile = textFile.toUpperCase(); 

var textArray = textFile.split(/\s/);
var syllableArray = textArray.map(function(word){
	if (syllableReference[word]=== undefined){
		return null; 
	} else if (syllableReference[word]>9){
		return null; 
	}
	return syllableReference[word]; 
});  

//change first argument below to adjust starting index of haiku search 
var haikuLocation = find.findPattern(0, syllableArray); 
var haiku = [];

haikuLocation.forEach(function(lineInfo){
	var line = textArray.slice(lineInfo[0], lineInfo[0]+lineInfo[1]).join(" "); 
	haiku.push(line); 
}); 

console.log(haiku.join("\n")); 
console.log ( "End index: " + haikuLocation[2][0]+haikuLocation[2][1]); 






