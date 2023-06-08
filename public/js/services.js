document.addEventListener("DOMContentLoaded", function() {
//yellow section js
  
const el= document.querySelector("#part3")
const title = document.querySelector('#title');
const info = document.querySelector('#info');
const serviceFrontImage = document.querySelector('#service-front-img');
//const service = document.querySelector('#service');
//const t = document.querySelectorAll('.service');
let preiviouslyClickedBlock = null
let previouslyClickedServiceTitle = null
el.addEventListener('click',(event)=>{
    if(event.target.classList.contains("title-info")){
        // const text = event.target.querySelector("span").textContent
        // console.log(text)
        if(preiviouslyClickedBlock !== null && previouslyClickedServiceTitle!==null){
      preiviouslyClickedBlock.style.transform = ''
      previouslyClickedServiceTitle.style.color = ''
      previouslyClickedServiceTitle.classList.remove('white-bullet')
        }
        event.target.parentElement.style.transform = 'translateX(-28px)'
         
        console.log(event.target.parentElement)
        event.target.style.color = '#317FEB'
        event.target.classList.add('white-bullet')
        preiviouslyClickedBlock = event.target.parentElement
        previouslyClickedServiceTitle = event.target
         title.textContent = event.target.textContent
         info.textContent = event.target.nextElementSibling.textContent
         let image = event.target.parentElement.querySelector('.service-img')
         let imgSource = image.getAttribute('src')
          const computedStyle = window.getComputedStyle(image)
          let imgWidth = computedStyle.getPropertyValue('width')
          let imgHeight = computedStyle.getPropertyValue('height')
          let imgTop = computedStyle.getPropertyValue('top')
          let imgLeft = computedStyle.getPropertyValue('left')
         serviceFrontImage.src =  imgSource
          serviceFrontImage.style.width =  imgWidth
          serviceFrontImage.style.height =  imgHeight
          serviceFrontImage.style.top =  imgTop
          serviceFrontImage.style.left =  imgLeft
    }else if (event.target.parentElement.classList.contains('title-info')) {
        title.textContent = event.target.parentElement.textContent;
        info.textContent = event.target.nextElementSibling?event.target.nextElementSibling.textContent:'';
      }
    
})

// const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slider-slide');
const slideWidth = slides[0].clientWidth;

let slideIndex = 0;

function updateSliderPosition() {
sliderContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
// slides.forEach((slide, index) => {
//   if (index === slideIndex) {
//     slide.style.display = "block"; // Display the current slide image
//   } else {
//     slide.style.display = "none"; // Hide the other slide images
//   }
// });
}

function nextSlide() {
slideIndex = (slideIndex + 1) % slides.length;
updateSliderPosition();
}

function prevSlide() {
slideIndex = (slideIndex - 1 + slides.length) % slides.length;
updateSliderPosition();
}

let serviceDetail = document.querySelectorAll('.service-detail')
let serviceTitle = document.querySelectorAll('.title-info')
document.querySelector('.slider-prev').addEventListener('click', ()=>{
prevSlide()
console.log(serviceDetail[slideIndex])
title.textContent = serviceTitle[slideIndex].textContent
info.textContent = serviceDetail[slideIndex].textContent
});
document.querySelector('.slider-next').addEventListener('click', ()=>{
nextSlide()
title.textContent = serviceTitle[slideIndex].textContent
info.textContent = serviceDetail[slideIndex].textContent
});

window.addEventListener("scroll", ()=> {
if (preiviouslyClickedBlock !== null && previouslyClickedServiceTitle!== null) {
  //resetPosition(prevClickedDiv);
  preiviouslyClickedBlock.style.transform = ''
  previouslyClickedServiceTitle.style.color = ''
  previouslyClickedServiceTitle.classList.remove('white-bullet')
}
});   


})  