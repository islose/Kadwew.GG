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


let tl = gsap.timeline();

tl.from(".amd-description h1", { opacity: 0, x: -100, duration: 0.3})
  .from(".amd-description p", { opacity: 0, x: -100, duration: 0.3,})

  .from(".amd-description button", {opacity: 0, x: -100, duration: 0.3})
  .from(".amd-banner img", { opacity: 0, x: -100, duration: 0.3});


gsap.from(".second-title h2", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".second-title h2",
    start: "top 90%",
    once: true,
  }
});

gsap.from(".second-title p", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".second-title p",
    start: "top 90%",
    once: true,
  }
});

gsap.from("#ytVid", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#ytVid",
    start: "top 60%",
    once: true,
  }
});

gsap.from(".amd-npu-benchmark img", {
  y: 100,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".amd-npu-benchmark img",
    start: "top 60%",
    once: true,
  }
});

gsap.from(".third-title h2", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".third-title h2",
    start: "top 90%",
    once: true,
  }
});

gsap.from(".third-title p", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".third-title p",
    start: "top 90%",
    once: true,
  }
});

gsap.utils.toArray(".row").forEach(el => {
  gsap.from(el, {
    y: 100,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      once: true,
    }
  });
});

gsap.from(".fourth-title p", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".fourth-title p",
    start: "top 90%",
    once: true,
  }
});

gsap.from(".experience h2", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".experience h2",
    start: "top 90%",
    once: true,
  }
});

gsap.from(".experience p", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".experience p",
    start: "top 90%",
    once: true,
  }
});

const items = document.querySelectorAll('.exp-img')

items.forEach((item, index) => {
  gsap.from(item, {
    y: 50,
    opacity: 0,
    duration: 0.6,
    delay: index * 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: item,
      start: "top 70%",
      toggleActions: "play none none none",
      once: true,
    }
  });
});

gsap.from(".exp-btn p", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".exp-btn p",
    start: "top 70%",
    once: true,
  }
});

gsap.from(".disBtn", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".disBtn",
    start: "top 70%",
    once: true,
  }
});

gsap.from(".amd-logo", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".amd-logo",
    start: "top 70%",
    once: true,
  }
});

function applyAnimationBasedOnMediaQuery() {
  const mediaQuery = window.matchMedia("(max-width: 2500px)");

  if (mediaQuery.matches) {
    document.querySelectorAll(".exp-img > img").forEach((item) => {
      gsap.from(item, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });
    });
  } else {
    gsap.killTweensOf(".exp-img > img");
  }
}

applyAnimationBasedOnMediaQuery();

window.matchMedia("(max-width: 1280px)").addEventListener("change", applyAnimationBasedOnMediaQuery);