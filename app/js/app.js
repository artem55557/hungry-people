document.addEventListener("DOMContentLoaded", function() {
  const swiperSpec = new Swiper('.swiper-container', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const burger = document.querySelector('.burger-btn')
  const menu = document.querySelector('.menu')

  if(burger) {
    burger.addEventListener('click', event => {
      event.preventDefault()
      burger.classList.toggle('open')
      menu.classList.toggle('menu--open')
    })
  }

  const anchors = document.querySelectorAll('.menu__link')
  let animationTime = 300;
  let framesCount = 20;

  anchors.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const activeLink = document.querySelector('.menu__link.active');

      if(activeLink) {
        activeLink.classList.remove('active');
      }

      item.classList.add('active')
      let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

      let scroller = setInterval(function() {
        let scrollBy = coordY / framesCount;

        if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
          window.scrollBy(0, scrollBy);
          item.classList.add('active')
        } else {
          window.scrollTo(0, coordY);
          clearInterval(scroller);
        }
      }, animationTime / framesCount);
    });
  });

  window.addEventListener('scroll', () => {
    const topline = document.querySelector('.firstscreen__top-line')
    if (window.pageYOffset >= 100) {
      topline.classList.add('fixed')
    } else {
      topline.classList.remove('fixed')
    }
  })



});
