
// func to count letters and return obj
function countLetters(sentence) {
  var lettersCount = {} ;
  //  go through the char of the string
  for (var i = 0; i < sentence.length; i++) {
    var currentChar = sentence[i];
    if ( currentChar !== " "){
    if ( currentChar in lettersCount) {
      // push to the obj
      lettersCount[currentChar].push(i) ;

    }
  else { lettersCount[currentChar] = [i] ;}
  };
}
  return lettersCount;
}

var output = countLetters("lighthouse in the house");
console.log(output);

