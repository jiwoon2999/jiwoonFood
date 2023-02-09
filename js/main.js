const menuList = document.querySelectorAll('.menu-list');
const subMenu = document.querySelectorAll('.navbar-submenu__content');
console.log(menuList);

menuList.forEach((menu, i) => {
  menu.addEventListener('mouseenter', () => {
    subMenu.forEach((sub, ii) => {
      if (i === ii) {
        sub.style.display = 'block';
      } else if (i !== ii) {
        sub.style.display = 'none';
      }
      menu.addEventListener('mouseleave', () => {
        sub.style.display = 'none';
      });
    });
  });
});
