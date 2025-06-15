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

let tl = gsap.timeline();

tl.from(".mission-container h2, .journey h2", { opacity: 0, y: 80, duration: 1 })
tl.from(".mission-container p, #from-items", { opacity: 0, y: 50, duration: 1 }, "-=0.5)")

const scrollItems = document.querySelectorAll("#scroll-items");

document.querySelectorAll("#scroll-items").forEach((item) => {
  gsap.from(item, {
    y: 50,
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