/* document.addEventListener('DOMContentLoaded', function() {
    const menuBar = document.getElementById('menu-bar');
    const navItems = document.getElementById('nav-items');
    
    menuBar.addEventListener('click', function() {
        navItems.classList.toggle('active');
    });
    
    // Close menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navItems.classList.remove('active');
        });
    });
}); */

document.addEventListener('DOMContentLoaded', function () {
    const menuBar = document.getElementById('menu-bar');
    const navItems = document.getElementById('nav-items');

    menuBar.addEventListener('click', function () {
        // Toggle the 'active' class on nav-items
        navItems.classList.toggle('active');

        // Toggle between bars and times icon
        if (this.classList.contains('fa-bars')) {
            this.classList.remove('fa-bars');
            this.classList.add('fa-times');
        } else {
            this.classList.remove('fa-times');
            this.classList.add('fa-bars');
        }
    });
});