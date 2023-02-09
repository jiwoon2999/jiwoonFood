// 메뉴 리스트 마우스 엔터, 리브시 서브메뉴 블록 or 논

const menuList = document.querySelectorAll('.menu-list');
const subMenu = document.querySelectorAll('.navbar-submenu__content');
console.log(menuList);

menuList.forEach((menu, i) => {
  menu.addEventListener('mouseenter', () => {
    subMenu.forEach((sub, ii) => {
      if (i === ii) {
        sub.style.display = 'block';
        sub.style.transition = 'all 1s';
      } else if (i !== ii) {
        sub.style.display = 'none';
      }
      menu.addEventListener('mouseleave', () => {
        sub.style.display = 'none';
      });
    });
  });
});
