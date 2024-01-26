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





