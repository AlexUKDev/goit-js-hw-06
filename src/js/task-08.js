
const formRef = document.querySelector("form.login-form");

// const emailInputRef = formRef.querySelector('.login-form input[type="email"]');
// console.log(emailInputRef)

// const passwordInputRef = formRef.querySelector('.login-form input[type="password"]');
// console.log(passwordInputRef)

const formBtnRef = formRef.querySelector('button[type="submit"]');

const user = { };

// console.log(formRef.elements)


// function onInputsChange() {
  
//   if (emailInputRef.value === "") {
//     // console.log(emailInputRef.value);
      
//     alert("Друже в тебе відсутні Email. Вкажи свій імейл!")
//   } else if (passwordInputRef.value === "") {
//     // console.log(passwordInputRef.value);
    
//     alert("Друже в тебе відсутній пароль. Не залишай пусті значення!")
//   } 

//   // console.log("onInputsCheck сработал сабмит")
// }


// function onBtnSubmit(evt) {
//   evt.preventDefault();
  
//   user.email = emailInputRef.value;
//   user.password = passwordInputRef.value;
  
//   console.log(user);

//   formRef.reset();

// }


// formRef.addEventListener('change', onInputsChange)

function onBtnSubmit(evt) {
  evt.preventDefault();

  // console.log("evt.currentTarget => ", evt.currentTarget)
  // console.log("evt.elements => ", evt.currentTarget.elements)

  // console.log("evt.currentTarget.email.value => ",evt.currentTarget.email.value)
  // console.log("evt.currentTarget.password.value =>", evt.currentTarget.password.value)
  
  if (evt.currentTarget.elements.email.value === "") {

    alert("Друже щось пішло не так. Не залишай пустим значення Email !");

  } else if (evt.currentTarget.elements.password.value === "") {

    alert("Друже щось пішло не так. Не залишай пустим значення з паролем !");

  } else {
   
    user.email = evt.currentTarget.email.value;
    user.password = evt.currentTarget.password.value;

    console.log(user);

    formRef.reset();
  }

  
}


formRef.addEventListener("submit", onBtnSubmit);