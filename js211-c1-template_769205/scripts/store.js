let container=document.getElementById("container");
let productdata=JSON.parse(localStorage.getItem("mobile_data"))||[];;
appendid(productdata);
function appendid(data){
  container.innerHTML=null;
  
  data.forEach((el,index)=>{
    let img=document.createElement("img")
    img.src=el.image;

    let brandname=document.createElement("p")
    brandname.innerText=el.brand;

    let product=document.createElement("p")
    product.innerText=el.productname;

    let price=document.createElement("p");
    price.innerText=el.price;

    let btn=document.createElement("button")
    btn.innerText="Remove";
    btn.addEventListener("click",function(){
      removeitems(index)
    })

    let div=document.createElement("div");
    div.append(img,brandname,product,price,btn);

    container.append(div);
  })
}



function removeitems(index){
   productdata=JSON.parse(localStorage.getItem("mobile_data"))||[];

  productdata.splice(index,1);

  localStorage.setItem("mobile_data",JSON.stringify(productdata));

  appendid();
}

function SortLh(){
let itemsort=productdata.sort((a,b)=>{
  return a.price-b.price;
})
localStorage.setItem("mobile_data",JSON.stringify(productdata));

appendid(itemsort);

}

function SortHl(){
  let itemsort=productdata.sort((a,b)=>{
  return b.price-a.price;
})
localStorage.setItem("mobile_data",JSON.stringify(productdata));
  appendid(itemsort);
}

function filterproduct(){
  let query=document.getElementById("opt").value;
  console.log(query)
   data=productdata.filter((el)=>{
    return el.brand===query;
    
  })
  console.log(data)
  appendid(data);
 
}
