(function () {

    /*Popup in Vanila JS in IIFE*/
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


    /*Hamburger Menu */
    const menubar = () => {

        const DOM = {
            /*Menu*/
            openButton: null, //menu button
            showMenu: null, //show menu
            closeButton: null, //close menu

            /*Sub-menu*/
            subBtn: null, //About Button
            showSubMenu: null  //SubMenu SHow

        };

        const displayMenu = () => {
            DOM.showMenu.classList.add('show')
        };

        const hideMenu = () => {
            DOM.showMenu.classList.remove('show');
        }

        /*Show Submenu*/
        const displayabout = () => {
            DOM.showSubMenu[0].classList.toggle('menu-sub')
        }

        const displayrooms = () => {
            DOM.showSubMenu[1].classList.toggle('menu-sub')
        }

        const cacheDOM = () => {
            DOM.openButton = document.querySelector('.bars')
            DOM.showMenu = document.querySelector('.menu-bar')
            DOM.closeButton = document.querySelector('.closeBtn')

            DOM.subBtn = document.querySelectorAll('.open-sub')
            DOM.showSubMenu = document.querySelectorAll('.show-submenu')
        };

        const eventListeners = () => {
            DOM.openButton.addEventListener('click', displayMenu)
            DOM.closeButton.addEventListener('click', hideMenu)
        }

        const init = () => {
            cacheDOM()
            eventListeners()
        }

        return { init }
    }

    document.addEventListener('DOMContentLoaded', menubar().init)

    const submenu = () => {

        const DOM = {
            subBtn: null, //About Button
            showSubMenu: null  //SubMenu SHow
        }

        const displaySubMenu = () => {
            DOM.showSubMenu.classList.toggle('active-menu')
          
        }
        const cacheDOM = () => {

            DOM.subBtn = document.querySelectorAll('.open-sub')
            DOM.showSubMenu = document.querySelectorAll('.show-submenu')
        };

        const eventListeners = () => {

            // for( var i=0;i<(DOM.subBtn).length;i++){
            //     (DOM.subBtn)[i].addEventListener("click", displaySubMenu);
            // }

            DOM.subBtn.forEach((subButton, index) => {
                subButton.addEventListener('click', displaySubMenu())
            })
        }

        const init = () => {
            cacheDOM()
            eventListeners()
        }

        return { init }
    }
    document.addEventListener('DOMContentLoaded', submenu().init)

})()







