let cart=JSON.parse(localStorage.getItem("cart"))||[];

function cartlength(){
  document.getElementById("count").innerText=cart.length;
  
}
cartlength();

let appendData=()=>{
  let container=document.getElementById("items")
  container.innerHTML=null;
  cart.forEach((el,index)=>{
  let poster=document.createElement("img")
  poster.src=el.image;
  let brand=document.createElement("p")
  brand.innerText=el.brand;
  let price=document.createElement("p")
  price.innerText=el.price;
  let btn=document.createElement("button")
  btn.innerText="Remove"
  btn.addEventListener("click",function(){
    removeitem(index)
  })
  let div=document.createElement("div")
  div.append(poster,brand,price,btn)
  container.append(div);

  })
}

appendData();


function removeitem(index){
 cart.splice(index,1)
 localStorage.setItem("cart",JSON.stringify(cart));
 appendData();
 cartlength();

  
}

function main(n,a){
    this.name=n;
    this.address=a;
}

function checkout(){
let name=document.getElementById("name").value;
let address=document.getElementById("adres").value;

let u1=new main(name,address)

if(u1.name && u1.address){
    alert(`${u1.name} your order is succefull`)
}
else{
    alert("please fill the deatail")
}

}