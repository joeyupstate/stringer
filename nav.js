const menuButton = document.querySelector(".hamburger-icon")
const nav = document.querySelector(".nav");
const visbleNav = document.querySelector(".visible-nav")
const closeIcon = document.querySelector(".close-icon")


//This is so that the nav disapears on resizeing
const reSizer = ()=>{
    var screenWidth = document.documentElement.clientWidth || window.innerWidth;
    if (screenWidth > 600 && nav.classList.contains("visible-nav")) {
        nav.classList.toggle("visible-nav")
        closeIcon.style.display = "none"
        nameTitle.classList.toggle("name-title-blur")

}
else if (screenWidth < 1200){
    console.log("the screen is too small")
}
}

//this is makes the hamburger menu disapear 


const menureSizer = ()=>{
    var screenWidth = document.documentElement.clientWidth || window.innerWidth;
    if (screenWidth > 600) {
       menuButton.style.display="none"
}
else if (screenWidth < 600){
    menuButton.style.display="block"
}
}

window.onresize = function(){
    reSizer();
    menureSizer();
}

window.onload=function(){
    menureSizer()
    }



//this calls the navbar
menuButton.addEventListener("click", function(){

    nav.classList.toggle("visible-nav")
 
    closeIcon.style.display="block"
    })

    //this closers the navbar
    closeIcon.addEventListener("click", function(){
        nav.classList.toggle("visible-nav")
        
        closeIcon.style.display ="none"
    })
    