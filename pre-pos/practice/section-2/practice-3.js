'use strict';
var collection = [
  'a', 'a', 'a',
  'e', 'e', 'e', 'e', 'e', 'e', 'e',
  'h', 'h', 'h', 'h', 'h', 'h', 'h[3]', 'h', 'h',
  't', 't-2', 't', 't', 't', 't', 't', 't', 't[10]',
  'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
  'c:8',
  'g', 'g', 'g', 'g', 'g', 'g', 'g',
  'b', 'b', 'b', 'b', 'b', 'b',
  'd-5'
];
function splitTheSpecialFactors(collection){
  var theSplitResult=[];
  for (var i=0;i<collection.length;i++) {
    if (collection[i].indexOf('[') !== -1) {
      //elements in collection with  '[' or others
      var factor = {};
      var count = parseInt(collection[i].slice(2));
      var key = collection[i].slice(0, 1);
      factor.key = key;
      factor.count = count;
      theSplitResult.push(factor)
    } else if (collection[i].indexOf('-') !== -1) {
      var factor = {};
      var count = parseInt(collection[i].slice(2));
      var key = collection[i].slice(0, 1);
      factor.key = key;
      factor.count = count;
      theSplitResult.push(factor);
    } else if (collection[i].indexOf(':') !== -1) {
      var factor = {};
      var count = parseInt(collection[i].slice(2));
      var key = collection[i].slice(0, 1);
      factor.key = key;
      factor.count = count;
      theSplitResult.push(factor);
    } else {
      var factor = {};
      var count = 1;
      var key = collection[i];
      factor.key = key;
      factor.count = count;
      theSplitResult.push(factor);
    }
  }
  return theSplitResult;
}
// console.log(splitTheSpecialFactors(collection))


function countSameElements(collect) {
  var theTotalAmountOfSameFacter=[];
  var theAmountOfSameFacter={};
  var collection =splitTheSpecialFactors(collect);
  theAmountOfSameFacter.key='';
  // theAmountOfSameFacter.count=0;
  for (var i=0;i<collection.length;i++){
    if (theAmountOfSameFacter.name!=collection[i].key){
      var theAmountOfSameFacter ={};
      theAmountOfSameFacter.name=collection[i].key;
      theAmountOfSameFacter.summary=collection[i].count;
      theTotalAmountOfSameFacter.push(theAmountOfSameFacter)
    }else if (theAmountOfSameFacter.name==collection[i].key){
      theAmountOfSameFacter.summary+=collection[i].count;
    }
  }
  return theTotalAmountOfSameFacter;
}

console.log(countSameElements(collection))


