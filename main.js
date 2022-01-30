// Nav
const menuBtn = document.getElementById('menuBtn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('show');
    menu.classList.toggle('show');
    console.log('work')
})
