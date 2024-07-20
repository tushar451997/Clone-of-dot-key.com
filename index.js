let textsliderdata = [
    {
      id: 0,
      img: "New Launch: SPF 30 Glossy Lip Balms",
    },
    {
      id: 1,
      img: "Flash sale: FLAT 250 store. use code Flat250",
    },
    {
      id: 2,
      img: "Spin & Win Upto 40% OFF",
    },
    {
      id: 3,
      img: "Buy 2 Get 1 FREE. Use Code: B2G1",
    },
    {
        id: 4,
        img:"Combos & Regimes: Upto 25% Off",
      },
  ];
  document.querySelector(".top-header").innerHTML=header()


  let openmenu=document.querySelector(".menu-icon");
  let showsidebarcontainer=document.querySelector(".sidebar-conatiner");

  openmenu.addEventListener("click",()=>{
    openmenu.classList.toggle("closemenu-icon")
    showsidebarcontainer.classList.toggle("showsidebar-conatiner")
  })



  let ingredientssection = document.getElementById("ingredients-section");
  let concernsection =document.getElementById("concern-section");
  let allproductssection =document.getElementById("allproducts-section");
  let knowsection=document.getElementById("know-section");
  let profile = document.getElementById("profile");
  let showhide=document.querySelector(".ingredients-section .hide-ingredients");
  let showhideconcern=document.querySelector(".concern-section .hide-concern");
  let showhideallproducts=document.querySelector(".allproducts-section .hide-allproducts");
  let showhideknowus=document.querySelector(".know-section .hide-knowus");
  let showhideprofile=document.querySelector(".profile .hide-profile");


  ingredientssection.addEventListener("click",()=>{
    if(showhide.classList.value==="hide-ingredients"){
      showhide.classList.add("show-ingredients")
      showhide.classList.remove("hide-ingredients")
      ingredientssection.classList.remove("fa-light","fa-plus")
      ingredientssection.classList.add("fa-solid","fa-minus")

    }
    else{
      showhide.classList.remove("show-ingredients")
      showhide.classList.add("hide-ingredients")
      ingredientssection.classList.add("fa-light","fa-plus")
      ingredientssection.classList.remove("fa-solid","fa-minus")
    }
  })

  concernsection.addEventListener("click",()=>{
    console.log(showhideconcern)
    if(showhideconcern.classList.value==="hide-concern"){
      showhideconcern.classList.add("show-concern")
      showhideconcern.classList.remove("hide-concern")
      concernsection.classList.remove("fa-light","fa-plus")
      concernsection.classList.add("fa-solid","fa-minus")

    }
    else{
      showhideconcern.classList.remove("show-concern")
      showhideconcern.classList.add("hide-concern")
      concernsection.classList.add("fa-light","fa-plus")
      concernsection.classList.remove("fa-solid","fa-minus")
    }
  })

  allproductssection.addEventListener("click",()=>{
    console.log(showhideconcern)
    if(showhideallproducts.classList.value==="hide-allproducts"){
      showhideallproducts.classList.add("show-allproducts")
      showhideallproducts.classList.remove("hide-allproducts")
      allproductssection.classList.remove("fa-light","fa-plus")
      allproductssection.classList.add("fa-solid","fa-minus")

    }
    else{
      showhideallproducts.classList.remove("show-allproducts")
      showhideallproducts.classList.add("hide-allproducts")
      allproductssection.classList.add("fa-light","fa-plus")
      allproductssection.classList.remove("fa-solid","fa-minus")
    }
  })

  knowsection.addEventListener("click",()=>{
    console.log(showhideconcern)
    if(showhideknowus.classList.value==="hide-knowus"){
      showhideknowus.classList.add("show-knowus")
      showhideknowus.classList.remove("hide-knowus")
      knowsection.classList.remove("fa-light","fa-plus")
      knowsection.classList.add("fa-solid","fa-minus")

    }
    else{
      showhideknowus.classList.remove("show-knowus")
      showhideknowus.classList.add("hide-knowus")
      knowsection.classList.add("fa-light","fa-plus")
      knowsection.classList.remove("fa-solid","fa-minus")
    }
  })

  profile.addEventListener("click",()=>{
    console.log(showhideconcern)
    if(showhideprofile.classList.value==="hide-profile"){
      showhideprofile.classList.add("show-profile")
      showhideprofile.classList.remove("hide-profile")
      profile.classList.remove("fa-light","fa-plus")
      profile.classList.add("fa-solid","fa-minus")

    }
    else{
      showhideprofile.classList.remove("show-profile")
      showhideprofile.classList.add("hide-profile")
      profile.classList.add("fa-light","fa-plus")
      profile.classList.remove("fa-solid","fa-minus")
    }
  })


