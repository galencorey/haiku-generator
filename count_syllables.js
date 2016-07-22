//This function takes an array where the first element is the word and the 
//Remaining elements  describe the word following the CMU pronouncing dictionary
//format. It returns the number of syllables.  
function countSyllables(arr){
	var word = arr.shift(); 
	var syllables = 0; 
	arr.forEach(function(elem){
		if (/\d/.test(elem)){
			syllables ++; 
		}
	}); 
	return syllables; 
}

module.exports = {
  countSyllables: countSyllables,
};