function toggleMenu() {
    var menuItems = document.querySelector('.menu-items');
    var menuToggle = document.querySelector('.menu-toggle');
    
    menuItems.classList.toggle('show');
    menuToggle.classList.toggle('active');
}