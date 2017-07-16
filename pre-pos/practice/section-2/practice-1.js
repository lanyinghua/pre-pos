'use strict';

function countSameElements(collection) {
  var theTotalAmountOfSameFacter=[];
  var theAmountOfSameFacter={};
  theAmountOfSameFacter.key='';
  // theAmountOfSameFacter.count=0;
  for (var i=0;i<collection.length;i++){
    if (theAmountOfSameFacter.key!=collection[i]){
      var theAmountOfSameFacter ={};
      theAmountOfSameFacter.key=collection[i];
      theAmountOfSameFacter.count=1;
      theTotalAmountOfSameFacter.push(theAmountOfSameFacter)
    }else if (theAmountOfSameFacter.key==collection[i]){
      theAmountOfSameFacter.count++;
    }
  }
  return theTotalAmountOfSameFacter;
}
