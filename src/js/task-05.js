

const inputRef = document.querySelector("input#name-input");
// console.log(inputRef)

const spanRef = document.querySelector("span#name-output");
// console.log(spanRef)


inputRef.addEventListener("input", () => {
  // console.log(inputRef.value)
  // console.log(spanRef.textContent)
  if (inputRef.value === "") {
    spanRef.textContent = "Anonymous"
  } else {
    spanRef.textContent = inputRef.value;
  }
  
})