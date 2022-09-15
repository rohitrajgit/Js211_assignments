function details(b,n,p,i){
    this.brand=b;
    this.productname=n;
    this.price=p;
    this.image=i;
  
  }
  
  function Addproduct(){
    event.preventDefault();
    let brand=document.getElementById("brand").value;
    let product=document.getElementById("productname").value;
    let price=document.getElementById("price").value;
    let image=document.getElementById("image").value;
  
  
    let b1= new details(brand,product,price,image);
    
    let productdata=JSON.parse(localStorage.getItem("mobile_data"))||[];
    productdata.push(b1);
  
    localStorage.setItem("mobile_data",JSON.stringify(productdata));
  
    console.log(productdata)
  }