
const toggleSideBar = document.querySelector('.toggle_btn');
const sideBar = document.querySelector('.aside');

toggleSideBar.addEventListener('click', () => {
    sideBar.classList.toggle('toggle_side');
});