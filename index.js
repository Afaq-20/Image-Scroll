const imageEl = document.getElementById("bg-image");

function updateImage(){
    imageEl.style.opacity = 1 - window.pageYOffset / 500;
    imageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}

window.addEventListener("scroll", ()=>{
    updateImage();
})