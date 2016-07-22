var library = require('./words_by_syllable'); 

var wordsBySyllable = library.wordsBySyllable; 
var line = []; 
var haiku = [];  
var index, key; 

function createHaiku(structure){
	structure.forEach(function(lineStructure){
		lineStructure.forEach(function(wordLength){
			 key = wordLength.toString(); 
			 index = (Math.floor(Math.random()*wordsBySyllable[key].length)); 
			 line.push(wordsBySyllable[key][index]); 
			 //console.log(wordsBySyllable[key].length);
		}); 
		haiku.push(line.join(" ")); 
		line = []; 
	});
	return haiku.join("\n");
}

function randStructure(l1,l2,l3){
	var poem = []; 
	function randLine(limit){
		var line = [];
		var length = 0; 
			while (length<limit){
				var remaining = limit-length; 
				var num = (Math.ceil(Math.random()*remaining));
				line.push(num); 
				length+=num; 
			} 
		return line; 
	}
	poem.push(randLine(l1), randLine(l2), randLine(l3)); 
	return poem; 
}
// this prints a haiku with random structure with in the 5,7,5 
//syllable constraint. 
console.log("\n"+createHaiku(randStructure(5,7,5))+"\n"); 

//to customize syllables, uncomment below and change the array 
//console.log("\n"+createHaiku([[5],[7],[]5])+"\n"); 