const section = document.querySelector('section')
const API_URL = 'https://jsonplaceholder.typicode.com/users'

function promesa(){
  return new Promise((resolve,reject)=>{
   !API_URL == 0 
   ?resolve(fetch(API_URL))
   :reject(new Error('problema de conexión'))
})
}
promesa()
.then(res=>res.json())
.then(data=>{
    console.log(data)
    data.map(personaje =>{
      const ul = document.createElement('ul')
      ul.innerHTML = `<span>${personaje.id}. ${personaje.name}</span>`
      section.append(ul)
    
    
    })   

})
.catch(error=>{
    console.error(error.message)
})
