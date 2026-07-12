// ==UserScript==
// @name        Open Youtube Description
// @match       *://m.youtube.com/*
// @run-at      document-body
// ==/UserScript==

(function () {
  'use strict';

  const observer = new MutationObserver((_, obs) => {
    const more = document.querySelector('.slim-video-metadata-header');
    if (more) {
      more.click();
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