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

    const menubar = () => {

        const DOM = {
            openButton: null, //menu button
            showMenu: null //show menu
        };

        const displayMenu = () => {
            DOM.showMenu.classList.toggle('show');
        };

        // const hideMenu = () => {
        //     DOM.showMenu.classList.remove('show')
        // }

        const cacheDOM = () => {
            DOM.openButton = document.querySelector('.bars')
            DOM.showMenu = document.querySelector('.menu-bar')
        };

        const eventListeners = () => {
            DOM.openButton.addEventListener('click', displayMenu)
            // DOM.showMenu.addEventListener('click', function (event) {
            //     if (event.target === DOM.showMenu) {
            //         hideMenu();
            //     }
            // })
        }

        const init = () => {
            cacheDOM()
            eventListeners()
        }

        return { init }
    }

    document.addEventListener('DOMContentLoaded', menubar().init)
})()

/*HAmburger menu*/

// const openButton = document.querySelector('.bars');
// const showMenu = document.querySelector('.menu-bar');


// const openMenu = () => {
//     showMenu.classList.toggle('show');
// }
// const closeMenu = () => {
//     showMenu.classList.remove('show');
// }

// openButton.addEventListener("click", openMenu);





