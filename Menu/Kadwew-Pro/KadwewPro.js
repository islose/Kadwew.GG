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

tl.from(".kadwew-pro-content h1", {opacity: 0, y: 200, duration: 2}, "-=0.9")
  .from(".kadwew-pro-content p", { opacity: 0, y: 50, duration: 0.8 }, "-=0.7")
;

gsap.from(".soon-title h2", {
  opacity: 0,
  y: 100,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".soon-title",
    start: "top 75%",
    end: "top 50%",
    once: true,
  }
});

const Btn1 = document.getElementById("pro-btn1");
const Btn2 = document.getElementById("pro-btn2");
const price = document.getElementById("price");

Btn1.addEventListener("click", () => {
  Btn1.classList.add("Active");
  Btn2.classList.remove("Active");
  price.textContent = "$9.99/month";
});

Btn2.addEventListener("click", () => {
  Btn2.classList.add("Active");
  Btn1.classList.remove("Active");
  price.textContent = "$99.99/year";
});


const items = document.querySelectorAll('.feature-item');
/*
items.forEach(item => {
  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    const rotateX = -percentY * 15;
    const rotateY = percentX * 15;

    gsap.killTweensOf(item);

    gsap.to(item, {
      rotateX,
      rotateY,
      transformPerspective: 800,
      transformOrigin: "center",
      ease: "power2.out",
      duration: 0.5
    });
  });

  item.addEventListener('mouseleave', () => {
    gsap.killTweensOf(item);

    gsap.to(item, {
      rotateX: 0,
      rotateY: 0,
      ease: "power2.out",
      duration: 0.5
    });
  });
});
*/

items.forEach((item, index) => {
  gsap.from(item, {
    y: -30,
    opacity: 0,
    duration: 0.6,
    delay: index * 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      toggleActions: "play none none none",
      once: true,
    }
  });
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