document.addEventListener("DOMContentLoaded", ()=> {
    AOS.init()
    let menuButton = document.querySelector("#menu-button")
          let menuItems = document.querySelector("#menu-items")
          let menu = document.querySelector(".menu")
          let touchstartX
          const menuBackgroundForLargerScreen = document.getElementById('menu-overlay-larger-screen')
          const listItems = document.getElementsByTagName('li')
          const listItemsArray = [...listItems]
          menuButton.addEventListener("mouseover",(event)=>{
            if(window.innerWidth>768){
              menuItems.classList.remove("hidden")
              menuButton.classList.add("hidden")
              menuBackgroundForLargerScreen.classList.remove('hidden')
            }
          })
          menu.addEventListener("mouseleave",()=>{
            if(window.innerWidth>768){
              menuItems.classList.add("hidden")
              menuButton.classList.remove("hidden")
              menuBackgroundForLargerScreen.classList.add('hidden')
            }
          })
          
    //       menuButton.addEventListener('click', ()=>{
    //         menuItems.classList.remove("hidden");
    //  menuButton.classList.add("hidden");
    //  menuBackground.classList.remove("hidden");
    //       })
           menuButton.addEventListener("touchstart",(e)=>{
             e.preventDefault()
             if(window.innerWidth<=768){
    //            if (touchstartX === undefined) {
    //  touchstartX = e.touches[0].clientX;
     menuItems.classList.remove("hidden");
     menuButton.classList.add("hidden");
     menuBackground.classList.remove("hidden");
     // menuItems.style.position = 'absolute'
     // menuItems.style.top = '46px'
     // menuItems.style.left = '81.2%'
     // menuItems.style.transform = 'translateX(-50%)'
     // menuItems.style.width = 'calc(100vw - 10rem)'
     // menuItems.style.backgroundColor = 'white'
     // menuItems.style.zIndex = '20'
               //}
             }
            })
  // } else {
  //   touchstartX = undefined;
  //   menuItems.classList.add("hidden");
  //   menuButton.classList.remove("hidden");
  // }
  //           }
  //         })
          const menuOverlayCloseButton = document.getElementById('menu-close-button')
   const menuCloseButton = ()=>{
    menuBackground.classList.add('hidden')
    menuItems.classList.add('hidden')
    menuButton.classList.remove('hidden')
   }
   menuOverlayCloseButton.addEventListener('click', menuCloseButton);
  
          let activePage = document.querySelector('.active-page')
              menuItems.addEventListener('click', (event)=>{
                if(event.target.tagName == 'A'){
                  activePage.classList.remove('hidden')
                activePage.textContent = event.target.nextElementSibling.textContent
                console.log(activePage.textContent)
                }
              })
  
            
  });
  