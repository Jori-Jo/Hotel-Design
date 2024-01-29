const modalWindowOverlay = document.querySelector(".popup");
const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.getElementById("close-modal");

const showModalWindow = () => {
    modalWindowOverlay.classList.add('active');
}

const closeModalWindow = () => {
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




