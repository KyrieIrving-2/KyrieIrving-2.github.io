(function() {
  'use strict';

  var langMap = {
    '/about/':       '/about-zh/',
    '/about-zh/':    '/about/',
    '/cv/':          '/cv-zh/',
    '/cv-zh/':       '/cv/',
    '/contact/':     '/contact-zh/',
    '/contact-zh/':  '/contact/'
  };

  function isChinese() {
    return window.location.pathname.indexOf('-zh') !== -1;
  }

  function updateToggleDisplay() {
    var icon = document.getElementById('lang-icon');
    if (!icon) return;
    if (isChinese()) {
      icon.textContent = 'EN';
    } else {
      icon.textContent = '中';
    }
  }

  function toggleLanguage() {
    var currentPath = window.location.pathname;
    var newPath = langMap[currentPath];
    if (newPath) {
      window.location.href = newPath;
    } else {
      window.location.href = isChinese() ? '/about/' : '/about-zh/';
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    updateToggleDisplay();
    var btn = document.getElementById('lang-toggle-btn');
    if (btn) {
      btn.addEventListener('click', toggleLanguage);
      btn.style.cursor = 'pointer';
    }
  });
})();
