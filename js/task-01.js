




// const list = document.querySelector('#categories');
// [...list.children].forEach(item => {
//     const category = (item.firstElementChild);
//     const elements = (item.lastElementChild);

//     console.log(category);
//     console.log(elements);
// }

// );

const numberCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberCategories.length}`);

const categoryEl = numberCategories.forEach(element =>
  console.log(
    `Category: ${element.firstElementChild.textContent}\nElements: ${
      element.querySelectorAll('li').length
    }`,
  ),
);