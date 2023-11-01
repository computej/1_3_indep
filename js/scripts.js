// Business

function beepBoop(number) {
  if(number === 0) {
    return [ 0 ];
  }
    let outArray = new Array();
    for(i = 0; i <= number; i++){
      outArray.push(i);
    }
  return outArray;
}