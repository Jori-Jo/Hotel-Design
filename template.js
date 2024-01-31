

/*Popup in Vanilla JS for one button*/
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


// Popup in Vanilla  JS for two buttons
// const button = document.querySelectorAll('.button')
// const popup = document.querySelector('.popup')
// const closeWindow = document.querySelector('.close-modal')

// function addActive(element) {
//     element.classList.add('active');
// }

// function removeActive(element){
//     element.classList.remove('active');
// }

// button.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         addActive(popup);
//     })
// })

// closeWindow.addEventListener('click', () => {
//     removeActive(popup);
// })

// popup.addEventListener('click', function (event) {
//     if (event.target === popup) {
//         removeActive(popup);
//     }
// });

/*Popup in Vanila JS in IIFE*/

    (function () {
        const popup = () => {
            const DOM = {
                button: null, //.button
                popup: null, //.popup
                closeWindow: null // .close-modal
            }

            const addActive = () => {
                DOM.popup.classList.add('active');
            }

            const removeActive = () => {
                DOM.popup.classList.remove('active');
            }

            const cacheDOM = () => {
                DOM.button = document.querySelectorAll('.button')
                DOM.popup = document.querySelector('.popup')
                DOM.closeWindow = document.querySelector('.close-modal')
            }

            const evenListeners = () => {
                //add event 'click' for all the buttons with class button
                DOM.button.forEach((btn) => {
                    btn.addEventListener('click', () => {
                        addActive();
                    })
                })

                // add event to close popup
                DOM.closeWindow.addEventListener('click', () => {
                    removeActive();
                })

                //add event to close popup on outside click
                DOM.popup.addEventListener('click', function (event) {
                    if (event.target === DOM.popup) {
                        removeActive();
                    }
                });

            }
            const init = () => {
                cacheDOM()
                evenListeners()
            }
            return { init }
        }

        document.addEventListener('DOMContentLoaded', popup().init)
    })()




