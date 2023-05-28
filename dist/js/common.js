
    // let menuButton = document.querySelector("#menu-button")
    //         let menuItems = document.querySelector("#menu-items")
    //         let menu = document.querySelector(".menu")
    //         let touchstartX
    //          menuButton.addEventListener("mouseover",()=>{
    //           if(window.innerWidth>768){
    //             menuItems.classList.remove("hidden")
    //             menuButton.classList.add("hidden")
    //           }
    //          })
    //          menu.addEventListener("mouseleave",()=>{
    //           if(window.innerWidth>768){
    //             menuItems.classList.add("hidden")
    //             menuButton.classList.remove("hidden")
    //           }
    //          })
    //         menu.addEventListener("touchstart",(e)=>{
    //           e.preventDefault()
    //           if(window.innerWidth<=768){
    //             if (touchstartX === undefined) {
    //   touchstartX = e.touches[0].clientX;
    //   menuItems.classList.remove("hidden");
    //   menu.classList.add("hidden");
    // } else {
    //   touchstartX = undefined;
    //   menuItems.classList.add("hidden");
    //   menu.classList.remove("hidden");
    // }
    //           }
    //         })


    AOS.init()
        
            let menuButton = document.querySelector("#menu-button")
            let menuItems = document.querySelector("#menu-items")
            let menu = document.querySelector(".menu")
            let touchstartX
            menuButton.addEventListener("mouseover",()=>{
              if(window.innerWidth>768){
                menuItems.classList.remove("hidden")
                menuButton.classList.add("hidden")
              }
            })
            menu.addEventListener("mouseleave",()=>{
              if(window.innerWidth>768){
                menuItems.classList.add("hidden")
                menuButton.classList.remove("hidden")
              }
            })
            menuButton.addEventListener("touchstart",(e)=>{
              e.preventDefault()
              if(window.innerWidth<=768){
                if (touchstartX === undefined) {
      touchstartX = e.touches[0].clientX;
      menuItems.classList.remove("hidden");
      menuButton.classList.add("hidden");
    } else {
      touchstartX = undefined;
      menuItems.classList.add("hidden");
      menuButton.classList.remove("hidden");
    }
              }
            })

            let activePage = document.querySelector('.active-page')
            menuItems.addEventListener('click', (event)=>{
              if(event.target.tagName == 'A'){
                activePage.classList.remove('hidden')
              activePage.textContent = event.target.nextElementSibling.textContent
              console.log(activePage.textContent)
              }
            })
            //  menu.addEventListener("touchend",(e)=>{
            //   e.preventDefault()
            //    if(window.innerWidth<=768){
            //     if (!menuItems.classList.contains("hidden")) {

            //      menuItems.classList.add("hidden")
            //      menu.classList.remove("hidden")
            //    }
            //   }
            // })

           
            const el= document.querySelector("#part3")
    const title = document.querySelector('#title');
    const info = document.querySelector('#info');
    const service = document.querySelector('#service');
    const t = document.querySelectorAll('.service');
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
        }else if (event.target.parentElement.classList.contains('title-info')) {
            title.textContent = event.target.parentElement.textContent;
            info.textContent = event.target.nextElementSibling?event.target.nextElementSibling.textContent:'';
          }
        
    })

    window.addEventListener("scroll", function() {
    if (preiviouslyClickedBlock !== null && previouslyClickedServiceTitle!== null) {
      //resetPosition(prevClickedDiv);
      preiviouslyClickedBlock.style.transform = ''
      previouslyClickedServiceTitle.style.color = ''
      previouslyClickedServiceTitle.classList.remove('white-bullet')
    }
  });

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
