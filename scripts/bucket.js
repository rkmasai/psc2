// On clicking remove button the item should be removed from DOM as well as localstorage.

var coffee= JSON.parse(localStorage.getItem("coffee"))

console.log(coffee)

display (coffee)

function display(coffee)
{

    
var menu= document.getElementById("bucket")
 menu.innerHTML=null

    
 
     coffee.forEach(function(ele,index) {
 
         var box= document.createElement("div")
 
         var title= document.createElement("h1")
         title.innerText=ele.title
 
         var image= document.createElement("img")
         image.src=ele.image
 
         var price= document.createElement("p")
         price.innerText=ele.price
 
         var btn= document.createElement("button")
         btn.innerText="proceed"
         btn.addEventListener("click", function(){
             addbucket(ele,index)
         })
 
 
         box.append(title,image,price,btn)
 
         menu.append(box)
         
         
     });
    }
    
    function addbucket(ele,index){

        coffee.splice(index,1)
        localStorage.setItem("coffee",JSON.stringify(coffee))

        alert("your order is accepted")
        
     let id1 =    setInterval(function()
        {
             if (id1)
             {
                 clearInterval(id)
             }
            

            alert("your order is being prepared")
        },3000)

    let id2=    setInterval(function()
        {
            if (id2)
            {
                clearInterval(id)
            }
            alert("your order is packed")
        },8000)

     let id3=    setInterval(function()
        {
            if (id3)
            {
                clearInterval(id)
            }
            alert("your order is out for delivery")
            
        },10000)

       setInterval(function()
        {
            alert("Order delivered")
           
            window.location.reload()
        },12000)

       
       
    }
    
    