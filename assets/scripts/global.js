
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


function Zooom(){
     
        document.addEventListener("DOMContentLoaded", function() {
            const imagens = document.querySelectorAll('.lg3');
            let lightGalleryInstance2;

            imagens.forEach(img => {
                const wrapper = document.createElement('a');
                wrapper.href = img.src;
                wrapper.dataset.src = img.src;
                wrapper.classList.add('lightgallery-item3');

                img.parentNode.insertBefore(wrapper, img);
                wrapper.appendChild(img);
            });

            lightGalleryInstance2 = lightGallery(document.body, {
                selector: '.lightgallery-item3',
                plugins: [lgZoom, lgThumbnail],
                licenseKey: '0000-0000-000-0000',
                speed: 300,
            });
            
            const zoomButton = document.querySelector('.swiper-button-zoom-implantacao');

            if(zoomButton){
                zoomButton.addEventListener("click",()=>{
                    const swiperContainer = document.querySelector('.swiperImplatacao');

                    if(swiperContainer){
                        const activeSlide = swiperContainer.querySelector('.swiper-slide-active');

                        if(activeSlide){
                            const lightGalleryItem = activeSlide.querySelector('.lightgallery-item3');

                            if(lightGalleryItem){
                                const allLightGalleryItems = document.querySelectorAll('.lightgallery-item3');
                                let index = -1;

                                allLightGalleryItems.forEach((item, i) => {
                                    if (item === lightGalleryItem) {
                                        index = i;
                                    }
                                });

                                if (index !== -1 && lightGalleryInstance2) {
                                    lightGalleryInstance2.openGallery(index);
                                }
                            }
                        }
                    }
                })
            }
        });
    
}

Zooom()

































menuMobile()