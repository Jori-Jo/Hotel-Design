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

/*HAmburger menu*/

const openButton = document.querySelector('.menu-bar');
const showMenu = document.querySelector('.hamburger');
// const closeButton = document.querySelector('.close-button')

const openMenu = () =>{
    showMenu.classList.add('active');
}

openButton.addEventListener("click", openMenu);
// const closeMenu = () =>{
//     showMenu.classList.remove('active');
// }

