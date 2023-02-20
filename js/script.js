'use strict';
window.addEventListener("DOMContentLoaded", ()=>{
    const firstBtn = document.getElementById("first_content");
    const secondBtn = document.getElementById("second_content");
    const thirdBtn = document.getElementById("third_content");
    const galleryContent = document.querySelectorAll("gallery-content");
    document.querySelector("active_content").classList.add("show");
    firstBtn.addEventListener('click', ()=>{
        document.querySelector("active_content").classList.remove("show");
        document.querySelector("active_content").classList.add("hide");
        galleryContent[0].classList.remove("hide")
        galleryContent[0].classList.add("show")
    })
})