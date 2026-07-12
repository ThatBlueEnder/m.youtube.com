// ==UserScript==
// @name        Turn Off Youtube Caption
// @match       *://m.youtube.com/*
// @run-at      document-body
// ==/UserScript==

(function () {
  'use strict';

  const observer = new MutationObserver((_, obs) => {
    const cc = document.querySelector('.ytmClosedCaptioningButtonButton');
    if (cc) {
      if (cc.ariaPressed === 'true')
        cc.click();
      obs.disconnect();
    }
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  const pushState = history.pushState;

  history.pushState = function (...args) {
    observer.disconnect();
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    return pushState.apply(this, args);
  };

})();