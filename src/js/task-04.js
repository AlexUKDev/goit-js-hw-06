

const elRef = document.querySelector('#counter');
const decrementBtnRef = elRef.querySelector('button[data-action="decrement"]')
const incrementBtnRef = elRef.querySelector('button[data-action="increment"]')
const valueRef = elRef.querySelector('#value')

// console.log(elRef);


decrementBtnRef.textContent = "Decrease";
incrementBtnRef.textContent = 'Increase';

decrementBtnRef.setAttribute("style", "font-size: 25px; padding: 10px; align-items: center;");
incrementBtnRef.textContent = 'Increase';
incrementBtnRef.setAttribute("style", "font-size: 25px; padding: 10px;");
valueRef.setAttribute("style", "font-size: 50px; margin: 10px; ");

// console.log(decrementBtnRef);
// console.log(incrementBtnRef);
// console.log(valueRef);

// console.dir(valueRef);

let counterValue = 0;

// decrementBtnRef.addEventListener('click', function () {
//   // console.log("CLIC on decrement");
//   counterValue -= 1;
//   valueRef.textContent = counterValue;
// });

// incrementBtnRef.addEventListener('click', function () {
//   // console.log("CLIC on increment");
//   counterValue += 1;
//   valueRef.textContent = counterValue;
// });

function onDecrementBtnClick() {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

const onIncrementBtnClick = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};


decrementBtnRef.addEventListener('click', onDecrementBtnClick);
incrementBtnRef.addEventListener('click', onIncrementBtnClick);



// const onIncrementBtnClick = function () {
//   counterValue += 1;
//   valueRef.textContent = counterValue;
// };

// const onDecrementBtnClick = () => {
//   counterValue -= 1;
//   valueRef.textContent = counterValue;
// };