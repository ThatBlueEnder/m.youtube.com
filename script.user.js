// ==UserScript==
// @name        Youtube Mobile
// @match       *://m.youtube.com/*
// @run-at      document-start
// ==/UserScript==

(function () {
  'use strict';

  const pushState = history.pushState;

  history.pushState = function (...args) {

    const url = new URL(args[2], location.href);

    if (url.searchParams.has("start_radio")) {
      url.searchParams.delete("start_radio");
      url.searchParams.delete("list");
      location.replace(url.href);
    }

    return pushState.apply(this, args);
  };

})();