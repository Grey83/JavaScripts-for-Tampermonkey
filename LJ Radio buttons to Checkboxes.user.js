// ==UserScript==
// @name LJ Radio buttons to Checkboxes
// @namespace http://world-of-ru.livejournal.com
// @description Replaces Radio buttons to Checkboxes
// @author Grey83
// @homepage https://github.com/Grey83
// @version 0.0.1
// @match *://*.livejournal.com/*
// @grant none
// @icon https://livejournal.com/favicon.ico
// ==/UserScript==

(function() {
    for(var i=0, elements = document.querySelectorAll('div > input[type="radio"]'), el_num = elements.length; i < el_num; i++) {
        elements[i].setAttribute('type', 'checkbox');
        elements[i].checked = true;
    }
})();
