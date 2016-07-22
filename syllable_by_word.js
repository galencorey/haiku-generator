var dictionary = require('./dictionary'); 
var countSyllables = require('./count_syllables'); 

var syllablesByWord = {};  
var wordArray, word, syllables; 

for(var i=0; i<dictionary.dictArray.length; i++){

	wordArray = dictionary.dictArray[i]; 
	word = wordArray[0]; 
	syllables = countSyllables.countSyllables(wordArray); 

	if (!/[\W\d]/.test(word)){
		if(syllablesByWord[word] === undefined ){
			syllablesByWord[word] = syllables; 
		}
	}
}

module.exports = {
  syllablesByWord: syllablesByWord,
};