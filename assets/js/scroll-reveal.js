(function() {
  'use strict';

  if (!('IntersectionObserver' in window)) {
    var fallback = document.querySelectorAll('.archive__item, .feature__item, .grid__item');
    for (var i = 0; i < fallback.length; i++) {
      fallback[i].classList.add('visible');
    }
    return;
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var siblings = Array.prototype.slice.call(entry.target.parentElement.children)
          .filter(function(el) { return el.classList.contains('reveal'); });
        var index = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = (index * 0.08) + 's';
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('.archive__item, .feature__item, .grid__item');
    for (var i = 0; i < items.length; i++) {
      items[i].classList.add('reveal');
      observer.observe(items[i]);
    }
  });
})();
