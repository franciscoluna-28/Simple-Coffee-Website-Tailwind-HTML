// Selecciona los links del menú responsivo
const sidebarLinks = document.querySelectorAll('.sidebar a');

for (const link of sidebarLinks) {
  link.addEventListener('click', () => {
    // Oculta el menú responsivo
    document.querySelector('.sidebar').style.transform = 'translate:0';

    // Activa o desactiva el menú responsivo
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.querySelector('input').checked = !hamburgerMenu.querySelector('input').checked;
  });
}
