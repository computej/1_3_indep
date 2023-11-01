// Business

function beepBoop(number) {
  if(number === 0) {
    return [ 0 ];
  }
  let outArray = new Array();
  debugger;
  for(i = 0; i <= number; i++){
    let j = i.toString();
    if(j.includes("3")) {
      j = "Won't you be my neighbor?";
    }
    else if(j.includes("2")) {
      j = "Boop!";
    }
    else if(j.includes("1")) {
      j = "Beep!";
    }
    outArray.push(parseInt(j) === i ? i : j);
  }
  return outArray;
}

// UI

