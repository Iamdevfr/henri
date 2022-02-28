import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const container = document.querySelector('.gallery-container')
const layer = document.querySelectorAll('.gallery-layer')

console.log(layer)

gsap.timeline({
  scrollTrigger: {
      trigger: container,
      start: "top top",
      end: () => innerHeight * 4,
      scrub: true
     
  }
})
  .set(".galleryBlock:not(.centerBlock)", { autoAlpha: 0 })
  .to(".galleryBlock:not(.centerBlock)", { duration: 0.1, autoAlpha: 1 }, 0.001)
  .from(layer, {
      scale: 3.333,
      ease: "none"
  })
const size = Math.max(innerWidth, innerHeight);
gsap.set('.galleryBlock', { backgroundImage: i => `url(https://picsum.photos/${size}/${size}?random=${i})` });
const bigImg = new Image;
bigImg.addEventListener("load", function () {
  gsap.to(".center-layer .centerBlock", { autoAlpha: 1, duration: 0.5 });
});
bigImg.src = `https://picsum.photos/${size}/${size}?random=50`;