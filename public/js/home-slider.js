document.addEventListener("DOMContentLoaded", ()=> {
let btnContainers = document.querySelectorAll('.know-more-btn-container');

btnContainers.forEach((btnContainer) => {
  let knowMoreButton = btnContainer.querySelector('.rounded-btn');
  let arrow = btnContainer.querySelector('.arrow');
  let buttonText = btnContainer.querySelector('.btn-text');

  btnContainer.addEventListener('mouseover', () => {
    knowMoreButton.classList.add('w-44');
    knowMoreButton.classList.add('bg-[#317FEB]');
    arrow.style.left = '138px';
    arrow.classList.add('text-white');
    buttonText.classList.remove('hidden');
  });

  btnContainer.addEventListener('mouseleave', () => {
    knowMoreButton.classList.remove('w-44');
    knowMoreButton.classList.remove('bg-[#317FEB]');
    arrow.style.left = '';
    arrow.classList.remove('text-white');
    buttonText.classList.add('hidden');
  });
});

//  window.addEventListener("scroll", () => {
//   if (window.innerWidth > 768) {
//     menuItems.classList.add('hidden');
//     menuButton.classList.remove('hidden');
//   }
// });
            
            //  menu.addEventListener("touchend",(e)=>{
            //   e.preventDefault()
            //    if(window.innerWidth<=768){
            //     if (!menuItems.classList.contains("hidden")) {

            //      menuItems.classList.add("hidden")
            //      menu.classList.remove("hidden")
            //    }
            //   }
            // })
        const carousel = document.querySelector('.carousel');
        const carouselItems = carousel.querySelectorAll('.carousel-item');
        const smallImages = document.querySelectorAll('.small-img')
        const text=document.querySelectorAll('.text')
        const img1 = document.querySelectorAll('.img1')
        const img2 = document.querySelectorAll('.img2')
       
        let currentItemIndex = 0;
        
        console.log(img1)
        setTimeout(() => {
         
          img1[currentItemIndex].classList.remove('img1-zoom-out')
          img1[currentItemIndex].classList.add('img1-zoom-in')
  img2[currentItemIndex].classList.remove('img2-zoom-in')
  
  // console.log(img1)
  // console.log(img2)

  img2[currentItemIndex].classList.add('img2-zoom-out')
   carouselItems[currentItemIndex].style.opacity = 0
  // img1[currentItemIndex].style.opacity = 0;
  // img2[currentItemIndex].style.opacity = 0;
  // console.log(img2)
  // img2[currentItemIndex].setAttribute('data-aos-delay', '0')
  console.log(img1)
  
          text[currentItemIndex].classList.remove('animate-slide-left')
          text[currentItemIndex].classList.add('animate-slide-right')
          text[currentItemIndex].style.opacity=0
        }, 4000);
    setInterval(() => {
    //text[currentItemIndex].classList.add('animate-slide-right');
  carouselItems[currentItemIndex].style.opacity = 0;
  // img1[currentItemIndex].style.opacity = 0;
  // img2[currentItemIndex].style.opacity = 0;
  img1[currentItemIndex].classList.remove('img1-zoom-in')
  img2[currentItemIndex].classList.remove('img2-zoom-out')
  smallImages[currentItemIndex].style.opacity = 0.6;
  if(text[currentItemIndex].classList.contains('animate-slide-right')){
  text[currentItemIndex].classList.remove('animate-slide-right')
  }
//   text[currentItemIndex].classList.add('animate-slide-right')

  currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
  
  
  smallImages[currentItemIndex].style.opacity = 1;
  carouselItems[currentItemIndex].style.opacity = 1;
  // img1[currentItemIndex].style.opacity = 1;
  // img2[currentItemIndex].style.opacity = 1;
  img1[currentItemIndex].classList.add('img1-zoom-out')
  img2[currentItemIndex].classList.add('img2-zoom-in')
  console.log(img1)
  
  text[currentItemIndex].classList.add('animate-slide-left')
  setTimeout(() => {
    img1[currentItemIndex].classList.remove('img1-zoom-out')
  img2[currentItemIndex].classList.remove('img2-zoom-in')
  img1[currentItemIndex].classList.add('img1-zoom-in')
  img2[currentItemIndex].classList.add('img2-zoom-out')
  carouselItems[currentItemIndex].style.opacity = 0;
  // img1[currentItemIndex].style.opacity = 0;
  // img2[currentItemIndex].style.opacity = 0;
    text[currentItemIndex].classList.remove('animate-slide-left')
    text[currentItemIndex].classList.add('animate-slide-right')
    text[currentItemIndex].style.opacity=0
  }, 4000);
}, 5000);

});
