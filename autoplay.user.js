// ==UserScript==
// @name        Prevent Youtube Autoplay
// @match       *://m.youtube.com/*
// @run-at      document-body
// ==/UserScript==

(function () {
  'use strict';

  new MutationObserver(() =>
    document.querySelectorAll('.ytwAutonavToggleButtonHost[aria-pressed=true]').forEach(e => e.click())
  ).observe(document.body, {
    childList: true,
    subtree: true
  });

})();