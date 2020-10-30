let backDrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let button = document.querySelectorAll('.plan .button')
let toggleButton = document.querySelector('.toggle-button')
let sideNav = document.querySelector('.mobile-nav')
let modalNoButton = document.querySelector('.modal__action--negative')

//Display the modal on each button click
for ( let i = 0; i < button.length; i++ ){
  button[i].addEventListener('click', () => {
    // backDrop.style.display = 'block'     //Inline Styling Approach using JavaScript

      backDrop.style.display = 'block'  
      modal.classList.add('open-modal')
      // backDrop.style.display = 'block'
      setTimeout(function(){
        backDrop.classList.add('open-backdrop')
      },10)
  })
}


//Function to open the backdrop and sidenav after the toggle button is pressed
toggleButton.addEventListener('click', () => {

//JS Hack to make the backdrop transition appear slowly on button click 
  backDrop.style.display = 'block' //backDrop style is set to display block so that the animation effect of opacity property is watched by the transition property 
                                   //after the below open-backdrop class is added to the backdrop class. 
  setTimeout(function(){           //Also adding the open-backdrop class to backdrop class is delayed by 10ms to make the opacity animation effect for backdrop  
    backDrop.classList.add('open-backdrop')  // - bring into action
  },10)
 
  sideNav.classList.add('open-nav')  //We can delay the sideNav effect aswell but not necessary and depends on our needs. 
  
})


backDrop.addEventListener('click', closeModalBackdropSideNav)

//Close the modal if open
if(modal){ //Check if modal is already open
  modalNoButton.addEventListener('click', closeModalBackdropSideNav) //Close the modal when NO button on the modal is pressed 
}


//Function to close Modal, Backdrop, and SideNav
function closeModalBackdropSideNav(){

  // backDrop.style.display = 'none'   //Change the inline property of the backDrop class to none, to make backdrop disappear by clicking on the backDrop

  //Modal and backdrop: Opacity animation effect on closing. 
    if(modal){
          //Delay the backdrop style to display none for 2 seconds. 
          setTimeout(function(){  //Note: We delay the backdrop style to display none because normally as soon as we close the modal & the sidenav -
            backDrop.style.display = 'none'; // - this display none makes the backdrop disappears very fast and we cant watch the opacity animation effect. 
          },2000)
          
          //Delay the removing of modal, backdrop and sideNav to 10ms to observe the animation effect of opacity. 
          setTimeout(function(){
            modal.classList.remove('open-modal')
            backDrop.classList.remove('open-backdrop')
            sideNav.classList.remove('open-nav')
          },10)

          // sideNav.classList.remove('open-nav')
  
    }

    //Sidenav and backdrop: Opacity animation effect on closing.
    setTimeout(function(){
      backDrop.style.display = 'none';
    },2000)

    //Removes the open-backdrop class that is applied to backdrop class after the backdrop is given a click. 
    setTimeout(function(){
      backDrop.classList.remove('open-backdrop')
    },10)

    //Removes the open-nav class that is applied to mobile-nav class after the backdrop is given a click.
    sideNav.classList.remove('open-nav')

}




