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
insertToDoc.classList.add(".pictures")

const htmlCode = function(arr){

  for(const item of arr){

  const liEl = document.createElement('li');
  const imgEl = document.createElement('img')

  liEl.appendChild(imgEl)
  
  imgEl.src = item.url
  imgEl.alt = item.alt
  imgEl.width = 500;

  insertToDoc.appendChild(liEl)
  // console.log(liEl)
  
  }
  

  

}

console.log(htmlCode (images))




  // Используй массив объектов images для создания тегов img вложенных в li. 
  // Для создания разметки используй шаблонные строки и insertAdjacentHTML().

  // Все элементы галереи должны добавляться в DOM за одну операцию вставки.
  // Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.