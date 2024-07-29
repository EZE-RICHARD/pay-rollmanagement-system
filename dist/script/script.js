
const toggleSideBar = document.querySelector('.toggle_btn');
const sideBar = document.querySelector('.aside');

toggleSideBar.addEventListener('click', () => {
    sideBar.classList.toggle('toggle_side');
});

document.querySelectorAll(".menu_item").forEach(item => {
    item.addEventListener('mouseover', () => {
        document.querySelectorAll(".menu_item").forEach(el=>el.classList.remove("active_nav"))
        item.classList.add("active_nav");
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('active');
      });
});

let currentActive = document.querySelector('.menu_item.active_nav')

document.querySelectorAll('.menu_item').forEach(item => {
    item.addEventListener('click', () => {
      if (currentActive) {
        currentActive.classList.remove('active');
      }
      item.classList.add('active');
      currentActive = item;
    });

    item.addEventListener('mouseover', () => {
      if (currentActive !== item) {
        item.classList.add('active');
      }
    });

    item.addEventListener('mouseleave', () => {
      if (currentActive !== item) {
        item.classList.remove('active');
      }
    });
  });


