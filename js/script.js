// Hamburger menu functionallity (for smaller screens)
const btn = document.getElementById('menu-btn') // To target the button for the burger menu
const menu = document.getElementById('menu')    // To target the burger menu itself

btn.addEventListener('click', navToggle)        // To add an event listener to the button

function navToggle() {                          // The function which will run after clicking the button
  btn.classList.toggle('open')                  // The method toggle() add / removes the class of open (transforms the three lines of the burger menu into an X)
  menu.classList.toggle('flex')                 // The method toggle() add / removes the class of flex  (shows the menu)
  menu.classList.toggle('hidden')               // The method toggle() add / removes the class of hidden  (hides the menu)
}
