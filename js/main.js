const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});


searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  
  if(window.scrollY> 500){
    // badgeEl.style.display = 'none';
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });

  } else {
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, 0.6, {
      opacity:  1,
      display: 'block'
    });

  }

}, 300));
// _.throttle(함수, 시간)

/* window.addEventListener('scroll', function(){
  console.log('scroll!');
});
 */


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7 ,   // 0.7 -> 1.4 -> 2.1 -> 2.7 초 뒤에 서서히 나타나게 
    opacity : 1
  });
});


new Swiper('.notice-line .swiper', {
  // Optional parameters
  direction: 'vertical',
  autoplay: true,
  loop: true 
});


new Swiper('.promotion .swiper-container', {
  // Optional parameters
  sliderPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true ,
  autoplay: {
    delay: 5000
  },
});