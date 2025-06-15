
let tl = gsap.timeline();

tl.from(".hero-images .main-image", { opacity: 0, scale: 0.8, duration: 1})
  .from(".hero-images .floating-image", { opacity: 0, scale: 0.8, duration: 0.8}, "-=0.5")

  .from(".hero-content", {opacity: 0, x: -100, duration: 1}, "-=0.6")
  .from(".RecBtn", { opacity: 0, x: -200, duration: 0.8 }, "-=0.6")
  .from("h1", { opacity: 0, x: -200, duration: 0.8 }, "-=0.6") 
  .from(".hero-content p", { opacity: 0, x: -200, duration: 0.8 }, "-=0.6")
  .from(".ndDownBtn", { opacity: 0, x: -100, duration: 0.3, onComplete: () => {
    gsap.set(".ndDownBtn", { clearProps: "all" });
} }, "-=0.6")

  .from(".mail h2", { opacity: 0, x: -200, duration: 0.8 }, "-=0.6")
  .from(".mail form", { opacity: 0, x: -200, duration: 1 }, "-=0.4")
  .from(".mail input", { opacity: 0, x: -200, duration: 0.6 }, "-=0.9")
  .from(".email-btn", { opacity: 0, x: -200, duration: 0.6 }, "-=0.6")
  .from(".mail p", { opacity: 0, x: -200, duration: 0.5 }, "-=0.6");



const button = document.querySelector(".email-btn");

button.addEventListener("mouseenter", () => {
  gsap.to(button, {
    backgroundColor: "linear-gradient(to bottom, hsl(281, 98%, 63%), hsl(288, 100%, 54%))",
    scale: 1.1,
    duration: 0.3,
    ease: "power1.out"
  });
});

button.addEventListener("mouseleave", () => {
  gsap.to(button, {
    backgroundColor: "#ff7e5f",
    scale: 1,
    duration: 0.3,
    ease: "power1.out"
  });
});


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

gsap.to(".floating-image", {
  y: -20,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  duration: 2
});

const ytVid = document.getElementById("ytVid");

gsap.registerPlugin(ScrollTrigger);

gsap.from("#ytVid", {
  opacity: 0,
  y: 200,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
      trigger: "#ytVid",
      start: "top 80%",
      once: true,
  }
});

gsap.from(".omenAmd", {
  opacity: 0,
  y: 200,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".omenAmd",
    start: "top 75%",
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

  const anim = gsap.fromTo(feedBacks, 
    { x: "0%" },
    {
      x: `-${totalWidth}px`,
      ease: "linear",
      duration: 30,
      repeat: -1,
      paused: true,
    }
  );

  ScrollTrigger.create({
    trigger: ".feedBacks",
    start: "top bottom",
    end: "bottom top",
    onEnter: () => anim.resume(),
    onLeave: () => anim.pause(),
    onEnterBack: () => anim.resume(),
    onLeaveBack: () => anim.pause(),
  });
});

gsap.from(".slider", {
  opacity: 0,
  y: 200,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".feedBacks",
    start: "top 90%",
    end: "top 50%",
    once: true,
  }
});

gsap.from(".h2-part", {
  opacity: 0,
  y: 40,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".partner",
    start: "top 80%",
    end: "top 10%",
    once: true,
  }
});

gsap.from(".logo-partner", {
  opacity: 0,
  y: 50,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".partner",
    start: "top 50%",
    end: "top 10%",
    once: true,
  }
});

let images = document.querySelectorAll(".logo-partner img");
let index = 0;

gsap.set(images[0], { opacity: 1 });

const logoAnim = gsap.timeline({ paused: true, repeat: -1 });

for (let i = 0; i < images.length; i++) {
  logoAnim.to(images[i], { opacity: 0, duration: 1.5 });
  let next = (i + 1) % images.length;
  logoAnim.to(images[next], { opacity: 1, duration: 2 });
}

logoAnim.play();

ScrollTrigger.create({
  trigger: ".logo-partner",
  start: "top bottom",
  end: "bottom top",
  onEnter: () => logoAnim.resume(),
  onLeave: () => logoAnim.pause(),
  onEnterBack: () => logoAnim.resume(),
  onLeaveBack: () => logoAnim.pause(),
});



gsap.from("#app-info1", {
  opacity: 0,
  y: 200,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#app-info1",
    start: "top 80%",
    end: "top 10%",
    once: true,
  }
});

gsap.from("#app-info2", {
  opacity: 0,
  y: 200,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#app-info2",
    start: "top 80%",
    end: "top 10%",
    once: true,
  }
});

gsap.from("#app-info3", {
  opacity: 0,
  y: 200,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#app-info3",
    start: "top 80%",
    end: "top 10%",
    once: true,
  }
});

gsap.from(".kad-tech h2", {
  opacity: 0,
  y: 200,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".kad-tech h2",
    start: "top 80%",
    end: "top 10%",
    once: true,
  }
});

gsap.from(".kad-tech p", {
  opacity: 0,
  y: 200,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".kad-tech p",
    start: "top 80%",
    end: "top 10%",
    once: true,
  }
});

gsap.from(".guide-boxes", {
  opacity: 0,
  y: 200,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".guide-boxes",
    start: "top 90%",
    once: true,
  }
});


const guideBoxes = document.querySelectorAll(".guide-boxes > div");

guideBoxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    gsap.to(box, {
      scale: 1.03,
      duration: 0.1,
      ease: "power1.out"
    });
  });

  box.addEventListener("mouseleave", () => {
    gsap.to(box, {
      scale: 1,
      duration: 0.1,
      ease: "power1.out"
    });
  });
});

function applyAnimationBasedOnMediaQuery() {
  const mediaQuery = window.matchMedia("(max-width: 2500px)");

  if (mediaQuery.matches) {
    document.querySelectorAll(".guide-boxes > div").forEach((item) => {
      gsap.from(item, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });
    });
  } else {
    gsap.killTweensOf(".guide-boxes > div");
  }
}

applyAnimationBasedOnMediaQuery();

window.matchMedia("(max-width: 1280px)").addEventListener("change", applyAnimationBasedOnMediaQuery);

gsap.from(".dow-title", {
  opacity: 0,
  y: 40,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".dow-title",
    start: "top 60%",
    once: true,
  }
});

gsap.from(".faq h2", {
  opacity: 0,
  y: 40,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".faq h2",
    start: "top 80%",
    once: true,
  }
});


const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    const answer = faqItem.querySelector(".faq-answer");
    const arrow = question.querySelector(".arrow");

    const isOpen = answer.style.maxHeight;

    if (isOpen) {
      answer.style.maxHeight = null;
      arrow.style.transform = "rotate(0deg)";
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      arrow.style.transform = "rotate(180deg)";
    }
  });
});

document.querySelectorAll(".faq-item").forEach((item) => {
  gsap.from(item, {
    y: 40,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: item,
      start: "top 90%",
      toggleActions: "play none none none"
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  toggle.addEventListener("click", () => {
    const isActive = mobileMenu.classList.contains("active");

    if (isActive) {
      
      mobileMenu.style.opacity = "0";
      mobileMenu.style.transform = "translateY(-100%)";

      setTimeout(() => {
        mobileMenu.classList.remove("active");
        mobileMenu.style = "";
      }, 300);
    } else {
      mobileMenu.classList.add("active");
    }

    toggle.classList.toggle("active");
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1266) {
      toggle.classList.remove("active");
      mobileMenu.classList.remove("active");
    }
  });
});

