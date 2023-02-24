'use strict';
window.addEventListener("DOMContentLoaded", ()=>{
    const galleryParent = document.querySelector(".gallery");
    const galleryLink = document.querySelectorAll(".gallery__link");
    const galleryContent = document.querySelectorAll(".gallery-content");
    function hideTabsContent(){
        galleryContent.forEach(item =>{
            item.classList.remove("show")
            item.classList.add("hide")
        });
    }
    function showTabsContent(i = 0){
        galleryContent[i].classList.remove("hide");
        galleryContent[i].classList.add("show", 'active-content');

    }
    hideTabsContent();
    showTabsContent();
    galleryParent.addEventListener("click", (event)=>{
        const target = event.target;
        if (target && target.classList.contains('gallery__link')) {
            galleryLink.forEach((item, idx)=>{
                if (target == item) {
                    hideTabsContent();
                    showTabsContent(idx);
                }
            })
        }
    })
    const navbarNav = document.querySelector(".navbar-nav")
    const burger = document.querySelector(".burger");
    burger.addEventListener('click', ()=>{
        navbarNav.classList.toggle("activeNavbar");
    })
})