const generation = document.querySelector('.generation');

const linkContent = 's1=1&s2=34'
const url = `https://ukr-proxy.onrender.com/proxy?word=${encodeURIComponent(linkContent)}`
// async function run(){
//      console.log('fetch todo started');
// try {   
//      const response = await fetch(`https://ukr-proxy.onrender.com/proxy/${word}`)
     
// }catch (e){
//      console.error(e)}
// }

async function main(){
     try{
          const response = await fetch(url)
          const text = await response.json()
          
          const newtext = [...text]
          // console.log(newtext[1]);
          console.log(newtext);
          
          
          
     } catch(e){
          console.error(e)
     }
}

// generation.addEventListener('click', ()=>{fetch(url).then(res=>res.json()).then(data=>{console.log(data);})})

generation.addEventListener('click', main)
