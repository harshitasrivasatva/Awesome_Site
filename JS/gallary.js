// ---- GALLARY ----

const images = document.querySelectorAll('.myimg');

images.forEach(img => {
    img.addEventListener('click', ()=> {
        removeLargeImg();
       
        img.classList.add('active');
    });
});


function removeLargeImg(){
    images.forEach(img => {
        img.classList.remove('active');
    })
}
