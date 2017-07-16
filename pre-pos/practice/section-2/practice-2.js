'use strict';
var collection = [
  'a', 'a', 'a',
  'e', 'e', 'e', 'e', 'e', 'e', 'e',
  'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
  't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
  'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
  'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
  'g', 'g', 'g', 'g', 'g', 'g', 'g',
  'b', 'b', 'b', 'b', 'b', 'b',
  'd-5'
];

function countSameWithoutRealCount(collection) {
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

// console.log(countSameWithoutRealCount(collection))

function countSameElements(collection){
  var theCountOfSame=countSameWithoutRealCount(collection);
  for (var i=0;i<theCountOfSame.length;i++){
    if (theCountOfSame[i].key.indexOf('-')===-1){
      continue;
    }else {
      var count = parseInt(theCountOfSame[i].key.slice(2));
      var key = theCountOfSame[i].key.slice(0,1);
      theCountOfSame[i].count=count;
      theCountOfSame[i].key=key;
    }
  }
  return theCountOfSame;
}
console.log(countSameElements(collection))
