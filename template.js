const openModalButton = document.getElementById("open-modal");
const modalWindowOverlay = document.querySelector(".popup");
const showModalWindow = () => {
    modalWindowOverlay.classList.add('active');
}
openModalButton.addEventListener("click", showModalWindow);


const closeModalButton = document.getElementById("close-modal");
const closeModalWindow = () => {
    modalWindowOverlay.classList.remove('active');
}
closeModalButton.addEventListener("click", closeModalWindow);

const popupOverlay = (event) =>{
    if (event.target === modalWindowOverlay) {
        modalWindowOverlay.style.display = 'none';
    }
}
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




