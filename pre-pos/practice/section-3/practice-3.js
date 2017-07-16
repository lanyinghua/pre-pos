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
  'd', 'd', 'd', 'd', 'd'
];


var objectB = {value: ['a', 'd', 'e', 'f']};

function countSameElements(collectionA) {
  var theTotalAmountOfSameFacter=[];
  var theAmountOfSameFacter={};
  theAmountOfSameFacter.key='';
  // theAmountOfSameFacter.count=0;
  for (var i=0;i<collectionA.length;i++){
    if (theAmountOfSameFacter.key!=collectionA[i]){
      var theAmountOfSameFacter ={};
      theAmountOfSameFacter.key=collectionA[i];
      theAmountOfSameFacter.count=1;
      theTotalAmountOfSameFacter.push(theAmountOfSameFacter)
    }else if (theAmountOfSameFacter.key==collectionA[i]){
      theAmountOfSameFacter.count++;
    }
  }
  return theTotalAmountOfSameFacter;
}
// console.log(countSameElements(collectionA))
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
