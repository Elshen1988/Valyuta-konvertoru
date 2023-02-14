let r1=document.querySelector(".r1")
let rightp =document.querySelector(".rightp")
let leftpar =document.querySelector(".leftpar")
let lRUB=document.querySelector(".lRUB")
let lUSD=document.querySelector(".lUSD")
let lEUR=document.querySelector(".lEUR")
let lGBP=document.querySelector(".lGBP")
let rRUB=document.querySelector(".rRUB")
let rUSD=document.querySelector(".rUSD")
let rEUR=document.querySelector(".rEUR")
let rGBP=document.querySelector(".rGBP")
let leftInput=document.querySelector(".leftInput")
let rightInput=document.querySelector(".rightInput")

let topBackgraund=document.querySelectorAll(".left")
let topBackgraund2=document.querySelectorAll(".right")

value1=lRUB.textContent
value2=rUSD.textContent
lRUB.style.backgroundColor = 'blue';
rUSD.style.backgroundColor = 'blue';
leftInput.value=0
rightInput.innerHTML=0
function topBackgraundf(){
  topBackgraund.forEach((b)=>{
    b.style.backgroundColor = 'white'
  })
}
function topBackgraundf2(){
  topBackgraund2.forEach((b)=>{
    b.style.backgroundColor = 'white'
  })
}

fetch(`https://api.exchangerate.host/latest?base=${value1}&symbols=${value2}`)
  .then((response)=>{
    return response.json()
  })
.then((obj)=>{
    rightp.innerHTML=`1 ${value1} = ${obj.rates.USD} ${value2}`
    leftpar.innerHTML=`1 ${value1} = ${obj.rates.USD} ${value2}`

  })
  fetch(`https://api.exchangerate.host/latest?base=${value2}&symbols=${value1}`)
  .then((response)=>{
    return response.json()
  })
.then((obj)=>{
  
  })

lRUB.addEventListener("mousedown",()=>{
  topBackgraundf()
  lRUB.style.backgroundColor = 'blue';
  value1=lRUB.textContent
})
rRUB.addEventListener("click",()=>{
  topBackgraundf2()
  rRUB.style.backgroundColor = 'blue';
  value2=rRUB.textContent
 
  fetch(`https://api.exchangerate.host/latest?base=${value1}&symbols=${value2}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{
  rightInput.innerHTML=leftInput.value*obj.rates.RUB
  rightp.innerHTML=`1 ${value1} = ${obj.rates.RUB} ${value2}`
  leftpar.innerHTML=`1 ${value1} = ${obj.rates.RUB} ${value2}`
  
    })
})
lUSD.addEventListener("mousedown",()=>{
  topBackgraundf()
  lUSD.style.backgroundColor = 'blue';
  value1=lUSD.textContent
})
rUSD.addEventListener("click",()=>{
  topBackgraundf2()
  rUSD.style.backgroundColor = 'blue';
  value2=rUSD.textContent
 
  fetch(`https://api.exchangerate.host/latest?base=${value1}&symbols=${value2}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{
  rightInput.innerHTML=leftInput.value*obj.rates.USD
  rightp.innerHTML=`1 ${value1} = ${obj.rates.USD} ${value2}`
  leftpar.innerHTML=`1 ${value1} = ${obj.rates.USD} ${value2}`
    })
})
lEUR.addEventListener("mousedown",()=>{
  topBackgraundf()
  lEUR.style.backgroundColor = 'blue';
  value1=lEUR.textContent
})
rEUR.addEventListener("click",()=>{
  topBackgraundf2()
  rEUR.style.backgroundColor = 'blue';
  value2=rEUR.textContent
 
  fetch(`https://api.exchangerate.host/latest?base=${value1}&symbols=${value2}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{
  rightInput.innerHTML=leftInput.value*obj.rates.EUR
  rightp.innerHTML=`1 ${value1} = ${obj.rates.EUR} ${value2}`
  leftpar.innerHTML=`1 ${value1} = ${obj.rates.EUR} ${value2}`
    })
})
lGBP.addEventListener("mousedown",()=>{
  topBackgraundf()
  lGBP.style.backgroundColor = 'blue';
  value1=lGBP.textContent
})
rGBP.addEventListener("click",()=>{
  topBackgraundf2()
  rGBP.style.backgroundColor = 'blue';
  value2=rGBP.textContent
 
  fetch(`https://api.exchangerate.host/latest?base=${value1}&symbols=${value2}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{
  rightInput.innerHTML=leftInput.value*obj.rates.GBP
  rightp.innerHTML=`1 ${value1} = ${obj.rates.GBP} ${value2}`
  leftpar.innerHTML=`1 ${value1} = ${obj.rates.GBP} ${value2}`
    })
})
lRUB.addEventListener("mouseup",()=>{
  fetch(`https://api.exchangerate.host/latest?base=${value2}&symbols=${value1}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{
  leftpar.innerHTML=`1 ${value2} = ${obj.rates.RUB} ${value1}`
  rightp.innerHTML=`1 ${value2} = ${obj.rates.RUB} ${value1}`
    })
  
})
lUSD.addEventListener("mouseup",()=>{
  fetch(`https://api.exchangerate.host/latest?base=${value2}&symbols=${value1}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{
  rightp.innerHTML=`1 ${value2} = ${obj.rates.USD} ${value1}`
  leftpar.innerHTML=`1 ${value2} = ${obj.rates.USD} ${value1}`
    })
})
lEUR.addEventListener("mouseup",()=>{
  fetch(`https://api.exchangerate.host/latest?base=${value2}&symbols=${value1}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{
  rightp.innerHTML=`1 ${value2} = ${obj.rates.EUR} ${value1}`
  leftpar.innerHTML=`1 ${value2} = ${obj.rates.EUR} ${value1}`
    })
})
lGBP.addEventListener("mouseup",()=>{
  fetch(`https://api.exchangerate.host/latest?base=${value2}&symbols=${value1}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{
  rightp.innerHTML=`1 ${value2} = ${obj.rates.GBP} ${value1}`
  leftpar.innerHTML=`1 ${value2} = ${obj.rates.GBP} ${value1}`
    })
})



