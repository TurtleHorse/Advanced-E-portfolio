let isModalOpen = false
let constrastToggle= false
const scaleFactor = 1 / 20

// TRACKS MOUSE LOCATION FOR BACKGROUND MOVEMENT
function moveBackground(event){
    const shapes = document.querySelectorAll( ".shape")
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor
    
    for( let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}
//DARK THEME ON AND OFF
function toggleConstrast(){
    constrastToggle = !constrastToggle
    if(constrastToggle) {
        document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
    }
}
// EMAIL FUNCTION TO SEND EMAILS 
function contact(event) {
  event.preventDefault()
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
  loading.classList += " modal__overlay--visible"
  emailjs
     .sendForm(
         'service_1duemkm',
         'template_62kay1z',
         event.target,
         'ArbYuZ83c2qqJUhn9'           
).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
}).catch(()=>{
    loading.classList.remove("modal__overlay--visible");
    alert(
        "The email is temporarily unavailable. Please contact me directly at christopherjordan30@aol.com"
    );
})
}

//MODAL OPEN AND CLOSE
function toggleModal(){
    if(isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    //toggle modal
    document.body.classList += " modal--open"
}