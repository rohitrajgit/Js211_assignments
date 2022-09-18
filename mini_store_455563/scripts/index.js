

let url="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10";


let count=1;
getdata(count);
async function getdata(p){
  
  let res=await fetch(`${url}&page=${p}`);
  let data=await res.json();
  let new_data=data.data;
  appendData(new_data)
  console.log(data)
}


let appendData=(data)=>{

let container=document.getElementById("items")
container.innerHTML=null;


 data.forEach((el)=>{
  let poster=document.createElement("img")
  poster.src=el.image;
  let brand=document.createElement("p")
  brand.innerText=el.brand;
  let price=document.createElement("p")
  price.innerText=el.price;
  let btn=document.createElement("button")
  btn.innerText='cart'
  btn.addEventListener("click",function(){
    addtocart(el);
    
  })
 
  let div=document.createElement("div")
  div.append(poster,brand,price,btn)
  container.append(div);
  
})

}

let pervious=()=>{
  if(count==1){
    return;
  }
  count--;
  getdata(count);

}

let next=()=>{
  if(count==4){
    return;
  }
  count++;
  getdata(count);
}

function addtocart(data){

  let cart=JSON.parse(localStorage.getItem("cart"))||[];
  cart.push(data);
  localStorage.setItem("cart",JSON.stringify(cart));
  console.log(cart)
  document.getElementById("count").innerText=cart.length;

}
