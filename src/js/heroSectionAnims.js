import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import $ from "jquery";


gsap.registerPlugin(ScrollTrigger, CSSPlugin, DrawSVGPlugin, ScrollToPlugin)

// scroll to 0 on load
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


// Refresh if change window size on hero
 if( window.scrollY < 1200){

 window.onresize = function(){ location.reload(); }

 }

 
 

const sign = document.querySelector('.signature')
const kokiy = document.querySelector('.kokiy')
const invM = document.querySelector('.inviderM')
const invS = document.querySelector('.inviderS')
const cup = document.querySelector('.cupola')
const hero = document.querySelector('.header-full')
const loader = document.querySelector('.pathSignCircle')
const container = document.querySelector('.containerHero')
const arrow = document.querySelector('.arrowDown')

const iconNav = document.querySelector('.icon-secondary-menu')
const anchor = document.querySelector('.scrollToAnchor')

const breakpointMobile = window.matchMedia('(max-width: 768px)')

//Animation click menu-secondary

// iconNav.addEventListener('click', e =>{
//   e.target.classList.toggle('active')
// })


//Partie 1 : Loading``

// loader
gsap.set(loader, {drawSVG:'0'})

gsap.timeline({
  scrollTrigger: {
    trigger: invS,
    start: "top-=300px top",
    end: "top+=300px center",
    scrub: true,
  },
  defaults:{duration:1, ease:'none'}
})
  .set(loader, {transformOrigin:'center', drawSVG:'0', autoAlpha:1})
  .to(loader, {drawSVG:'150%', ease:'none', 
   onComplete: ()=> {gsap.set(".pathSignCircle", {autoAlpha: 0})},})


// gsap.set(".pathSign", {autoAlpha:0})

// gsap.timeline({
//   scrollTrigger: {
//     trigger: invS,
//     start: "top-=300px top",
//     end: "top+=300px center",
//     scrub: true,
//   },
//   defaults:{duration:1, ease:'none'}
// })
//   .set(sign, {transformOrigin:'center', drawSVG:'0'})
//   .to(sign, {drawSVG:'100%', ease:'none'})


//Loader

// gsap.from(".pathSign", {
//   drawSVG: '50%',
//   ease: "power1.inOut",
//   scrollTrigger: {
//     markers: true,
//     trigger: invS,
//     start: "top-=500px top",
//     end: "top+=300px center",
//     scrub: true
//     // toggleActions: "play pause resume reset",
//   }
// });



// gsap.from(".pathSignCircle", {
//   drawSVG: '100%',
//   ease: "power1.inOut",
//   scrollTrigger: {
//     markers: true,
//     trigger: invS,
//     start: "top-=500px top",
//     end: "top+=300px center",
//     scrub: 1
//     // toggleActions: "play pause resume reset",
//   },


// });


// gsap.to(".pathSignLoader", {
//   drawSVG: '100%',
//   ease: "power1.inOut",
//   scrollTrigger: {
//     markers: true,
//     trigger: invS,
//     start: "top-=400px top",
//     end: "top+=500px center",
//     scrub: true
//     // toggleActions: "play pause resume reset",
//   },
// });


//Hover
// if( document.body.scrollTop < 1000){
const hover = gsap.to(kokiy, {scale: 1.1, duration: 1.5, ease: "power1.inOut"});
kokiy.addEventListener("mouseenter", () => hover.play());
kokiy.addEventListener("mouseleave", () => hover.reverse());
const hover2 = gsap.to(invM, {scale: 1.1, duration: 1.5, ease: "power1.inOut"});
invM.addEventListener("mouseenter", () => hover2.play());
invM.addEventListener("mouseleave", () => hover2.reverse());
const hover3 = gsap.to(invS, {scale: 1.1, duration: 1.5, ease: "power1.inOut"});
invS.addEventListener("mouseenter", () => hover3.play());
invS.addEventListener("mouseleave", () => hover3.reverse());
const hover4 = gsap.to(cup, {scale: 1.1, duration: 1.5, ease: "power1.inOut"});
cup.addEventListener("mouseenter", () => hover4.play());
cup.addEventListener("mouseleave", () => hover4.reverse());
// }

//timeline
const tlHero = gsap.timeline()

tlHero
.to(kokiy,{ x: 0, opacity:1})
.to(invM,{ x: 0, opacity:1})
.to(invS, { x: 0, opacity:1})
.to(cup, { x: 0, opacity:1})


ScrollTrigger.create({
  trigger: invS,
  animation: tlHero,
  start: "top-=150px top",
  end: "top+=600px center",
  // toggleClass: "active",
  // pin: true,
  scrub: true,
  // onUpdate: self => {
  //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
  // }
});



//Partie 1 : Animations``

