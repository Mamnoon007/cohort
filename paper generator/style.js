var lolu= document.querySelector("button")
var main= document.querySelector("body")
lolu.addEventListener("click", function(){
    
    var loda= document.createElement("div")

    loda.style.width="70px"
    loda.style.height="70px"
    loda.style.backgroundColor="red"
    loda.style.position="absolute"
    
    var x= Math.random()*100
    var y= Math.random()*100
    var r= Math.random()*360

   var c1=  Math.floor(Math.random()*256)
   var c2=  Math.floor(Math.random()*256)
   var c3=  Math.floor(Math.random()*256)

   loda.style.backgroundColor=`rgb(${c1}, ${c2}, ${c3})`

    loda.style.left= x+"%"
    loda.style.top=  y+"%"
    loda.style.rotate= r+"deg"


    
    

    main.appendChild(loda)
    

})
