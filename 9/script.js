const menuActiv = document.querySelector('.menu_active');
const headerMenu = document.querySelector('.sidebar');

function toggleMenu() {
    menuActiv.classList.toggle('hidden');
}

headerMenu.addEventListener('click', toggleMenu);
