const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients')
// console.log(ulEl);

const arrOfEl = [];

ingredients.forEach((el) => {
  // console.log(el)

  const createEl = document.createElement('li');
  createEl.textContent = el;
  createEl.classList = 'item';
  arrOfEl.push(createEl);
  
});

// console.log(arrOfEl);

ulEl.append(...arrOfEl)









// const createEl = document.createElement('li')

// createEl.textContent = ingredients[0]
// console.log(createEl)




// ***********

// element.append(el1, el2, ...) - добавляет один или несколько элементов после всех детей элемента element.
// element.prepend(el1, el2, ...) - добавляет один или несколько элементов перед всеми детьми элемента element.
// element.after(el1, el2, ...) - добавляет один или несколько элементов после элемента element.
// element.before(el1, el2, ...) - добавляет один или несколько элементов перед элементом element.
