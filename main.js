const generation = document.querySelector('.generation');
const linkGo = document.querySelector('.link-to');
const label1 = document.querySelector('.labelclass');
// const linkggo = document.querySelector('.link-go');

// label1.textContent = <a target="_blank" class="main-container__button link-to disabled" href="https://www.google.com.ua/">asdfasdfasdfasdfsadf</a>;

// function changeLink(text, href) {
//      linkGo.classList.add('hidden');
   
//      setTimeout(() => {
//        linkGo.textContent = 'rfrfrfrf'
//        linkGo.href = 'https://www.google.com.ua/?hl=ua';
//        linkGo.classList.remove('hidden');
//      }, 300); // відповідає тривалості CSS transition
//    }

// generation.addEventListener('click', ()=>{
//      linkggo.textContent = 'rfrfrfrf'
//      linkggo.href = 'https://www.google.com.ua/?hl=ua';
// });
// generation.addEventListener('click', (e)=>{
//      e.preventDefault();
//      changeLink()
// });


// Масив укр букв і скільки вони мають дыапазонів (Аа - Ад, Ае-Аз) 
const objectWords = {
     1:102,
     2:106,
     3:139,
     4:103,
     5:19,
     6:109,
     7:69,
     8:21,
     9:38,
     10:130,
     11: 'NuN',
     12:59,
     13:9,
     14:15,
     15:123,
     16:75,
     17:105,
     18:128,
     19:113,
     20:220,
     21:111,
     22:145,
     23:104,
     24:75,
     25:75,
     26:63,
     27:49,
     28:54,
     29:66,
     30:26,
     31:'NuN',
     32:17,
     33:32,
}


// Функція рандомних цифор від 1 до n, для масивів
function random(n){
     return parseInt(Math.random()*(n-1)+1)
}

// функція відключення посилань
function disabled(a){
     if(a == 0){    
     generation.classList.add('disabled');
     linkGo.classList.remove('disabled');
     } else{    
     generation.classList.remove('disabled');
     }
}

// Функція підстановки нового посилання в href
function addAtribute(el){
     linkGo.setAttribute('href', el);
}

let linkContent;
let linkHref;

let firstNumb;
let secondNumb;
function mainFunc(linkContent,linkHref){  
     linkGo.classList.add('hidden');

     // setTimeout(() => {
          generation.classList.add('new');
     disabled(0);

     // створюємо перші 2 цифри для посилання
     do{
          firstNumb = random(34);
          console.log('adgfdsgsfdgffff');
     } while(firstNumb === 11 || firstNumb === 31)
     
     secondNumb = random(objectWords[firstNumb]+1);

     // let url = `https://slovnyk.ua/index.php?s1=${firstNumb}&s2=${secondNumb}`
     const numberPage = `s1=${firstNumb}&s2=${secondNumb}`
     // const numberPage = 's1=1&s2=34'
     let url = `https://ukr-proxy.onrender.com/proxy?word=${encodeURIComponent(numberPage)}`
     console.log(url);
     


     // створюємо асинхронну функцію, яка робить запрос на сервер та чекає відповідь
     async function fetchAsyncTodos(){
          console.log('fetch todo started');
     try {
          // запит до сервера, отримання головної інформації
          // const response = await fetch('https://ukr-proxy.onrender.com/proxy?word=s1%3D16%26s2%3D34');
          const response = await fetch(url);
          console.log('8');
          
          // отримання тіла елемента
          const arrWords = await response.json();
          
          console.log(arrWords.length + '  length'); 
          console.log(arrWords.length + 1 + '  length + 1');
          
          // третє рандомне число зі списку слів
          const thirdNumb = random(arrWords.length + 1);
          // остаточне слово, яке шукається в масиві по останньому числу
          // console.log(listTag[0]);
          
          linkContent = arrWords[thirdNumb-1]
          console.log(linkContent);
          
          url = `https://slovnyk.ua/index.php?swrd=${linkContent}`
          console.log(url);
          
     } catch (e){
          console.error(e)}
     }
     
fetchAsyncTodos(url).then(()=>{linkHref = url;
          linkGo.textContent = `${linkContent}`
          linkGo.href = `${linkHref}`
     linkGo.classList.remove('hidden');})
          // linkGo.textContent = `${linkContent}`
          // console.log('eeeeeeeee');
          
          // console.log(linkHref);
          
          // linkGo.textContent = 'dasfdfasdds'
          // linkGo.href = `${linkHref}`
          // linkGo.classList.remove('hidden');
          // }, 600); 
          // відповідає тривалості CSS transition
     // }
     // animation()
     
}



// Головний виклик всії функцій - натиск на Генерувати
generation.addEventListener('click', (e) =>{
     e.preventDefault();
     mainFunc();
} );
// натиск на Перейти
linkGo.addEventListener('click', ()=>{disabled(1)})
linkGo.addEventListener('mousedown', ()=>{disabled(1)})