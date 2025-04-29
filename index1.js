
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

const omenAmd = document.getElementById("#omenAmd");

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
  y: 200,
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
  y: 200,
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

gsap.set(images[0], { opacity: 1});

function changeImage() {
  gsap.to(images[index], { opacity: 0, duration: 1.5});
  index = (index + 1) % images.length;
  gsap.to(images[index], { opacity: 1, duration: 2});
}

setInterval(changeImage, 3000);

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
    start: "top 80%",
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

    if(isOpen) {
      answer.style.maxHeight = null;
      arrow.style.transform = "rotate(0deg)";
    }

    else {
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

