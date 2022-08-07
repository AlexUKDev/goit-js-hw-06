function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const containerOfBoxesRef = document.querySelector("div#boxes");
// console.log("containerOfBoxesRef: ", containerOfBoxesRef)

const controlsRef = document.querySelector("div#controls");
// console.log("controlsRef: ",controlsRef)

const inputAmountRef = document.querySelector('input[type="number"]');
// console.log("inputAmountRef: ", inputAmountRef)
// console.dir(inputAmountRef.value)

const createBtnRef = document.querySelector('button[data-create]');
// console.log("createBtnRef: ", createBtnRef)

const destroyBtnRef = document.querySelector('button[data-destroy]');
// console.log("destroyBtnRef: ", destroyBtnRef)

let amount = 0;


function onInputAmountChange() {
  amount = inputAmountRef.value;
  return amount
  // console.log("after onInputAmountChange: ", amount)
}

inputAmountRef.addEventListener('change', onInputAmountChange)


const newCollectionOfEl = [];


function createBoxes(amount) {
  let boxSize = 30;
  
  for (let i = 0; i < amount; i += 1) {
    
    const boxEl = document.createElement("div");

    boxEl.style.width = `${boxSize}px`;
    boxEl.style.height = `${boxSize}px`;
    boxEl.classList = ".newBoxes";

    let newColor = getRandomHexColor();
    boxEl.style.backgroundColor = newColor;


    boxEl.textContent = i + 1;
    boxSize = boxSize + 10;

    newCollectionOfEl.push(boxEl)
    // console.log("boxEl: ", boxEl)

  }

};



function onCreateBtnClick() {
  createBoxes(amount);
  containerOfBoxesRef.append(...newCollectionOfEl);
}

createBtnRef.addEventListener('click', onCreateBtnClick);


function onDestroyBtnClick() {
  // containerOfBoxesRef.innerHTML("");
  console.log(containerOfBoxesRef)
  containerOfBoxesRef.textContent = '';

  inputAmountRef.value = '';
}

destroyBtnRef.addEventListener('click', onDestroyBtnClick);