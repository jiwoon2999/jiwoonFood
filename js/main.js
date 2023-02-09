// 메뉴 리스트 마우스 엔터, 리브시 서브메뉴 블록 or 논

const menuList = document.querySelectorAll('.menu-list');
const subMenu = document.querySelectorAll('.navbar-submenu__content');

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

// 메인슬라이드
const mainSlide = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    text: '',
  },
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    text: '',
  },
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
    text: '',
  },
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    text: '',
  },
];

const mainSlideContainer = document.querySelector('.main-slide__container');

mainSlide.forEach((slide, index) => {
  const setSlide = `<div><img src=${slide.img}></div>`;
});
