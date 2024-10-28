document.addEventListener('DOMContentLoaded', function () {
  // Funkcija saugiam elementų gavimui ir animavimui
  function animateElement(selector, animation) {
    const elements = gsap.utils.toArray(selector);
    if (elements.length) {
      gsap.to(elements, animation);
    }
  }

  // Funkcija saugiam elementų gavimui ir animavimui iš pradinės pozicijos
  function animateElementFrom(selector, animationProps) {
    const elements = gsap.utils.toArray(selector);
    if (elements.length) {
      gsap.from(elements, animationProps);
    }
  }

  // Animacijos
  animateElement('.title-1', {
    duration: 1,
    x: 30,
    opacity: 1,
    ease: 'expo.inOut',
  });

  animateElement('.title-2', {
    delay: 1,
    duration: 1,
    opacity: 1,
    ease: 'expo.inOut',
  });

  animateElementFrom('.runner', {
    delay: 1.6,
    duration: 2,
    opacity: 0,
  });

  animateElementFrom('.box-1', {
    delay: 1,
    duration: 4,
    rotation: 200,
    transformOrigin: '50% 50%',
    opacity: 0,
    x: -180,
  });

  animateElementFrom('.box-2', {
    delay: 1.2,
    duration: 4,
    rotation: 90,
    transformOrigin: '50% 50%',
    opacity: 0,
    x: -180,
  });

  animateElementFrom('.box-3', {
    delay: 1.2,
    duration: 4,
    rotation: 180,
    transformOrigin: '50% 50%',
    opacity: 0,
    x: -180,
  });

  animateElementFrom('.pattern', {
    delay: 0.8,
    duration: 2,
    width: 0,
    opacity: 0,
  });

  animateElementFrom('.media ul li', {
    delay: 2,
    duration: 2,
    y: 20,
    opacity: 0,
    stagger: 0.1,
  });

  animateElementFrom('.content p', {
    delay: 2.4,
    duration: 2,
    y: 20,
    opacity: 0,
  });

  animateElementFrom('.content button', {
    delay: 2,
    duration: 1,
    y: 20,
    opacity: 1,
  });
});

// Navigacijos meniu mygtuko funkcija
function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  if (navMenu) {
    navMenu.classList.toggle('active');
  } else {
    console.error('Nav menu element not found');
  }
}

// Nukreipimas mygtuko paspaudimo metu
const getPlanButton = document.getElementById('getPlanButton');
if (getPlanButton) {
  getPlanButton.addEventListener('click', function () {
    window.location.href = 'forma/forma.html';
  });
} else {
  console.error('Get plan button not found');
}
