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
  const elements = [];
  const socialNetworks = [];
  const hslHOffset = 110;
  const hslSOffset = 70;
  const hslLOffset = 42;

  const elementsCollection = document.getElementsByClassName('gradient');
  for (let element of elementsCollection) elements.push(element);

  const socialNetworksCollection = document.getElementsByClassName('gradient-bg');
  for (let socialNetwork of socialNetworksCollection) socialNetworks.push(socialNetwork);

  for (let element of elements) {
    if (element.tagName === 'NAV' || element.tagName === 'BUTTON') {
      element.style.backgroundColor = `hsl(${hslHOffset}, ${hslSOffset}%, ${hslLOffset}%)`;
      continue;
    }
    element.style.color = `hsl(${hslHOffset}, ${hslSOffset}%, ${hslLOffset}%)`;
  }

  for (let socialNetwork of socialNetworks) socialNetwork.style.color = `hsl(210, 9%, 31%)`;

  const setColour = (base, elements, scrollTop, windowHeight) => {
    let ratio = ((360 / base.clientHeight * (scrollTop + (scrollTop / base.clientHeight * windowHeight))) + hslHOffset);
    let finalColour = `hsl(${ratio}, ${hslSOffset}%, ${hslLOffset}%)`;
    for (let element of elements) {
      if (element.tagName === 'NAV' || element.tagName === 'BUTTON') {
        element.style.backgroundColor = finalColour;
        continue;
      }
      element.style.color = finalColour;
    }
    for (let socialNetwork of socialNetworks) {
      socialNetwork.style.color = finalColour;
    }
  };

  window.addEventListener('DOMContentLoaded', e => {
    const windowHeight = e.target.scrollingElement.clientHeight;
    const scrollTop = e.target.scrollingElement.scrollTop;
    setColour(body, elements, scrollTop, windowHeight);
  });

  window.addEventListener('DOMContentLoaded', e => {
    const windowHeight = e.target.scrollingElement.clientHeight;
    const scrollTop = e.target.scrollingElement.scrollTop;
    setColour(body, socialNetworks, scrollTop, windowHeight);
  });

  window.addEventListener('scroll', e => {
    const windowHeight = e.target.scrollingElement.clientHeight;
    const scrollTop = e.target.scrollingElement.scrollTop;
    setColour(body, elements, scrollTop, windowHeight);
  });
})(jQuery); // End of use strict
