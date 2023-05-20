const section4=document.querySelector(".section-4");

const section4left1=document.querySelector("section-4-left-1")
const section4left2=document.querySelector("section-4-left-2")
const section4left3=document.querySelector("section-4-left-3")
const section4left4=document.querySelector("section-4-left-4")

const section4img=document.querySelector(".section-4-right-img")
const section4RightImg1 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png";
const section4RightImg2 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold2.png";
const section4RightImg3 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold3.png";
const section4RightImg4 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold4.png";
// add event listenner
window.addEventListener("scroll",()=>{
    const scrollpos=window.scrollY;
    const section4offset=section4.offsetTop;
    const section4height=section4.clientHeight;

    if((scrollpos>section4offset)&&(scrollpos<section4height+section4offset)){
         if(scrollpos>section4offset&& scrollpos<section4offset+300){
             section4left1.style.opacity="1";
             section4left1.style.transition="opacity 1s ease-in-out";
         }   else if(scrollpos>section4offset+innerHeight&& scrollpos<section4offset+innerHeight+300){

         }
    }



})