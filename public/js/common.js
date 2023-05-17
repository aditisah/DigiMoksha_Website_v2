
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
            menu.addEventListener("touchstart",(e)=>{
              e.preventDefault()
              if(window.innerWidth<=768){
                if (touchstartX === undefined) {
      touchstartX = e.touches[0].clientX;
      menuItems.classList.remove("hidden");
      menu.classList.add("hidden");
    } else {
      touchstartX = undefined;
      menuItems.classList.add("hidden");
      menu.classList.remove("hidden");
    }
              }
            })
