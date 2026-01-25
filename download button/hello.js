var btn=document.querySelector("button")
var grow=0
var h2=document.querySelector(".button h2")
var inner=document.querySelector(".inner")



btn.addEventListener("click",function(){

    btn.style.pointerEvents="none"
    var num =  50 + Math.floor(Math.random()*50)

    var int= setInterval(function(){
    grow++
     h2.innerText=grow+"%"
     inner.style.width=grow+"%"
     },num)

   setTimeout(function(){
      clearInterval(int)
      btn.innerText="Downloaded"
      btn.style.opacity=0.5
      
   console.log('DOWNLOADED IN '+ num/10 + ' SECONDS') 
      },num*100)

    
})