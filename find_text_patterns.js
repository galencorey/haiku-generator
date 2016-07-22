// The main function in this module, findPattern, acccepts a starting index and a source 
// in the form of an array of syllables, and returns an array with information about 
// each of the three lines. [[starting index of Line 1, # of words in line 1],
// [starting index of Line 2, # of words in line 2], [starting index of Line 3, # of words in line 3]]; 

function findPattern(start, src){
	if (start === src.length){
		return "No matching patterns"; 
	}
	var l1, l2, l3; 
	l1 = matchLinePattern(src, start, 5); 
	if (matchLinePatternStrict(src, l1[0]+l1[1], 7)){
		l2 = matchLinePatternStrict(src, l1[0]+l1[1], 7)
		if (matchLinePatternStrict(src, l2[0]+l2[1], 5)){
			l3 = matchLinePatternStrict(src, l2[0]+l2[1], 5); 
			return [l1, l2, l3]; 
		}
	}
	return findPattern(start+1, src); 
}

function matchLinePattern(src, startIndex, numberOfSyllables){
	var syllableSum = 0; 
	var numberOfWords = 0; 
	
	for (var i = startIndex; i<src.length; i++){
		syllableSum += src[i]; 

		numberOfWords ++; 
		if (syllableSum === numberOfSyllables){
			return [startIndex, numberOfWords]; 
		} else if (syllableSum > numberOfSyllables) {
			return matchLinePattern(src, startIndex +1, numberOfSyllables||src[i]===null); 
		}
	}
	return "No matching patterns"; 
}

function matchLinePatternStrict(src, startIndex, numberOfSyllables){
	var syllableSum = 0; 
	var numberOfWords = 0; 
	for (var i = startIndex; i<src.length; i++){
		syllableSum += src[i]; 
		numberOfWords ++; 
		if (syllableSum === numberOfSyllables){
			return [startIndex, numberOfWords]; 
		} else if (syllableSum > numberOfSyllables||src[i]===null) {
			return false; 
		}
	}
}

module.exports = {
  findPattern: findPattern,
};