import { shopByIngredients } from "./data.js";
  import { bigImageSlider,bigImageSliderMedia,offsersSlider, offserSliderMedia,shopByNewArrivel,shopByinspotlight, shopByTopCategoryskin, shopByTopCategorybodycare, shopByTopCategoryhaircare, shopByTopCategorynutrition, shopByBestSellerfacecream, shopByBestSellerfaceserum, shopByBestSellerlipcare, shopByBestSellerregimes } from "./data.js";

 const topTextslider=()=>{
  let container=document.getElementById("textslider");
  let count=0;
   textsliderdata.map((elem)=>{
     let p = document.createElement("p");
         p.innerText = elem.img;
         container.append(p);
   })
 
   const textSlideshow=()=>{
           if(textsliderdata.length>count){
             container.style.transform=`translateX(${-count*20}%)`
             count++;
           }
           else{
             count=0;
           }
   }
 
   setInterval(()=>{
     textSlideshow()
   },2000)
 }

 topTextslider();


// bigImageSlider
const imgSlider=()=>{
  let slidercontainer=document.getElementById("slidercontainer")
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let count=0;
let id;
// console.log(window.innerWidth)
let dotcontainer=document.querySelector(".dot-container")

for(let i=0;i<bigImageSlider.length;i++){
  let div=document.createElement("div");
  div.classList="dot";
  div.addEventListener("click",()=>{
    dotcontainer.children[count].classList.remove("active");
    clearTimeout(id)
    count=i
    changeStyle();
  })
  dotcontainer.append(div)
}
let data;
if(window.outerWidth>785){
  data=bigImageSlider;
 //  console.log("smallscreen")
}
else{
 data=bigImageSliderMedia;
 // console.log("bigscrren")
}
const appendImage=()=>{
data.map((elem)=>{
    let img=document.createElement("img");
    img.src=elem.img;
    img.style.height="100%"
    slidercontainer.appendChild(img)
})
};
appendImage();

prev.addEventListener("click",()=>{
  clearTimeout(id);
  dotcontainer.children[count].classList.remove("active");
  count--;
  changeStyle()  
})
next.addEventListener("click",()=>{
  clearTimeout(id);
  dotcontainer.children[count].classList.remove("active");
  count++;
  changeStyle()  
})

const changeStyle=()=>{
   if(count>bigImageSlider.length-1){
    count=0;
  }
 else if(count<0){
    count=bigImageSlider.length-1;
  }
  dotcontainer.children[count].classList.add("active");
  slidercontainer.style.transform=`translateX(${-100*count}vw)`
 id= setTimeout(()=>{
  dotcontainer.children[count].classList.remove("active");
  count++;
  changeStyle()
 },3000)
  
}
changeStyle();
}
imgSlider();



//addslider

const offserSlider=()=>{
  let slidercontainer=document.getElementById("offerslidercontainer")
let prev = document.querySelector(".offerprev");
let next = document.querySelector(".offernext");
let count=0;
let id;
// console.log(window.innerWidth)
let dotcontainer=document.querySelector(".dot-container-offer")

for(let i=0;i<offsersSlider.length;i++){
  let div=document.createElement("div");
  div.classList="offer-dot";
  div.addEventListener("click",()=>{
    dotcontainer.children[count].classList.remove("offer-active");
    count=i
    changeStyle();
  })
  dotcontainer.append(div)
}

let data;
if(window.outerWidth>785){
  data=offsersSlider;
 //  console.log("smallscreen")
}
else{
 data=offserSliderMedia;
 // console.log("bigscrren")
}

const appendImage=()=>{
data.map((elem)=>{
    let img=document.createElement("img");
    img.src=elem.img;
    img.style.height="100%"
    slidercontainer.appendChild(img)
})
};
appendImage();

prev.addEventListener("click",()=>{
  dotcontainer.children[count].classList.remove("offer-active");
  count--;
  changeStyle()  
})
next.addEventListener("click",()=>{
  dotcontainer.children[count].classList.remove("offer-active");
  count++;
  changeStyle()  
})

const changeStyle=()=>{
   if(count>offsersSlider.length-1){
    count=0;
  }
 else if(count<0){
    count=offsersSlider.length-1;
  }
  dotcontainer.children[count].classList.add("offer-active");
  slidercontainer.style.transform=`translateX(${-100*count}vw)`
 
  
}
changeStyle();
}
offserSlider();


