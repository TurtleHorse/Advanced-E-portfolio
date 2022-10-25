let isModalOpen = false
let constrastToggle= false

function toggleConstrast(){
    constrastToggle = !constrastToggle
    if(constrastToggle) {
        document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
    }
}

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


function toggleModal(){
    if(isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    //toggle modal
    document.body.classList += " modal--open"
}