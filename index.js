const closer = document.getElementById("close")
const enlargedImage =document.getElementById("enlarged-image")
const enlargedTitle = document.getElementById("enlarged-title")
const pageContainer = document.getElementById("guitar-card-holder")
const enlargedCard = document.getElementById("enlarged-card")
const search = document.querySelectorAll(".search-icon")
const guitarPhotos= document.querySelectorAll(".guitar-photos")
const guitarCard = document.querySelectorAll(".guitar-card")
const year = document.getElementById("year")
const orr = document.getElementById("orientation")


const random = ()=>{
  let randomNum = Math.floor(Math.random() * (2020-1965) + 1965)
  year.innerHTML = randomNum
  let rightOrLeft = Math.floor(Math.random() *2) +1
   console.log(rightOrLeft)
}


for(let i = 0; i < search.length; i++){
  guitarCard[i].addEventListener("click",function(){


enlargedCard.style.display="flex"
pageContainer.style.display="none";
let source = this.firstChild.nextSibling.src
let name =this.firstChild.nextSibling.nextElementSibling.children[0].innerHTML;

enlargedTitle.innerHTML=name
enlargedImage.src=source;
random()

  })
}

closer.addEventListener("click",function(){
enlargedCard.style.display="none"
pageContainer.style.display="flex"
})
   
