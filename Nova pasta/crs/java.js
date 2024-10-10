const menu = document.getElementById('menu');
const toggleBtn = document.getElementById('toggle-btn');
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Link clicado: ' + e.target.textContent);
    });
});


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
