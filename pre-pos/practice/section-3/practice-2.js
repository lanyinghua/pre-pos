'use strict';

function moreThan3minus1(count) {
  if (count >=3){
    count=count-parseInt(count/3);
  }
  return  count ;
}

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

// console.log (createUpdatedCollection(collectionA,objectB))
