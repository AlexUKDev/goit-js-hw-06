
const inputRef = document.querySelector("#validation-input");
console.log(inputRef);

console.log(inputRef.dataset.length)
// console.log(inputRef.textContent.length)

function onInputChange() {

  if (+inputRef.dataset.length !== +inputRef.value.length) {
    // console.log("Бордер должен быть красным (invalid)")
    
      inputRef.classList.value = "invalid";

  } else {
    // console.log("Бордер должен быть зеленым (valid)", inputRef.value.length);
    
      inputRef.classList.value = "valid";
    }

  
};

inputRef.addEventListener("blur", onInputChange)