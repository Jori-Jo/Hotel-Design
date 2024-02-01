

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
            openWindow: null, //.button
            popups: null, //.popup
            closeWindow: null // .close-modal
        }

        const openPopup1 = () => {
            DOM.popups[0].classList.add('active');
        }
        const openPopup2 = () => {
            DOM.popups[1].classList.add('active');
        }

        const closePopup = () => {
            DOM.popups.forEach((popup) => {
                popup.classList.remove('active')
            })
        }
        const cacheDOM = () => {
            DOM.openWindow = document.querySelectorAll('.button')
            DOM.popups = document.querySelectorAll('.popup')
            DOM.closeWindow = document.querySelectorAll('.close-modal')
        }

        const evenListeners = () => {

            DOM.openWindow[0].addEventListener('click', openPopup1)
            DOM.openWindow[1].addEventListener('click', openPopup2)

            DOM.closeWindow.forEach((closeBtn) => {
                closeBtn.addEventListener('click', closePopup)
            });


            DOM.popups.forEach((popup) => {
                popup.addEventListener('click', function (event) {
                    if (event.target === popup) {
                        closePopup();
                    }
                })
            })

        }
        const init = () => {
            cacheDOM()
            evenListeners()
        }
        return { init }
    }
    document.addEventListener('DOMContentLoaded', popup().init)
})()



