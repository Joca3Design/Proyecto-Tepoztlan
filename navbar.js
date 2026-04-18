// LAYOUT
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const nav = document.getElementById('navMenu');

openBtn.addEventListener('click', () => {
    nav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
});
