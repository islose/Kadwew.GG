
let tl = gsap.timeline();

tl.from(".hero-images .main-image", { opacity: 0, scale: 0.8, duration: 1})
  .from(".hero-images .floating-image", { opacity: 0, scale: 0.8, duration: 0.8, stagger: 0.3}, "-=0.5")

  .from(".hero-content", {opacity: 0, x: -100, duration: 1}, "-=0.6")
  .from(".RecBtn", { opacity: 0, x: -200, duration: 0.8 }, "-=0.6")
  .from("h1", { opacity: 0, x: -200, duration: 0.8 }, "-=0.6") 
  .from(".hero-content p", { opacity: 0, x: -200, duration: 0.8 }, "-=0.6")
  .from(".ndDownBtn", { opacity: 0, x: -100, duration: 0.3, onComplete: () => {
    gsap.set(".ndDownBtn", { clearProps: "all" });
} }, "-=0.6");

const features = document.getElementById("features");
const dropdown = document.querySelector(".dropdown-menu");

gsap.set(dropdown, { autoAlpha: 0, y: 10});

features.addEventListener("mouseenter", () => {
    gsap.to(dropdown, { autoAlpha: 1, y: 0, duration: 0.3});
});

features.addEventListener("mouseleave", () => {
    gsap.to(dropdown, { autoAlpha: 0, y: 10, duration: 0.3});
});

const useCases = document.getElementById("useCases");
const dropdown2 = document.querySelector(".dropdown-menu2");

gsap.set(dropdown2, { autoAlpha: 0, y: 10});

useCases.addEventListener("mouseenter", () => {
  gsap.to(dropdown2, { autoAlpha: 1, y: 0, duration: 0.3});
});

useCases.addEventListener("mouseleave", () => {
  gsap.to(dropdown2, { autoAlpha: 0, y: 10, duration: 0.3});
});

const ytVid = document.getElementById("ytVid");

gsap.registerPlugin(ScrollTrigger);

gsap.from("#ytVid", {
  opacity: 0,
  y: 200,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
      trigger: "#ytVid",
      start: "top 95%",
      end: "top 50%",
      once: true,
  }
});

const omenAmd = document.getElementById("#omenAmd");

gsap.from(".omenAmd", {
  opacity: 0,
  y: 200,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".omenAmd",
    start: "top 70%",
    end: "top 50%",
    once: true,
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const feedBacks = document.querySelector(".feedBacks");

  if (!feedBacks.dataset.duplicated) {
    const box = Array.from(feedBacks.children);
    box.forEach(box => {
      let clone = box.cloneNode(true);
      feedBacks.appendChild(clone); 
  });

  feedBacks.dataset.duplicated = "true";

}

  let totalWidth = feedBacks.scrollWidth / 2;

  gsap.fromTo(feedBacks, 
    { x: "0%" },
    {
      x: `-${totalWidth}px`,
      ease: "linear",
      duration: 30,
      repeat: -1,
      
    }
  );
});

gsap.from(".feedBacks", {
  opacity: 0,
  y: 200,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".feedBacks",
    start: "top 85%",
    end: "top 50%",
    once: true,
  }
});

gsap.from(".partner", {
  opacity: 0,
  y: 200,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".partner",
    start: "top 85%",
    end: "top 50%",
    once: true,
  }
});