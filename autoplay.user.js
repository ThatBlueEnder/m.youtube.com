// ==UserScript==
// @name        Prevent Youtube Autoplay
// @match       *://m.youtube.com/*
// @run-at      document-body
// ==/UserScript==

(function () {
  'use strict';

  new MutationObserver(() =>
    document.querySelector('.ytwAutonavToggleButtonHost[aria-pressed=true]')?.click()
  ).observe(document.body, {
    childList: true,
    subtree: true
  });

})();