const shopBynewarrivel=()=>{
  let container = document.getElementById("arrivel-container")

    shopByNewArrivel.map((elem)=>{
      let div = document.createElement("div");
      div.classList="arrivel-container";
      div.id="changestyle"
      let img=document.createElement("img");
      img.src=elem.img;

      let i=document.createElement("i");
      i.classList.add("fa-solid","fa-star");
      let span =document.createElement("span");


      let rating =document.createElement("p");
       rating.classList="rating";
      rating.innerHTML= elem.rating;
      span.append(i,rating)
      
      let title = document.createElement("p");
      title.id="title";
      title.innerHTML=elem.title;

      let pricediv=document.createElement("div");
      pricediv.classList="price";

      let strikedprice =document.createElement("p");
      strikedprice.classList="striked-price";
      strikedprice.innerHTML=`Rs: ${elem.strikedprice}`;

      let price =document.createElement("p");
      price.id="price";
      strikedprice.innerHTML=`Rs: ${elem.price}`;

       pricediv.append(strikedprice);

      let btn=document.createElement("button");
      btn.addEventListener("click",()=>{
      })
      btn.innerText="ADD TO CART";
      div.append(img,span,title,pricediv,btn)
       container.append(div)


    })

    let size=0;
    let conatinersize;
    if(window.outerWidth>768){
      conatinersize=3;
    }
    else{
      conatinersize=5;
    }
    function reSize(){
      if(size>conatinersize){
        size=0;
      }
     else if(size<0){
        size=conatinersize;
      }
      changeimage.style.transform=`translateX(${-10*size}%)`
    }
    let next=document.querySelector(".arrivelleft");
    let prev=document.querySelector(".arrivelright")
   let changeimage=document.querySelector(".shopbynewarrivels");
   next.addEventListener("click",()=>{
    size++;
    reSize()
   })
   prev.addEventListener("click",()=>{
    size--;
    reSize()
   })
}

shopBynewarrivel();

