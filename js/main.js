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

const menuBtn = document.querySelector('.menu-btn');
const menuModal = document.querySelector('.menu-modal__container');
const menuOpacity = document.querySelector('.menu-opacity');
let count = 0;
menuBtn.addEventListener('click', () => {
  count++;
  if (count % 2 === 1) {
    menuModal.style.top = '3.2rem';
  } else {
    menuModal.style.top = '-15rem';
  }
});

// main 슬라이드
const slideBtn = document.querySelectorAll('.slide-btn');
const slideContainer = document.querySelector('.slide-container');
const slide = document.querySelector('.slide');
const slideItem = document.querySelectorAll('.slide-item');

let slideIndex = 0;
let maxIndex = slideItem.length - 1;

slideBtn.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    if (index === 1) {
      slideIndex++;
      if (slideIndex > maxIndex) {
        slideIndex = 0;
      }
    } else {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = maxIndex;
      }
    }
    slide.style.transform = `translateX(-${slideIndex * 100}vw)`;
  });
});

window.addEventListener('scroll', (e) => {
  const foodServiceImg = document.querySelector('.foodservice-img');
  const managementImg = document.querySelector('.management-img');
  const scrolly = window.scrollY;
  if (scrolly >= 1031) {
    foodServiceImg.style.opacity = '1';
    if (scrolly <= 1245) {
      const foodServiceTitle = document.querySelector('.business-foodservice h1');
      const foodServiceText = document.querySelector('.business-foodservice p');
      foodServiceTitle.animate(
        {
          transform: ['translateX(-50rem) rotate(20deg)', 'translateX(0) rotate(0deg)'],
        },
        {
          duration: 1000,
          iterations: 1,
          direction: 'normal',
          easing: 'ease',
        }
      );
      foodServiceText.animate(
        {
          transform: ['translateX(-50rem) rotate(20deg)', 'translateX(0) rotate(0deg)'],
        },
        {
          duration: 1000,
          iterations: 1,
          direction: 'normal',
          easing: 'ease',
        }
      );
    }
  }
  if (scrolly >= 1612) {
    managementImg.style.opacity = '1';
    if (scrolly <= 1788) {
      const managementTitle = document.querySelector('.business-foodmanagement h1');
      const managementText = document.querySelector('.business-foodmanagement p');

      managementTitle.animate(
        {
          transform: ['translateX(550rem) rotate(20deg)', 'translateX(0) rotate(0deg)'],
        },
        {
          duration: 1000,
          iterations: 1,
          direction: 'normal',
          easing: 'ease',
        }
      );
      managementText.animate(
        {
          transform: ['translateX(550rem) rotate(230deg)', 'translateX(0) rotate(0deg)'],
        },
        {
          duration: 1000,
          iterations: 1,
          direction: 'normal',
          easing: 'ease',
        }
      );
    }
  }
  // console.log(scrolly);
});
