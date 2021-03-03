// ---- HOME ----

const open = document.querySelector('.open');
const close = document.querySelector('.close');
const home = document.querySelector('.home');

open.addEventListener('click',() => {
    home.classList.add('show-nav');
});

close.addEventListener('click', () => {
    home.classList.remove('show-nav');
})







