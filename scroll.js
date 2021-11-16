console.log("Your index.js file loaded correctly");

new WOW().init();

import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

scroll.on('call', func => {
    // Using modularJS
    this.call(...func);
    // Using jQuery events
    $(document).trigger(func);
    // Or do it your own way 😎
});
