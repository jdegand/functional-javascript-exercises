module.exports = function countWords(inputWords) {
    return inputWords.reduce((allWords, word)=> {
      if(word in allWords){
        allWords[word]++;
      }else {
        allWords[word] = 1;
      }
      return allWords
    }, {})
}
