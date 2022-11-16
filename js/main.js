const searchElement = document.querySelector('.search');
const searchInputEl = searchElement.querySelector('input');

searchElement.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchElement.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', function() {
  searchElement.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
})

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));
// _.throttle(함수, 시간)

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
 //gsap.to(요소, 지속시간, 옵션)
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index + 1) * .7
  });
});
/* new Swiper(선택자, 옵션)*/
new Swiper('.notice-line .swiper-container', {
 direction: 'vertical',
 autoplay: true,
 loop: true
});

new Swiper('.promotion .swiper-container'), {
  slidePerView: 3,
  spaceBetween: 10,
  centeredSides: true,
  loop: true,
  autoplay: {
    delay: 500
  }
}