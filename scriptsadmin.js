function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    const menuIcon = document.getElementById('menuIcon').querySelector('img');

    // Alternar la clase "show" para el menú desplegable
    menu.classList.toggle('show');

    // Cambiar el ícono del menú con una rotación
    if (menu.classList.contains('show')) {
        menuIcon.classList.add('rotate');
    } else {
        menuIcon.classList.remove('rotate');
    }
}