const shopBybestseller=()=>{
  let container = document.getElementById("bestseller-container")
   
  let facecreams=document.getElementById("facecreams");
  let faceserums=document.getElementById("faceserums");
  let lipcare=document.getElementById("lipcare");
  let regimes=document.getElementById("regimes");
  let data=shopByBestSellerfacecream;
  facecreams.classList="activeclass"

  facecreams.addEventListener("click",()=>{
    facecreams.classList="activeclass";
    faceserums.classList.remove("activeclass");
    lipcare.classList.remove("activeclass");
    regimes.classList.remove("activeclass");
    
    data=shopByBestSellerfaceserum;
    appendData()
   })

   faceserums.addEventListener("click",()=>{
    faceserums.classList="activeclass";
    facecreams.classList.remove("activeclass")
    lipcare.classList.remove("activeclass")
    regimes.classList.remove("activeclass")
    data=shopByBestSellerfaceserum;
    appendData()
   })

   lipcare.addEventListener("click",()=>{
    lipcare.classList="activeclass";
    facecreams.classList.remove("activeclass")
    faceserums.classList.remove("activeclass")
    regimes.classList.remove("activeclass")
    data=shopByBestSellerlipcare;
    appendData()
   })

   regimes.addEventListener("click",()=>{
    regimes.classList="activeclass";
    facecreams.classList.remove("activeclass")
    faceserums.classList.remove("activeclass")
    lipcare.classList.remove("activeclass")
    data=shopByBestSellerregimes;
    appendData()
   })
   let size=0;
   let conatinersize;
   if(window.outerWidth>768){
     conatinersize=3;
   }
   else{
     conatinersize=2;
   }
   function reSize(){
     if(size>conatinersize){
       size=0;
     }
    else if(size<0){
       size=conatinersize;
     }
     changeimage.style.transform=`translateX(${-25*size}%)`
   }
   let next=document.querySelector(".bestsellerleft");
   let prev=document.querySelector(".bestsellerright")
  let changeimage=document.querySelector(".shopbybestseller");
  next.addEventListener("click",()=>{
   size++;
   reSize()
  })
  prev.addEventListener("click",()=>{
   size--;
   reSize()
  })
   
   
   const appendData=()=>{
    container.innerHTML="";
    data.map((elem)=>{
      let div = document.createElement("div");
      div.classList="bestseller-container";
      div.id="changestyle-topcategory"
      let img=document.createElement("img");
      img.src=elem.img;

      let i=document.createElement("i");
      i.classList.add("fa-solid","fa-star");
      let span =document.createElement("span");


      let rating =document.createElement("p");
       rating.classList="rating";
      rating.innerHTML= elem.rating;
      span.append(i,rating)
      
      let title = document.createElement("p");
      title.id="title";
      title.innerHTML=elem.title;

      let pricediv=document.createElement("div");
      pricediv.classList="price";

      let strikedprice =document.createElement("p");
      strikedprice.classList="striked-price";
      strikedprice.innerHTML=`Rs: ${elem.strikedprice}`;

      let price =document.createElement("p");
      price.id="price";
      strikedprice.innerHTML=`Rs: ${elem.price}`;

       pricediv.append(strikedprice);

      let btn=document.createElement("button");
      btn.addEventListener("click",()=>{

      })
      btn.innerText="ADD TO CART";
      div.append(img,span,title,pricediv,btn)
       container.append(div)


    }) 
   }
   appendData()
}

shopBybestseller();



const spotLight=()=>{
  let spotlightmaincontainer=document.querySelector(".spotlightmaincontainer");
shopByinspotlight.map((elem)=>{
  let div=document.createElement("div");
  div.classList="spotlight";
  let img= document.createElement("img");
  img.src=elem.img;
  div.append(img)
  spotlightmaincontainer.append(div)
})
}
spotLight();



const shopBytopcategory=()=>{
  let container = document.getElementById("topcategory-container")
   
  let skin=document.getElementById("skin");
  let bodycare=document.getElementById("bodycare");
  let haircare=document.getElementById("haircare");
  let nutrition=document.getElementById("nutrition");
  let data=shopByTopCategoryskin;
  skin.classList="activeclass"

  skin.addEventListener("click",()=>{
    skin.classList="activeclass"
    bodycare.classList.remove("activeclass")
    haircare.classList.remove("activeclass")
    nutrition.classList.remove("activeclass")
    data=shopByTopCategoryskin;
    appendData()
   })

   bodycare.addEventListener("click",()=>{
    bodycare.classList="activeclass";
    skin.classList.remove("activeclass")
    haircare.classList.remove("activeclass")
    nutrition.classList.remove("activeclass")
    data=shopByTopCategorybodycare;
    appendData()
   })

   haircare.addEventListener("click",()=>{
    haircare.classList="activeclass";
    skin.classList.remove("activeclass")
    bodycare.classList.remove("activeclass")
    nutrition.classList.remove("activeclass")
    data=shopByTopCategoryhaircare;
    appendData()
   })

   nutrition.addEventListener("click",()=>{
    nutrition.classList="activeclass";
    skin.classList.remove("activeclass")
    haircare.classList.remove("activeclass")
    bodycare.classList.remove("activeclass")
    data=shopByTopCategorynutrition;
    appendData()
   })
   let size=0;
   let conatinersize;
   if(window.outerWidth>768){
     conatinersize=3;
   }
   else{
     conatinersize=2;
   }
   function reSize(){
     if(size>conatinersize){
       size=0;
     }
    else if(size<0){
       size=conatinersize;
     }
     changeimage.style.transform=`translateX(${-25*size}%)`
   }
   let next=document.querySelector(".topcategoryleft");
   let prev=document.querySelector(".topcategoryright")
  let changeimage=document.querySelector(".shopbytopcategory");
  next.addEventListener("click",()=>{
   size++;
   reSize()
  })
  prev.addEventListener("click",()=>{
   size--;
   reSize()
  })
   
   const appendData=()=>{
    container.innerHTML="";
    data.map((elem)=>{
      let div = document.createElement("div");
      div.classList="topcategory-container";
      div.id="changestyle-topcategory"
      let img=document.createElement("img");
      img.src=elem.img;

      let rating =document.createElement("p");
       rating.classList="rating";
      rating.innerText= elem.rating
      
      let title = document.createElement("p");
      title.id="title";
      title.innerHTML=elem.title;

      let pricediv=document.createElement("div");
      pricediv.classList="price";

      let strikedprice =document.createElement("p");
      strikedprice.classList="striked-price";
      strikedprice.innerHTML=`Rs: ${elem.strikedprice}`;

      let price =document.createElement("p");
      price.id="price";
      strikedprice.innerHTML=`Rs: ${elem.price}`;

       pricediv.append(strikedprice);

      let btn=document.createElement("button");
      btn.addEventListener("click",()=>{

      })
      btn.innerText="ADD TO CART";
      div.append(img,rating,title,pricediv,btn)
       container.append(div)


    }) 
   }
   appendData()
}

