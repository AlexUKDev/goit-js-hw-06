function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// console.log(getRandomHexColor())

const changeColorBtnRef = document.querySelector("button.change-color ")
console.log(changeColorBtnRef)

const spanRef = document.querySelector("span.color")


function onChangeColorBtnClick() {
  
  let newBodyBgColor = getRandomHexColor();

  document.body.style.backgroundColor = newBodyBgColor;

  spanRef.textContent = newBodyBgColor;
}

changeColorBtnRef.addEventListener('click', onChangeColorBtnClick);