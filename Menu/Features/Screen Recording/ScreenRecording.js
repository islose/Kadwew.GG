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

let tl = gsap.timeline();

tl.from(".main-title h1", { opacity: 0, y: 200, duration: 2}, "-=0.9")
  .from(".main-title p", { opacity: 0, y: 50, duration: 0.8}, "-=0.7")
  .from(".download", { opacity: 0, y: 50, duration: 0.6}, "-=0.5")
;

gsap.from (".ytVid", {
  opacity: 0,
  y: 200,
  duration: 0.6,
  ease: "power.2 out",
  scrollTrigger: {
    trigger: ".ytVid",
    start: "top 60%",
    once: true,
  }
});

gsap.from (".second-title h2", {
  opacity: 0,
  y: 100,
  duration: 0.6,
  ease: "power.2 out",
  scrollTrigger: {
    trigger: ".second-title h2",
    start: "top 70%",
    once: true,
  }
});

gsap.from (".second-title p", {
  opacity: 0,
  y: 100,
  duration: 0.6,
  ease: "power.2 out",
  scrollTrigger: {
    trigger: ".second-title p",
    start: "top 70%",
    once: true,
  }
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
    once: true,
  }
});

gsap.from("#app-info4", {
    opacity: 0,
    y: 200,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#app-info4",
        start: "top 80%",
        once: true,
    }
});

gsap.from(".why-kadwew-content h2", {
  opacity: 0,
  y: 200,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".why-kadwew-content h2",
    start: "top 90%",
    once: true,
  }
});

gsap.from(".why-kadwew-content p", {
  opacity: 0,
  y: 200,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".why-kadwew-content p",
    start: "top 90%",
    once: true,
  }
});

gsap.from(".why-kadwew-content button", {
  opacity: 0,
  y: 200,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".why-kadwew-content button",
    start: "top 90%",
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
    start: "top 70%",
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