shopBytopcategory();


const shopByingredients=()=>{
  let slidercontainer=document.getElementById("ingradientsliderconatiner")
let prev = document.querySelector(".ingredientsprev");
let next = document.querySelector(".ingredientsnext");
let count=0;






const appendImage=()=>{
shopByIngredients.map((elem)=>{
    let img=document.createElement("img");
    img.src=elem.save;
    slidercontainer.appendChild(img)
})
};
appendImage();

prev.addEventListener("click",()=>{
  count--;
  changeStyle()  
})
next.addEventListener("click",()=>{
  count++;
  changeStyle()  
})

const changeStyle=()=>{
   if(count>shopByIngredients.length-2){
    count=0;
  }
 else if(count<0){
    count=shopByIngredients.length-2;
  }
  slidercontainer.style.transform=`translateX(${-19.8*count}%)`
 
  
}
changeStyle();
}
shopByingredients();


import { safeimg } from "./data.js";

const safeImg=()=>{
  let container =document.getElementById("safeimg")
  safeimg.map((elem)=>{
    let img=document.createElement("img");
    img.src=elem.img;
    container.append(img)
  })
}
safeImg()


import { awardwinning } from "./data.js";

const awardWinning=()=>{
  let container =document.getElementById("awardwinning");

  awardwinning.map((elem)=>{
    let img = document.createElement("img");
    img.src=elem.img;
    container.append(img)
  })
  

    let conatiner = document.getElementById("awardwinning");
 let left =document.querySelector(".awardleft");
 let right = document.querySelector(".awardright");
 let count = 0;
 
 const changeStyle=()=>{
  if(count>awardwinning.length-1){
    count=0;
  }
  else if(count<0){
  count=awardwinning.length-1
  }
  conatiner.style.transform=`translateX(-${(33.5*count)}%)`;
 }
 left.addEventListener("click",()=>{

  count--;
 changeStyle()
 })

 right.addEventListener("click",()=>{
  count++;

  changeStyle()

 })


  }

 
    



awardWinning()

import { custumorreview } from "./data.js";

