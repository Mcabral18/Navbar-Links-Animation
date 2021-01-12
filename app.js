const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const Links = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", ()=> {
    navLinks.classList.toggle("nav-active");
    burger.classList.toggle("active");
Links.forEach((link,index)=>{
    // link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
    if(link.style.animation){
        link.style.animation = '';
    }
    else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
})
});

//Remove NavBar if the user click a link

function closeNav(){
    navLinks.classList.remove("nav-active");
    burger.classList.remove("active");
}

Links.forEach((n) => n.addEventListener("click", closeNav));

///////////////

Links.forEach((n) => n.addEventListener("click", ()=>{
    navLinks.classList.remove("nav-active");
    burger.classList.remove("active");
}));


//// other way

// const navSlide = () => {
//     const burger = document.querySelector(".burger");
//     const navLinks = document.querySelector(".nav-links");
//     const Links = document.querySelectorAll(".nav-links li")

//     burger.addEventListener("click", ()=> {
//         //toggle menu
//         navLinks.classList.toggle("nav-active");
//         burger.classList.toggle("active");
//         //animated navLinks
//         Links.forEach((link,index)=>{
//             // link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
//             if(link.style.animation){
//                 link.style.animation = '';
//             }
//             else{
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
//             }
//         })
//     });

// }

// navSlide();
