// --------------------ANIMATION-HOME--------------------
((d) => {
const $img = d.querySelectorAll('.home-hero-image img');

let x = 0
setInterval(() => {
  
  $img[x].classList.remove('hero-active')
  x++;
  
  if (x >= $img.length) {
    x = 0;
  }
  $img[x].classList.add('hero-active');
}, 7000);

})(document);


// --------------------MENU--------------------

((d) => {
  const $btnMenu = d.querySelector('.btn-menu')
  const $menu = d.querySelector('.menu')

  $btnMenu.addEventListener('click', (e) => {
    $btnMenu.firstElementChild.classList.toggle('none');
    $btnMenu.lastElementChild.classList.toggle('none');
    $menu.classList.toggle('menu-active')
  })
  
  d.addEventListener('click', (e) => {
    if (!e.target.matches('.menu a')) return false;
    
    $menu.classList.remove('menu-active');
    $btnMenu.firstElementChild.classList.add('none');
    $btnMenu.lastElementChild.classList.remove('none');
  });

})(document);

// --------------------SLIDER--------------------

((d) => {
  window.addEventListener('DOMContentLoaded', (e) => {

  new Glider (d.querySelector('.carousel-img'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    // draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.btn-p',
      next: '.btn-n'
    },  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 768,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: 2,
        itemWidth: 150,
        duration: 0.25
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        itemWidth: 150,
        duration: 0.25
      }
    }
  ]
    });
  })
})(document);

// --------------------IntersectionObserver--------------------
((d) => {
  const $sectionText = d.querySelectorAll('[data-text]')
  const $sectionImg = d.querySelectorAll('[data-img]');

  const loadSection = (entry, obs) => {
    entry.forEach((el) => {
    if(el.isIntersecting && el.target.matches('[data-img]')) {
      el.target.classList.add('a-animation')
    }
    if(el.isIntersecting && el.target.matches('[data-text]')) {
      el.target.classList.add('a-scale')
    }
  })
}

const obs = new IntersectionObserver (loadSection , {
  root: null,
  // rootMargin: '0px 0px -300px 0px' ,
  rootMargin: '0px 0px -350px 0px' ,
  // threshold: .1,
})

$sectionText.forEach((el) => obs.observe(el));
$sectionImg.forEach((el) => obs.observe(el));

})(document);