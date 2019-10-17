console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne =  document.querySelector('#message1')
const messageTwo =  document.querySelector('#message2')

// messageOne.textContent= 'Hello World!'


 
weatherForm.addEventListener('submit',(e)=>{
e.preventDefault()
const location =searchElement.value

messageOne.textConten="Loading......"

fetch(`http://localhost:3000/weather?address=${location}`).then((response) =>{
    response.json().then((data)=>{
       if (data.error){
           messageOne.textContent=data.error
       } 
       else{
           messageOne.textContent= data.location
           messageTwo.textContent=data.forecast
       }
    })
})

})