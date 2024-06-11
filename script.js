const imageArray = [
  {
    url :"./products/item 7.jpg" ,
  },
  {
    url :"./products/item 7.jpg" ,
  },
  {
    url :"./products/item 8.jpeg" ,
  },
  {
    url :"./products/item 9.jpeg" ,
  },
  {
    url :"./products/item 10.jpeg" ,
  },
  {
    url :"./products/item 11.jpeg" ,
  },
  {
    url :"./products/item 12.jpeg" ,
  },

]

function handleShowProducts(){
  const productContainer = document.getElementById("product-section");
  
  // const projectDiv = document.createElement("div");
  
  for (const item of imageArray) {
  
  const productDivImage = document.createElement("div");
  
  productDivImage.classList.add("prooduct-card");
  productDivImage.innerHTML = `<img src = "${item.url}"alt="">`;
  console.log(productDivImage);
  
  productContainer.appendChild(productDivImage);
    
  }
  console.log("click",productContainer);
  
  
  }