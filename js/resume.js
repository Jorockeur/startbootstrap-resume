(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  //custom rainbow colors javascript
  const body = document.getElementById('page-top');
  const gradientCollection = document.getElementsByClassName('gradient');
  const gradientBackgroundCollection = document.getElementsByClassName('gradient-bg');
  const animationScaleCollection = document.getElementsByClassName('scale-animation');
  const hslHOffset = 110;
  const hslSOffset = 70;
  const hslLOffset = 42;
  let gradientColor = `hsl(${hslHOffset}, ${hslSOffset}%, ${hslLOffset}%)`;

  const setGradientColor = (base, elements, scrollTop, windowHeight) => {
    let ratio = ((360 / base.clientHeight * (scrollTop + (scrollTop / base.clientHeight * windowHeight))) + hslHOffset);
    gradientColor = `hsl(${ratio}, ${hslSOffset}%, ${hslLOffset}%)`;

    if (elements === gradientCollection) {
      for (let element of elements) {
        element.style.color = gradientColor;
      }
      return;
    }

    for (let element of elements) {
      element.style.backgroundColor = gradientColor;
    }
  };

  const setScale = (element, set) => {
    if (set) {
      element.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.1)' },
      ], {
        duration: 200,
        easing: 'ease-in-out'
      });
      element.style.transform = `scale(1.1)`;
      return;
    }
    element.animate([
      { transform: 'scale(1.1)' },
      { transform: 'scale(1)' },
    ], {
      duration: 200,
      easing: 'ease-in-out'
    });
    element.style.transform = `scale(1)`;
  };

  window.addEventListener('DOMContentLoaded', e => {
    const windowHeight = e.target.scrollingElement.clientHeight;
    const scrollTop = e.target.scrollingElement.scrollTop;
    setGradientColor(body, gradientCollection, scrollTop, windowHeight);
  });

  window.addEventListener('scroll', e => {
    const windowHeight = e.target.scrollingElement.clientHeight;
    const scrollTop = e.target.scrollingElement.scrollTop;
    setGradientColor(body, gradientCollection, scrollTop, windowHeight);
  });

  window.addEventListener('DOMContentLoaded', e => {
    const windowHeight = e.target.scrollingElement.clientHeight;
    const scrollTop = e.target.scrollingElement.scrollTop;
    setGradientColor(body, gradientBackgroundCollection, scrollTop, windowHeight);
  });

  window.addEventListener('scroll', e => {
    const windowHeight = e.target.scrollingElement.clientHeight;
    const scrollTop = e.target.scrollingElement.scrollTop;
    setGradientColor(body, gradientBackgroundCollection, scrollTop, windowHeight);
  });

  for (let element of animationScaleCollection) {
    element.addEventListener('mouseover', () => setScale(element, true));
    element.addEventListener('mouseout', () => setScale(element, false));
  }
})(jQuery); // End of use strict
