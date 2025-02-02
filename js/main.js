/*---------------------------- Toggle Menu ----------------------------*/
const navMenus = document.querySelectorAll('header [name="header-links"]');
const navLink = document.querySelectorAll('header [name="header-links_inline-ink"]');
const hamburger = document.getElementById('hamburger');
const hamburgerIcons = hamburger.querySelectorAll('svg');

hamburger.addEventListener('click', () => {
    hamburgerIcons.forEach((hamburgerIcon) => {
        hamburgerIcon.classList.toggle('block');
        hamburgerIcon.classList.toggle('hidden');
    });
    navMenus.forEach((navMenu) => {
        navMenu.classList.toggle('block');
        navMenu.classList.toggle('hidden');
    });
});