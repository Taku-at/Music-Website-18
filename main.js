// Nav
const menuBtn = document.getElementById('menuBtn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('show');
    menu.classList.toggle('show');
    console.log('work')
})


// Button Side
const sideBtn = document.getElementById('sideMenuBtn');
const sideMenuIcons = document.querySelector('.navbar__icons');

// Need show and active;

sideBtn.addEventListener('click', () => {
    sideBtn.classList.toggle('active');

    showIcons = sideMenuIcons;
    showIcons.classList.contains('show') ? showIcons.classList.remove('show') : showIcons.classList.add('show');
})
