const menu = document.getElementById('menu');
const toggleBtn = document.getElementById('toggle-btn');

let isOpen = false;

const toggleMenu = () => {
    if (isOpen) {
        menu.style.left = '-250px';
        toggleBtn.style.right = '-50px'; // Botão fora da tela
    } else {
        menu.style.left = '0';
        toggleBtn.style.right = '0'; // Botão visível
    }
    isOpen = !isOpen;
};

toggleBtn.addEventListener('click', toggleMenu);
