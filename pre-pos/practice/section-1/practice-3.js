'use strict';

function collectSameElements(collectionA, collectionB) {
  var result=[];
  var arrayB=collectionB.value;
  for (var i=0;i<collectionA.length;i++){

    for (var j=0;j<arrayB.length;j++){
      if (collectionA[i]===arrayB[j]){
        result.push(arrayB[j]);
        break;
      }else{continue;}
    }
  }
  return result;
}
