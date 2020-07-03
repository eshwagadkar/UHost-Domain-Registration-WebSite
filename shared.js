let backDrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let button = document.querySelectorAll('.plan .button')
let toggleButton = document.querySelector('.toggle-button')
let sideNav = document.querySelector('.mobile-nav')
let modalNoButton = document.querySelector('.modal__action--negative')


for ( let i = 0; i < button.length; i++ ){
  button[i].addEventListener('click', () => {
    // backDrop.style.display = 'block'     //Inline Styling Approach using JavaScript
    // modal.style.display = 'block'
      // modal.className = 'open'   //overrides the applied class
      modal.classList.add('open')
      backDrop.classList.add('open')
  })
}

backDrop.addEventListener('click', closeModal)
if(modal){
  modalNoButton.addEventListener('click', closeModal)
}


function closeModal(){
  // backDrop.style.display = 'none'   //Change the inline property of the backDrop class to none, to make backdrop disappear by clicking on the backDrop
  // modal.style.display = 'none'      // Make Modal Disappear 
  // sideNav.style.display = 'none'    // Make the sidenav Disappear
  if(modal){
    modal.classList.remove('open')
  }
  backDrop.classList.remove('open')
  sideNav.classList.remove('open')
}


toggleButton.addEventListener('click', () => {
  // sideNav.style.display = 'block'
  // backDrop.style.display = 'block'
  backDrop.classList.add('open')
  sideNav.classList.add('open')
})
