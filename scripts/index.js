// Add the coffee to local storage with key "coffee"

 let url= "https://masai-mock-api.herokuapp.com/coffee/menu"
 var count=0;
 var arr= JSON.parse(localStorage.getItem("coffee"))||[];

 async function getdata()
 {
 try{
     let res= await fetch(url)
      let data= await res.json()

    //   console.log(data.menu.data)

      display(data.menu.data)
 }
 catch(err)
 {
     console.log(err)
 }
 }

 function display(data)
 {
     console.log(data)

     var menu= document.getElementById("menu")
    menu.innerHTML=null

    data.forEach(function(ele,index) {

        var box= document.createElement("div")

        var title= document.createElement("h1")
        title.innerText=ele.title

        var image= document.createElement("img")
        image.src=ele.image

        var price= document.createElement("p")
        price.innerText=ele.price

        var btn= document.createElement("button")
        btn.innerText="Add to Cart"
        btn.addEventListener("click", function(){
            addbucket(ele,index)
        })


        box.append(title,image,price,btn)

        menu.append(box)
        
    });

 }

 function addbucket(ele,index)
 {
     arr.push(ele)
    count++;
    console.log(count)

    alert("product is add to cart")
    
    var coffee_count= document.getElementById("coffee_count")
    coffee_count.innerText=count

    localStorage.setItem("coffee",JSON.stringify(arr))
 }
    
 function bucketitem()
 {
    window.location.href="bucket.html"   
 }
