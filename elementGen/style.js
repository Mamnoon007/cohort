var lol= document.querySelector("button")
var mai= document.querySelector("body")
var arr=['hello','u r noob','CHOR DE BTECH','NEHI HOGA TERESE DALLE','ABHI BHI TiME HAI CHOORDE','DUNIYA GUU HAI ','TU US DUNIYA KA KEEDA','NEHI HOGA TERESE' ]
   
    lol.addEventListener("click", function(){
     var h1= document.createElement('h1')
        var a= Math.floor(Math.random()*arr.length)
        var x= Math.floor(Math.random()*window.innerWidth)
        var y= Math.floor(Math.random()*window.innerHeight)
        var z= Math.floor(Math.random()*360)
        h1.style.scale=z+'%'
        h1.style.left=x+'px'
        h1.style.top=y+'px'
        
        h1.innerHTML=arr[a]
        h1.style.color = '#ffffff'
        mai.appendChild(h1)
        h1.style.position='absolute'


    })