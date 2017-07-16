'use strict';

var collectionA = [
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


var objectB = {value: ['a', 'd', 'e', 'f']};

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
  var theCountOfSame=countSameWithoutRealCount(collectionA);
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
var collectionA=countSameElements(collectionA);
console.log (collectionA);//finished array collectionA

function moreThan3minus1(count) {
  if (count >=3){
    count=count-parseInt(count/3);
  }
  return  count ;
}
var collectionA=countSameElements(collectionA);

function createUpdatedCollection(collectionA, objectB) {
  var arrayB=objectB.value;
  for (var i=0;i<collectionA.length;i++){
    for (var j =0;j<arrayB.length;j++) {
      if (collectionA[i].key==arrayB[j]){
        collectionA[i].count=moreThan3minus1(collectionA[i].count);
      }else {continue}
    }
  }
  return collectionA;
}

console.log (createUpdatedCollection(collectionA,objectB))
