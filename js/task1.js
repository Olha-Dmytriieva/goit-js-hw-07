const allItems = document.querySelectorAll('.item')
console.log(`В списке ${allItems.length} категории.`);  



// const allCategories = allItems.forEach(value => console.log(`Категория: ${value.querySelector('h2').textContent}`,
// `Количество: ${value.querySelectorAll('li').length}`))


const allCategories = allItems.forEach(value => console.log(`Категория:${value.firstElementChild.textContent}`,
 `Количество: ${value.lastElementChild.children.length}`))


// Посчитает и выведет в консоль количество категорий в ul#categories,
//  то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет 
// и выведет в консоль текст заголовка элемента (тега h2) и количество 
// элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

 