const tlAnims = new gsap.timeline()

// arrow.addEventListener('click', e =>{
//   e.tlAnims.play();
// })

tlAnims
 

  .to(kokiy, {
      scrollTrigger: {
        trigger: sign,
        start: "top center",
        scrub: true,
        start: "center+=900 center",
        end: "center+=1000 center",
      } ,
      height: '3rem',
      width: '3rem',
      top: '5px',
      left: '85px'

  })


  .to(invM, {
    scrollTrigger: {
      trigger: sign,
      start: "top center",
      scrub: true,
      start: "center+=900 center",
      end: "center+=1000 center",
    } ,    
    
    height: '3rem',
    width: '3rem',
    top: '5px',
    right: '85px'
  })

.to(sign, {
  scrollTrigger: {
    trigger: sign,
    start: "top+=1100 center",
    end: "center+=1050 center",
    scrub: true
  } ,    
  width: '10rem',
  left:'100px',
})


.to(invS, {
  scrollTrigger: {
    trigger: sign,
    start: "center+=800 center",
    end: "center+=1000 center",
    scrub: true

  } ,    
  height: '3rem',
  width: '3rem',
  top: '5px',
  left: '0px'


})

.to(cup, {
  scrollTrigger: {
    trigger:sign,
    start: "center+=800 center",
    end: "center+=1000 center",
    scrub: true
  } ,    
  height: '3rem',
  width: '3rem',
  top: '5px',
  right: '0px'

})

.to(arrow, {
  scrollTrigger: {
    trigger: invS,
    start: "top-=300px top",
    end: "top+=300px center",
    scrub: true
  } ,    
  autoAlpha:0
})

.to(container, {
  scrollTrigger: {
    trigger: sign,
    start: "center+=900 center",
    end: "center+=1000 center",
    scrub:true
  } ,
  height:'60px',
  width: '300px',
  transformOrigin:"top"
})

.to(hero, {
  scrollTrigger: {
    trigger: sign,
    start: "top+=1100 center",
    end: "center+=1100 center",
    scrub:true
  } ,
  height:'70px',
  transformOrigin:"bottom"  
})

.to(window, {
  scrollTrigger: {
    trigger: sign,
    start: "top+=1300 center",
    end: "top+=1400 center",
} 
  // scrollTo: anchor
})

//anim mobile
const tlAnimsMobile = new gsap.timeline()
const tlHeroMobile = new gsap.timeline()

if (breakpointMobile.matches) {
  console.log('mobile')

  tlHeroMobile
    .to(invM,{ x: 0, opacity:1})
    .to(kokiy,{ x: 0, opacity:1})
    .to(cup, { x: 0, opacity:1})
    .to(invS, { x: 0, opacity:1})

    ScrollTrigger.create({
      trigger: invS,
      animation: tlHeroMobile,
      start: "top-=150px top",
      end: "top+=600px center",
      // toggleClass: "active",
      // pin: true,
      scrub: true,
      // onUpdate: self => {
      //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
      // }
    });


  tlAnimsMobile
    .to(kokiy, {
      scrollTrigger: {
        trigger: sign,
        start: "top center",
        scrub: true,
        start: "center+=900 center",
        end: "center+=1000 center",
      } ,
      height: '2.5rem',
      width: '2.5rem',
      top: '5px',
      left: '50px'
  })

    .to(invM, {
      scrollTrigger: {
        trigger: sign,
        start: "top center",
        scrub: true,
        start: "center+=900 center",
        end: "center+=1000 center",
      } ,    
      
      height: '2.5rem',
      width: '2.5rem',
      top: '5px',
      right: '50px'
    })

    .to(sign, {
    scrollTrigger: {
      trigger: sign,
      start: "top+=1100 center",
      end: "center+=1050 center",
      scrub: true
    } ,    
    width: '6rem',
    left:'50px',
    })


    .to(invS, {
    scrollTrigger: {
      trigger: sign,
      start: "center+=800 center",
      end: "center+=1000 center",
      scrub: true

    } ,    
    height: '2.5rem',
    width: '2.5rem',
    top: '5px',
    left: '0px'


    })

    .to(cup, {
    scrollTrigger: {
      trigger:sign,
      start: "center+=800 center",
      end: "center+=1000 center",
      scrub: true
    } ,    
    height: '2.5rem',
    width: '2.5rem',
    top: '5px',
    right: '0px'

    })

    .to(arrow, {
    scrollTrigger: {
      trigger: invS,
      start: "top-=300px top",
      end: "top+=300px center",
      scrub: true
    } ,    
    autoAlpha:0
    })

    .to(container, {
    scrollTrigger: {
      trigger: sign,
      start: "center+=900 center",
      end: "center+=1000 center",
      scrub:true
    } ,
    height:'60px',
    width: '200px',
    transformOrigin:"top"
    })

    .to(hero, {
    scrollTrigger: {
      trigger: sign,
      start: "top+=1100 center",
      end: "center+=1100 center",
      scrub:true
    } ,
    height:'70px',
    transformOrigin:"bottom"  
    })

    .to(window, {
    scrollTrigger: {
      trigger: sign,
      start: "top+=1300 center",
      end: "top+=1400 center",
    } 
    // scrollTo: anchor
    })
    }

