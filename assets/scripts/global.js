
//Script para funcionamento do menu dropdown
function menuMobile(){
    document.addEventListener('DOMContentLoaded', () => {
            const toggleButton = document.querySelector('.toggle-menu-mobile');
            const navElement = document.getElementById('menuPrincipal'); // O elemento <nav>

            if (toggleButton && navElement) {
                toggleButton.addEventListener('click', () => {
                    navElement.classList.toggle('menu-open');
                });

                const navLinks = navElement.querySelectorAll('ul li a');

                navLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        navElement.classList.remove('menu-open');
                    });
                });
            }
        });

}




































menuMobile()