// Business

function beepBoop(number) {
  if(number === 0) {
    return [ 0 ];
  }
  let outArray = new Array();
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

function showOutput(number) {
  let beepArray = beepBoop(number);
  if (beepArray) {
    debugger;
    let outputBox = document.querySelector("#output-box");
    let ul = document.createElement("ul")
    beepArray.forEach(function(element, index) {
      let listItem = document.createElement("li");
      listItem.textContent = beepArray[index].toString();
      ul.append(listItem);
    });
    outputBox.append(ul);
  }
}