const tlAnimsOnClick = new gsap.timeline()
const kokiyAnimOnClick = new gsap.timeline()

$(document).ready(function() {
  //anim kokiy
  $(invM).click(function() {

    kokiyAnimOnClick
      .to(invM, {
        width: '80vw',
        height: '80vh',
        class: '0px'        
      })
      // .to(window, {scrollTo: anchor})
      // .to(kokiy, {
      //   autoAlpha: 0
      // })
    // $(kokiy).appendTo('.kokiySection')

   

  })
  //anim arrow on click 

  $(arrow).click(function() {
    // tlAnims.pause();
    tlAnimsOnClick
      .set(loader, {transformOrigin:'center', drawSVG:'0', autoAlpha:1})
      .to(loader, {drawSVG:'150%', ease:'none', 
       onComplete: ()=> {gsap.set(".pathSignCircle", {autoAlpha: 0})},})

      .to(arrow, {
        autoAlpha:0
      })

      .to(kokiy,{ x: 0, opacity:1})
      .to(invM,{ x: 0, opacity:1})
      .to(invS, { x: 0, opacity:1})
      .to(cup, { x: 0, opacity:1})

      

      .to(hero, {
        height:'70px',
        transformOrigin:"bottom"  
      })
      .to(sign, {
        width: '10rem',
        left:'100px',
      })

      // .to(invM, {
      //   height: '1700px'
      // }, "<")
      // .to(kokiy, {
      //   height: '1700px'
      // }, "<")
    
      .to(container, {
        height:'60px',
        width: '300px',
        transformOrigin:"top"
      })

      .to(kokiy, {
        height: '3rem',
        width: '3rem',
        top: '5px',
        left: '85px'
      },"<")

      .to(invM, { 
        height: '3rem',
        width: '3rem',
        top: '5px',
        right: '85px'
      },"<")

      .to(invS, {
        height: '3rem',
        width: '3rem',
        top: '5px',
        left: '0px'
      },"<")

      .to(cup, {
        height: '3rem',
        width: '3rem',
        top: '5px',
        right: '0px'
      },"<")      
      .to(window, {scrollTo: anchor})


  });
});



// $(document).ready(function () {
// //   if (window.matchMedia("(min-width: 1024px)").matches) {

// //   $(document).scrollTop(0)
//    $("#scroll").click(function(){
//     $('.header-full')
//     .addClass('header-small', 1000, 'linear')
//     .delay(1300)
//     .removeClass('header-full', 100, 'swing').fadeIn("slow");

//       $('#invider-m').delay(300).addClass('logo-nav', 2000, 'swing');
//       $('#invider-s').delay(300).addClass('logo-nav', 2000, 'swing');
//       $('#kokiy').delay(300).addClass('logo-nav', 2000, 'swing');
//       $('#cupola').delay(300).addClass('logo-nav', 2000, 'swing');
//       $('#signature-img').addClass('signature-nav', 1300, 'swing');
   
   
//       $('#scroll').addClass('display-none');
   
      

//  })
//  })

//   $(window).scroll(function () {
   
//     var value = $(document).scrollTop();

//     if ( value > 1) {

//       $('#invider-m').addClass('logo-nav',0, 'linear');
//       $('#invider-s').addClass('logo-nav', 0, 'linear');
//       $('#kokiy').addClass('logo-nav', 0, 'linear');
//       $('#cupola').addClass('logo-nav', 0, 'linear');
//       $('#signature-img').addClass('signature-nav', 0, 'linear');


//       $('#scroll').addClass('display-none');

//       $('.header-full')
//         .addClass('header-small', 0, 'linear')
//         .removeClass('header-full', 0, 'linear')

//     } else {
//       $('.header-small')
//       .removeClass('header-small', 0, 'linear')
//       .addClass('header-full', 0, 'linear')


//       $('#signature-img').removeClass('signature-nav');
//       $('#invider-m').removeClass('logo-nav');
//       $('#invider-s').removeClass('logo-nav');
//       $('#kokiy').removeClass('logo-nav');
//       $('#cupola').removeClass('logo-nav');
//       $('#scroll').removeClass('display-none');

    
//     }
    
//   })
// }
// })


