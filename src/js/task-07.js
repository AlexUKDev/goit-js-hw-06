

const rangeInputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("span#text");

// console.log(rangeInputRef)
// console.log(spanRef.style.fontSize)
// console.dir(spanRef)

function onRangeInputChange() {
  // console.log(rangeInputRef.value)
  let rangeValue = rangeInputRef.value;

  spanRef.style.fontSize = `${rangeValue}px`;

};

rangeInputRef.addEventListener("input", onRangeInputChange);
