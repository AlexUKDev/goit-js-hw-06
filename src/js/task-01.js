

const ulRef = document.querySelector("#categories");
// console.log(ulRef);

console.log("Number of categories:", ulRef.children.length);


const liRef = ulRef.querySelectorAll(".item");
// console.log(liRef);

liRef.forEach((el) => {
  const text = el.querySelector('h2');
  const elItems = el.querySelectorAll('li');
  
  console.log('Category:', text.textContent);
  console.log('Elements:', elItems.length);

});


// let result = ulRef.parentNode;
// console.log('parentNode', result)

// result = ulRef.childNodes;
// console.log('childNodes:', result)



// result = ulRef.children;
// console.log('children', result)

// result = ulRef.firstChild;
// console.log('firstChild', result)

// result = ulRef.firstElementChild;
// console.log('firstElementChild', result)

// result = ulRef.lastChild;
// console.log('lastChild', result)

// result = ulRef.lastElementChild;
// console.log('lastElementChild', result)

// result = ulRef.previousSibling;
// console.log('previousSibling', result)

// result = ulRef.previousElementSibling;
// console.log('previousElementSibling', result)

// result = ulRef.nextSibling;
// console.log('nextSibling', result)

// result = ulRef.nextElementSibling;
// console.log('nextElementSibling', result)




// elem.parentNode - выберет родителя elem.
// elem.childNodes - псевдомассив, хранит все дочерние элементы, включая текстовые.
// elem.children - псевдомассив, хранит только дочерние узлы-элементы, то есть соответствующие тегам.
// elem.firstChild - выберет первый дочерний элемент внутри elem, включая текстовые узлы.
// elem.firstElementChild - выберет первый дочерний узел-элемент внутри elem.
// elem.lastChild - выберет последний дочерний элемент внутри elem, включая текстовые узлы.
// elem.lastElementChild - выберет последний дочерний узел-элемент внутри elem.
// elem.previousSibling - выберет элемент «слева» от elem (его предыдущего соседа).
// elem.previousElementSibling - выберет узел-элемент «слева» от elem (его предыдущего соседа).
// elem.nextSibling - выберет элемент «справа» от elem (его следующего соседа)
// elem.nextElementSibling - выберет узел-элемент «справа» от elem (его следующего соседа).





// const ulItemsEl = document.querySelectorAll('.item')
// console.dir(ulItemsEl)
// console.log("Number of categories:",ulItemsEl.length)


