const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];






const insertToDoc = document.querySelector('#gallery')


// const htmlCode = function(arr){

//   for(const item of arr){

//   const liElement = document.createElement('li');
//   liElement.classList.add("items")
//   const imgEl = document.createElement('img')

//   liElement.appendChild(imgEl)
  
//   imgEl.src = item.url
//   imgEl.alt = item.alt
//   imgEl.width = 500;

//   insertToDoc.appendChild(liElement)
//   // console.log(liEl)
  
//   }
  

// }

// console.log(htmlCode (images))

// insertToDoc.classList.add("pictures");


const htmlCode = images.map(pic =>{

  const liElement = document.createElement('li');
  liElement.classList.add("items")
  const imgEl = document.createElement('img')

  liElement.appendChild(imgEl)
  // console.log(pic.url)

    imgEl.src = pic.url
    imgEl.alt = pic.alt
    imgEl.width = 500;

    // console.log(imgEl)

    insertToDoc.appendChild(liElement);


}
    
)

insertToDoc.classList.add("pictures");




  // Используй массив объектов images для создания тегов img вложенных в li. 
  // Для создания разметки используй шаблонные строки и insertAdjacentHTML().

  // Все элементы галереи должны добавляться в DOM за одну операцию вставки.
  // Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.