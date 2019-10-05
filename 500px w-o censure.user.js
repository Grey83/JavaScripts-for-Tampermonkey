  
// ==UserScript==
// @name 500px w/o censure
// @namespace https://500px.com/
// @description Remove censure for 500px
// @author Grey83
// @homepage https://github.com/Grey83
// @version 0.0.1
// @include *://500px.com/*
// @exclude *://500px.com/photo/*
// @grant none
// @icon https://500px.com/favicon.ico
// ==/UserScript==

(function() {
    for(var i = 0, elements = document.body.getElementsByClassName('nsfw_placeholder'), el_num = elements.length; i < el_num; i++) elements[0].setAttribute('class', 'photo_thumbnail jg-entry entry-visible new');
})();
