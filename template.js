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

        };

        const displayMenu = () => {
            DOM.showMenu.classList.add('show')
        };

        const hideMenu = () => {
            DOM.showMenu.classList.remove('show');
        }

        const cacheDOM = () => {
            DOM.openButton = document.querySelector('.bars')
            DOM.showMenu = document.querySelector('.menu-bar')
            DOM.closeButton = document.querySelector('.closeBtn')
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

    //Submenu//
    const submenu = () => {

        const DOM = {
            subBtn: null, //About Button
            showSubMenu: null,  //SubMenu SHow
            showSvg:null//
        }

        const displaySubMenu = (event) => {
            event.preventDefault();
            let parentEl = event.currentTarget.parentElement;
            let childEl = parentEl.querySelector('.show-submenu');
            childEl.classList.toggle('active-menu');
        }
        
        const cacheDOM = () => {
            DOM.subBtn = document.querySelectorAll('.open-sub a')
            DOM.showSubMenu = document.querySelectorAll('.open-sub .show-submenu')
            DOM.showSvg = document.querySelectorAll('.open-sub .open-svg');
        };

        const eventListeners = () => {
            DOM.subBtn.forEach((subButton) => {
                subButton.addEventListener('click', displaySubMenu)
            })

            DOM.showSvg.forEach((svg) => {
                svg.addEventListener('click', displaySubMenu);
            });
        }

        const init = () => {
            cacheDOM()
            eventListeners()
        }

        return { init }
    }
    document.addEventListener('DOMContentLoaded', submenu().init)

    const parallax = () => {

        const DOM = {
            parallaxImage: null, // About Parallax Image
            parallaxText:null, //About Parallax Text
        }

        const cacheDOM = () => {
            DOM.parallaxImage = document.getElementById('parallax-image');
            DOM.parallaxText = document.getElementById('parallax-text');
        }

        const moveParallaxImg= () => {
            const scrollPosition = window.scrollY;
            DOM.parallaxImage.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
        }

        const moveParallaxTxt= () => {
            const scrollPosition = window.scrollY;
            DOM.parallaxText.style.transform = 'translateY(' + scrollPosition * (-0.2) + 'px)translate(-50%, -50%)';
        }

        const eventListeners = () => {
            window.addEventListener('scroll', moveParallaxImg);
                window.addEventListener('scroll', moveParallaxTxt);

        }

        const init = () => {
            cacheDOM()
            eventListeners()
        }
        return { init }
    }

    document.addEventListener('DOMContentLoaded', parallax().init)


})()

// document.addEventListener('DOMContentLoaded', function () {
//     const parallaxLayer = document.getElementById('parallax-layer');

//     window.addEventListener('scroll', function () {
//         const scrollPosition = window.scrollY;
//         parallaxLayer.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
//     });
// });







