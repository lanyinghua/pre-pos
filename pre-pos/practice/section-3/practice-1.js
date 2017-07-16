'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var arrayB=objectB.value;
  for (var i=0;i<collectionA.length;i++){
    for (var j =0;j<arrayB.length;j++) {
      if (collectionA[i].key==arrayB[j]){
        collectionA[i].count-=1
      }else {continue}
    }
  }
  return collectionA;
}

// var collectionA = [
//   {key: 'a', count: 2},
//   {key: 'e', count: 2},
//   {key: 'h', count: 2},
//   {key: 't', count: 2},
//   {key: 'f', count: 2},
//   {key: 'c', count: 2},
//   {key: 'g', count: 2},
//   {key: 'b', count: 2},
//   {key: 'd', count: 2}
// ];
//
// var objectB = {value: ['a', 'd', 'e', 'f']};
// console.log(createUpdatedCollection(collectionA,objectB))