const customerReview=()=>{
  let container = document.getElementById("customerreview-container")

  custumorreview.map((elem)=>{
      let div = document.createElement("div");
      div.classList="customerreview-container";
      div.id="changestyle"
      let img=document.createElement("img");
      img.src=elem.img;
  let imgdiv=document.createElement("div");
    imgdiv.classList="customerimg"
  imgdiv.append(img)

  let i=document.createElement("i");
      i.classList.add("fa-solid","fa-star");
      let i1=document.createElement("i");
      i1.classList.add("fa-solid","fa-star");
      let i2=document.createElement("i");
      i2.classList.add("fa-solid","fa-star");
      let i3=document.createElement("i");
      i3.classList.add("fa-solid","fa-star");
      let fivestar =document.createElement("span");
       fivestar.classList=("fivestar")
      let i4=document.createElement("i");
      i4.classList.add("fa-solid","fa-star");
      fivestar.append(i,i1,i2,i3,i4)

let infodiv =document.createElement("div");
  infodiv.classList="allinfo"

      let title =document.createElement("p");
       title.classList="title";
      title.innerText= elem.title
      
      let des = document.createElement("p");
      des.classList="des";
      des.innerHTML=elem.des;

      let name=document.createElement("p");
      name.classList="name";
      name.innerText=elem.name

  infodiv.append(fivestar,title,des,name)
     
      div.append(imgdiv,infodiv)
       container.append(div)


    })

    let size=0;
    function reSize(){
      if(size>7){
        size=0;
      }
     else if(size<0){
        size=7;
      }
      changeimage.style.transform=`translateX(${-10.2*size}%)`
    }
    let next=document.querySelector(".customerreviewleft");
    let prev=document.querySelector(".customerreviewright")
   let changeimage=document.querySelector(".customerreview");
   next.addEventListener("click",()=>{
    size++;
    reSize()
   })
   prev.addEventListener("click",()=>{
    size--;
    reSize()
   })
}

customerReview();

import { skincarejoneral } from "./data.js";
import header from "./header/header.js";

const skincareJoneral=()=>{
  let container = document.getElementById("skincarejoneral-container")

  skincarejoneral.map((elem)=>{
      let div = document.createElement("div");
      div.classList="skincarejoneral-container";
      div.id="changestyle"
      let img=document.createElement("img");
      img.src=elem.img;

      let title =document.createElement("p");
       title.classList="title";
      title.innerText= elem.title
      
      let des = document.createElement("p");
      des.classList="des";
let btn=document.createElement("button");
btn.innerText="read more"+" "+">"

      des.innerHTML=elem.des;

     

      

     
      div.append(img,title,des,btn)
       container.append(div)


    })

    let size=0;
    let per;
    if(window.outerWidth>768){
    per=13.3
    }
    else{
      per=20
    }
    function reSize(){
      if(size>1){
        size=0;
      }
     else if(size<0){
        size=1;
      }
      changeimage.style.transform=`translateX(${-per*size}%)`
    }
    let next=document.querySelector(".skincarejoneralleft");
    let prev=document.querySelector(".skincarejoneralright")
   let changeimage=document.querySelector(".skincarejoneral");
   next.addEventListener("click",()=>{
    size++;
    reSize()
   })
   prev.addEventListener("click",()=>{
    size--;
    reSize()
   })
}

skincareJoneral();



// media qurey css

let getusknowsection = document.getElementById("getusknow-section");
let showgetusknowsection=document.getElementById("ulgetknowus-hide");



getusknowsection.addEventListener("click",()=>{
  if(showgetusknowsection.classList.value==="ulgetknowus-hide"){
    showgetusknowsection.classList.add("show-getusknowsection")
    showgetusknowsection.classList.remove("ulgetknowus-hide")
    getusknowsection.classList.remove("fa-light","fa-plus")
    getusknowsection.classList.add("fa-solid","fa-minus")

  }
  else{
    showgetusknowsection.classList.remove("show-getusknowsection")
    showgetusknowsection.classList.add("ulgetknowus-hide")
    getusknowsection.classList.add("fa-light","fa-plus")
    getusknowsection.classList.remove("fa-solid","fa-minus")
  }
  })

  let availableonsection = document.getElementById("availableon-section");
let alsoavailableon=document.getElementById("also-availableon");



availableonsection.addEventListener("click",()=>{

  if(alsoavailableon.classList.value==="availableon-hide"){
    alsoavailableon.classList.add("show-getusknowsection")
    alsoavailableon.classList.remove("availableon-hide")
    availableonsection.classList.remove("fa-light","fa-plus")
    availableonsection.classList.add("fa-solid","fa-minus")

  }
  else{
    alsoavailableon.classList.remove("show-getusknowsection")
    alsoavailableon.classList.add("availableon-hide")
    availableonsection.classList.add("fa-light","fa-plus")
    availableonsection.classList.remove("fa-solid","fa-minus")
  }
  })



  