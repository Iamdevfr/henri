
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

import $ from "jquery";



gsap.registerPlugin(ScrollTrigger, CSSRulePlugin, DrawSVGPlugin);

const kokiy = document.querySelector('#kokiyItem')
const s1 = document.querySelector(".slide1")

const s2 = document.querySelector(".slide2")
const S2Content = document.querySelector('.contentS2')

const s3 = document.querySelector(".slide3")

const gal = document.querySelector('.external')

const arrows = document.querySelectorAll('.arrow-1')

const kokTest = document.querySelector('.kokiyFixed')



ScrollTrigger.create({
  trigger: '.kokiyFixedSection',
  endTrigger: '#step-4',
  start: 'center center',
  end: () => {
      const height = window.innerHeight;
      const chartHeight = document.querySelector('.kokiyFixedSection').offsetHeight;
      return `bottom ${chartHeight + (height - chartHeight) / 2}px`;
  },
  pin: true,
  pinSpacing: false



  
});
          

//test transi
// const galdf = document.querySelector('#kokiyFull')

// kokiy.addEventListener('click', () =>
//   galdf.setAttribute("class", "kokiy-hero")
// )



//Anim item on slides

const kokiyAnim = new gsap.timeline()


kokiyAnim
  
  .to(kokiy,{
  scrollTrigger:{
    trigger: ".kokiyInCard",
    scrub: true,
    start: "top +=200px center",
    end: "bottom -=500px center"
  },
  position: "fixed",
  width: '500px',
  left: "-=25vw",
  zIndex: '9999',
  })




  // const s1Anim = new gsap.timeline()

  // s1Anim
  //   .to(arrows, {
  //     scrollTrigger:{
  //       trigger: arrows,
  //       start: "top top",
  //       start: "top+=400px center",
  //       end: "bottom+=200px center",  
  //       pin: S2Content
  //     },
  //     width: 'auto',
  //     })
    
  

  // //Slide 2

  const s2Anim = new gsap.timeline()

  s2Anim
    
    .to(kokiy,{
    scrollTrigger:{
      trigger: s2,
      start: "top top",
      scrub: true,
      start: "top-=300px center",
      end: "top center",
      
    },
    width: '500px',
    right: '+=25vw'
    })
  //   .to(S2Content,{
  //     scrollTrigger:{
  //       trigger: s2,
  //       start: "top top",
  //       scrub: true,
  //       start: "top-=300px center",
  //       end: "top center"
  //     },
  //     opacity: 1
  //     })


  // //Slide 3
    
  // .to(kokiy,{
  // scrollTrigger:{
  //   trigger: s3,
  //   start: "top top",
  //   scrub: true,
  //   start: "top-=100px center",
  //   end: "top+=100px center",  
  //   },
  //   width: '20vw',
  //   left: '75vw'
  // })

  // //gallery

  // .to(kokiy,{
  //   scrollTrigger:{
  //     trigger: gal,
  //     start: "top top",
  //     scrub: true,
  //     start: "top-=400px center",
  //     end: "top-=200px enter",  
  //     },
  //     width: '8vw',
  //     left: '+=35vw',
  //     top: '10vh'
  //   })
  
   
  //   const tlPic = gsap.timeline();

  //   const rule = CSSRulePlugin.getRule(".img-container:after");
    
  //   tlPic.to(".gallery", { duration: 0.5, autoAlpha: 1 })
  //     .to(rule, { duration: 1, width: "100%", ease: "Power2.ease" })
  //     .set(rule, { duration: 0, right: 0, left: "unset" })
  //     .to(rule, { duration: 1, width: "0%", ease: "Power2.ease" })
  //     .to("img", { duration: 0.2, opacity: 1, delay: -1 })
  //     .from(".img-container img", {
  //       duration: 1,
  //       scale: 1.4,
  //       ease: "Power2.easeInOut",
  //       delay: -1.2
  //     });

  // ScrollTrigger.create({
  //   trigger: "figure",
  //   animation: tlPic

  //   // toggleClass: "active",
  //   // pin: true,
  //   // scrub: true,
  //   // onUpdate: self => {
  //   //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
  //   // }
  // });


  function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.25, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  });
  
    