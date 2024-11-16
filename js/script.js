// Toggle 
const navCen = document.querySelector('.navbar-cen');
// If menu diklik
document.querySelector('.menu-bar').
onclick = () => {
    navCen.classList.toggle('active');
}
// klik diluar sidebar menghilangkan menu
const menu = document.querySelector('.menu-bar');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navCen.contains(e.target)) {
        navCen.classList.remove('active');
    }
});

// Navbar active
const navBar = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle('scrolling-active', windowPosition);
})