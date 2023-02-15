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
lRUB.style.backgroundColor = 'rgb(97, 148, 250)';
rUSD.style.backgroundColor = 'rgb(97, 148, 250)';
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
  leftpar.innerHTML=`1 ${value1} = ${obj.rates.USD} ${value2}`
    

  })
  fetch(`https://api.exchangerate.host/latest?base=${value2}&symbols=${value1}`)
  .then((response)=>{
    return response.json()
  })
.then((obj)=>{
  rightp.innerHTML=`1 ${value2} = ${obj.rates.RUB} ${value1}`
  })

lRUB.addEventListener("mousedown",()=>{
  topBackgraundf()
  lRUB.style.backgroundColor = 'rgb(97, 148, 250)';
  value1=lRUB.textContent
})
rRUB.addEventListener("click",()=>{
  topBackgraundf2()
  rRUB.style.backgroundColor = 'rgb(97, 148, 250)';
  value2=rRUB.textContent
 
  fetch(`https://api.exchangerate.host/latest?base=${value1}&symbols=${value2}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{
  rightInput.innerHTML=(leftInput.value*obj.rates[value2]).toFixed(2)
  leftpar.innerHTML=`1 ${value1} = ${obj.rates.RUB} ${value2}`
  
  
    })
    fetch(`https://api.exchangerate.host/latest?base=${value2}&symbols=${value1}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{
  rightp.innerHTML=`1 ${value2} = ${obj.rates[value1]} ${value1}`
  
    })
})
lUSD.addEventListener("mousedown",()=>{
  topBackgraundf()
  lUSD.style.backgroundColor = 'rgb(97, 148, 250)';
  value1=lUSD.textContent
})
rUSD.addEventListener("click",()=>{
  topBackgraundf2()
  rUSD.style.backgroundColor = 'rgb(97, 148, 250)';
  value2=rUSD.textContent
 
  fetch(`https://api.exchangerate.host/latest?base=${value1}&symbols=${value2}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{
  rightInput.innerHTML=(leftInput.value*obj.rates[value2]).toFixed(2)
  leftpar.innerHTML=`1 ${value1} = ${obj.rates.USD} ${value2}`
  
    })
    fetch(`https://api.exchangerate.host/latest?base=${value2}&symbols=${value1}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{
  rightp.innerHTML=`1 ${value2} = ${obj.rates[value1]} ${value1}`
  
    })
})
lEUR.addEventListener("mousedown",()=>{
  topBackgraundf()
  lEUR.style.backgroundColor = 'rgb(97, 148, 250)';
  value1=lEUR.textContent
})
rEUR.addEventListener("click",()=>{
  topBackgraundf2()
  rEUR.style.backgroundColor = 'rgb(97, 148, 250)';
  value2=rEUR.textContent
 
  fetch(`https://api.exchangerate.host/latest?base=${value1}&symbols=${value2}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{
  rightInput.innerHTML=(leftInput.value*obj.rates[value2]).toFixed(2)
  leftpar.innerHTML=`1 ${value1} = ${obj.rates.EUR} ${value2}`
  
    })
    fetch(`https://api.exchangerate.host/latest?base=${value2}&symbols=${value1}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{
  rightp.innerHTML=`1 ${value2} = ${obj.rates[value1]} ${value1}`
  
    })
})
lGBP.addEventListener("mousedown",()=>{
  topBackgraundf()
  lGBP.style.backgroundColor = 'rgb(97, 148, 250)';
  value1=lGBP.textContent
})
rGBP.addEventListener("click",()=>{
  topBackgraundf2()
  rGBP.style.backgroundColor = 'rgb(97, 148, 250)';
  value2=rGBP.textContent
 
  fetch(`https://api.exchangerate.host/latest?base=${value1}&symbols=${value2}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{
  rightInput.innerHTML=(leftInput.value*obj.rates[value2]).toFixed(2)
  leftpar.innerHTML=`1 ${value1} = ${obj.rates.GBP} ${value2}`

    })
    fetch(`https://api.exchangerate.host/latest?base=${value2}&symbols=${value1}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{
  rightp.innerHTML=`1 ${value2} = ${obj.rates[value1]} ${value1}`
  
    })
})
lRUB.addEventListener("mouseup",()=>{
  fetch(`https://api.exchangerate.host/latest?base=${value2}&symbols=${value1}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{
  rightp.innerHTML=`1 ${value2} = ${obj.rates.RUB} ${value1}`
  
    })
    fetch(`https://api.exchangerate.host/latest?base=${value1}&symbols=${value2}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{
  leftpar.innerHTML=`1 ${value1} = ${obj.rates[value2]} ${value2}`
  rightInput.innerHTML=(leftInput.value*obj.rates[value2]).toFixed(2)
    })
  
})
lUSD.addEventListener("mouseup",()=>{
  fetch(`https://api.exchangerate.host/latest?base=${value2}&symbols=${value1}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{

  rightp.innerHTML=`1 ${value2} = ${obj.rates.USD} ${value1}`
    })
    fetch(`https://api.exchangerate.host/latest?base=${value1}&symbols=${value2}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{
  leftpar.innerHTML=`1 ${value1} = ${obj.rates[value2]} ${value2}`
  rightInput.innerHTML=(leftInput.value*obj.rates[value2]).toFixed(2)
    })
})
lEUR.addEventListener("mouseup",()=>{
  fetch(`https://api.exchangerate.host/latest?base=${value2}&symbols=${value1}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{

  rightp.innerHTML=`1 ${value2} = ${obj.rates.EUR} ${value1}`
    })
    fetch(`https://api.exchangerate.host/latest?base=${value1}&symbols=${value2}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{
  leftpar.innerHTML=`1 ${value1} = ${obj.rates[value2]} ${value2}`
  rightInput.innerHTML=(leftInput.value*obj.rates[value2]).toFixed(2)
    })
})
lGBP.addEventListener("mouseup",()=>{
  fetch(`https://api.exchangerate.host/latest?base=${value2}&symbols=${value1}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{
 
  rightp.innerHTML=`1 ${value2} = ${obj.rates.GBP} ${value1}`
    })
    fetch(`https://api.exchangerate.host/latest?base=${value1}&symbols=${value2}`)
    .then((response)=>{
      return response.json()
    })
.then((obj)=>{
  leftpar.innerHTML=`1 ${value1} = ${obj.rates[value2]} ${value2}`
  rightInput.innerHTML=(leftInput.value*obj.rates[value2]).toFixed(2)
    })
})
var manubtn = document.getElementById("manubtn")
var sidenav = document.getElementById("sidenav")
var menu = document.getElementById("menu")

sidenav.style.right = "-250px"

manubtn.onclick = function () {
    if (sidenav.style.right == "-250px") {
        sidenav.style.right = "0";
        menu.src = "./img/close.png";
    }
    else {
        sidenav.style.right = "-250px";
        menu.src = "./img/222.png";
    }
}


