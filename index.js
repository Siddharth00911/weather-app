const toogleButton = document.getElementsByClassName('toogle-button')[0];
const navLinks = document.getElementsByClassName('navBar-links')


toogleButton.addEventListener('click', function () {
    navLinks.classList.toogle('active')
});

console.log('Toogle Button', toogleButton);
