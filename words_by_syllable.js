//this module takes a parsed 2d dictionary array and returns 
//an object where each number of syllables is mapped to an array of words 
var dictArray = require('./dictionary'); 
var countSyllables = require('./count_syllables'); 

var wordsBySyllable = {};  
var wordArray, word, syllables; 

for(var i=0; i<dictArray.dictArray.length; i++){

	wordArray = dictArray.dictArray[i]; 
	word = wordArray[0]; 
	syllables = countSyllables.countSyllables(wordArray).toString(); 

	if (!/[\W\d]/.test(word)){
		if(wordsBySyllable[syllables] === undefined ){
			wordsBySyllable[syllables] = [];
		} 
		wordsBySyllable[syllables].push(word); 
	}

}

module.exports = {
  wordsBySyllable: wordsBySyllable,
};