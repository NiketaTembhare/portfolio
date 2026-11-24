import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  splitWords?: HTMLElement[];
  splitChars?: HTMLElement[];
}

gsap.registerPlugin(ScrollTrigger);

// Manual SplitText replacement — splits text into words/chars wrapped in spans
function splitTextIntoWords(element: HTMLElement): HTMLElement[] {
  const text = element.textContent || "";
  element.innerHTML = "";
  const words: HTMLElement[] = [];
  text.split(/\s+/).filter(Boolean).forEach((word, i, arr) => {
    const span = document.createElement("span");
    span.style.display = "inline-block";
    span.textContent = word;
    element.appendChild(span);
    words.push(span);
    if (i < arr.length - 1) {
      element.appendChild(document.createTextNode(" "));
    }
  });
  return words;
}

function splitTextIntoChars(element: HTMLElement): HTMLElement[] {
  const text = element.textContent || "";
  element.innerHTML = "";
  const chars: HTMLElement[] = [];
  for (const char of text) {
    if (char === " ") {
      element.appendChild(document.createTextNode(" "));
    } else {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.textContent = char;
      element.appendChild(span);
      chars.push(span);
    }
  }
  return chars;
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
    }

    const words = splitTextIntoWords(para);
    para.splitWords = words;

    para.anim = gsap.fromTo(
      words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });
  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
    }

    const chars = splitTextIntoChars(title);
    title.splitChars = chars;

    title.anim = gsap.fromTo(
      chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });

  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}
