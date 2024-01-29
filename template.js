// const modalWindowOverlay = document.querySelector(".popup");
// const openModalButton = document.getElementById("open-modal");
// const closeModalButton = document.getElementById("close-modal");

// const showModalWindow = () => {
//     modalWindowOverlay.classList.add('active');
// }

// const closeModalWindow = () => {
//     modalWindowOverlay.classList.remove('active');
// }

// const popupOverlay = (event) =>{
//     if (event.target === modalWindowOverlay) {
//         modalWindowOverlay.classList.remove('active');
//     }
// }
// openModalButton.addEventListener("click", showModalWindow);
// closeModalButton.addEventListener("click", closeModalWindow);
// modalWindowOverlay.addEventListener("click", popupOverlay);


const modalWindowOverlay = document.querySelector(".popup");

const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.getElementById("close-modal");

const openModalButton1 = document.getElementById("open-modal1");
const closeModalButton1 = document.getElementById("close-modal1");

const showModalWindow = () => {
    modalWindowOverlay.classList.add('active');
}

const closeModalWindow = () => {
    modalWindowOverlay.classList.remove('active');
}

const showModalWindow1 = () => {
    modalWindowOverlay.classList.add('active');
}

const closeModalWindow1 = () => {
    modalWindowOverlay.classList.remove('active');
}


const popupOverlay = (event) =>{
    if (event.target === modalWindowOverlay) {
        modalWindowOverlay.classList.remove('active');
    }
}
openModalButton.addEventListener("click", showModalWindow);
closeModalButton.addEventListener("click", closeModalWindow);
modalWindowOverlay.addEventListener("click", popupOverlay);

openModalButton1.addEventListener("click", showModalWindow1);
closeModalButton1.addEventListener("click", closeModalWindow1);


// const openModalButtons = document.querySelectorAll(".open-modal");
// const closeModalButtons = document.querySelectorAll(".close-modal");
// const modalWindowOverlays = document.querySelectorAll(".popup");


// openModalButtons.forEach(button => {
//     button.addEventListener("click", function() {
//         const popupId = this.getAttribute("data-popup");
//         const popup = document.getElementById(popupId);
//         popup.classList.add('active');
//     });
// });

// closeModalButtons.forEach(button => button.addEventListener("click", function() {
//     this.closest('.popup').classList.remove('active');
// }));

// document.addEventListener('DOMContentLoaded', function () {
//     const showPopupBtn = document.getElementById('open-modal');
//     const popupOverlay = document.querySelector(".popup");
//     const closePopupBtn = document.getElementById('close-modal');

//     showPopupBtn.addEventListener('click', function () {
//         popupOverlay.style.display = 'flex';
//     });

//     closePopupBtn.addEventListener('click', function () {
//         popupOverlay.style.display = 'none';
//     });

//     popupOverlay.addEventListener('click', function (event) {
//         // Check if the clicked element is the overlay (background) and hide the popup
//         if (event.target === popupOverlay) {
//             popupOverlay.style.display = 'none';
//         }
//     });
    
// });




