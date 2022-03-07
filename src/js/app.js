import barba from '@barba/core';
import '../scss/app.scss';

import '../js/heroSectionAnims'
import "../js/galleryAnim"
// import "../js/kokiyAnim.js"

import $ from "jquery";

require('fslightbox');




$(document).ready(function() {

  $(".icon-secondary-menu").click(function() {
    $(".icon-secondary-menu").toggleClass('active');
    $(".menu-toggle__nav-secondary").fadeToggle(800);
   
  });

  // $(".iconSecondaryMenuToggled").click(function() {

  //   $(".menu-toggle__nav-secondary").animate({
      
  //     width: "toggle"
  //   })
    
  // });
});

barba.init({
  transitions: [
    {
      name: 'indexToKokiy',
      sync: true,
      to: { namespace: ['kokiy'] },
      once() {},
      leave() {
        console.log("\n\n\n\n\n\n\n\n\n\nLeave transition")
      },
      enter() {},
    },
  ],
});
