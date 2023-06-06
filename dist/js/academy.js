//Academy page book seat button

let blockSeatBox = document.querySelector('.wrapper')
let blockSeatButton = document.querySelector('.icon')
let bookSeatText = document.querySelector('.book-seat-text')
let bookSeatIcon = document.querySelector('.book-seat-icon')
blockSeatBox.addEventListener('mouseover',()=>{
  bookSeatText.classList.remove('hidden')
  if(window.innerWidth<800){
    blockSeatButton.style.width = '300px'
  bookSeatText.style.width='220px'
  bookSeatIcon.style.right = '255px'
  bookSeatText.style.zIndex = '5'
  blockSeatButton.style.zIndex = '5'
  }else if(window.innerWidth>=800){
  blockSeatButton.style.width = '340px'
  bookSeatText.style.right='215px'
  bookSeatText.style.width='250px'
  bookSeatIcon.style.right = '470px'
  // blockSeatButton.style.zIndex = '5'
  }
})

blockSeatBox.addEventListener('mouseleave',()=>{
  blockSeatButton.style.width = ''
  bookSeatText.classList.add('hidden')
  bookSeatIcon.style.right = ''
})