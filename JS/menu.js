// ----  MENU ----

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
    container.classList.add('active-left');
})

left.addEventListener('mouseleave', () => {
    container.classList.remove('active-left');
})


right.addEventListener('mouseenter', () => {
    container.classList.add('active-right');
})

right.addEventListener('mouseleave', () => {
    container.classList.remove('active-right');
})



