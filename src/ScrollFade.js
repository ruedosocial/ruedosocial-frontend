export function initScrollFade() {
  const elements = document.querySelectorAll(".fade-on-scroll");

  const reveal = () => {
    const vh = window.innerHeight * 0.85;

    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh) el.classList.remove("fade-hidden");
    });
  };

  window.addEventListener("scroll", reveal);
  reveal();
}
