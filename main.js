const generation = document.querySelector('.generation');
const linkGo = document.querySelector('.link-to');

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
     11: 'return',
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
     31:'return',
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

function mainFunc(a,b){  
     generation.classList.add('new');
     disabled(0);
      // створюємо перші 2 цифри для посилання
     const firstNumb = random(34);
     const secondNumb = random(objectWords[firstNumb]+1);

     // перевірка на пустоту значення об'єкта
     if(isNaN(secondNumb)){
          return
     }

     let url = `https://slovnyk.ua/index.php?s1=${firstNumb}&s2=${secondNumb}`

     // створюємо асинхронну функцію, яка робить запрос на сервер та чекає відповідь
     async function fetchAsyncTodos(){
          console.log('fetch todo started');
     try {
          // запит до сервера, отримання головної інформації
          const response = await fetch(url)
          // отримання тіла елемента
          const text = await response.text();
          // парсинг дом, для того щоб знайти потрібні класи
          const parser = new DOMParser();
          const doc = parser.parseFromString(text, 'text/html');
          const listTag = doc.querySelectorAll('.cont_p');
          // третє рандомне число зі списку слів
          const thirdNumb = random(listTag.length + 1);
          // остаточне слово, яке шукається в масиві по останньому числу
          const finishWord = listTag[thirdNumb+1].textContent;
          
          return url = `https://slovnyk.ua/index.php?swrd=${finishWord}`
     } catch (e){
          console.error(e)}
     }
     
fetchAsyncTodos(url).then(()=>{addAtribute(url)})
}



// Головний виклик всії функцій - натиск на Генерувати
generation.addEventListener('click', mainFunc);
// натиск на Перейти
linkGo.addEventListener('click', ()=>{disabled(1)})
linkGo.addEventListener('mousedown', ()=>{disabled(1)})