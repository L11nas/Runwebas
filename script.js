gsap.to('.title-1', {
  duration: 1,
  x: 30,
  opacity: 1,
  ease: 'expo.inOut',
  repeat: 0,
  yoyo: false,
});

gsap.to('.title-2', {
  delay: 1,
  duration: 1,
  opacity: 1,
  ease: 'expo.inOut',
  repeat: 0,
  yoyo: false,
});
gsap.from('.runner', {
  delay: 1.6,
  duration: 2,
  opacity: 0,
  ease: 'expo.inOut',
});
gsap.from('.box-1', {
  delay: 1,
  duration: 4,
  rotation: 200,
  transformOrigin: '50% 50%',
  opacity: 0,
  x: -180,
  ease: 'expo.inOut',
});
gsap.from('.box-2', {
  delay: 1.2,
  duration: 4,
  rotation: 90,
  transformOrigin: '50% 50%',
  opacity: 0,
  x: -180,
  ease: 'expo.inOut',
});
gsap.from('.box-3', {
  delay: 1.2,
  duration: 4,
  rotation: 180,
  transformOrigin: '50% 50%',
  opacity: 0,
  x: -180,
  ease: 'expo.inOut',
});
gsap.from('.pattern', {
  delay: 0.8,
  duration: 2,
  width: 0,
  opacity: 0,
  ease: 'expo.inOut',
});
gsap.from('.logo', {
  delay: 1.6,
  duration: 2,
  y: 20,
  opacity: 0,
  ease: 'expo.inOut',
});
gsap.from('.menu ul li', {
  delay: 1.6,
  duration: 2,
  y: 20,
  opacity: 0,
  ease: 'expo.inOut',
  stagger: 0.1,
});
gsap.from('.cart', {
  delay: 1.7,
  duration: 2,
  y: 20,
  opacity: 0,
  ease: 'expo.inOut',
});
gsap.from('.media ul li', {
  delay: 2,
  duration: 2,
  y: 20,
  opacity: 0,
  ease: 'expo.inOut',
  stagger: 0.1,
});
gsap.from('.content p', {
  delay: 2.4,
  duration: 2,
  y: 20,
  opacity: 0,
  ease: 'expo.inOut',
});

gsap.from('.content button', {
  delay: 2,
  duration: 1,
  y: 20,
  opacity: 0,
  ease: 'expo.inOut',
  clearProps: 'all', // Išvalo GSAP pridėtas savybes po animacijos
});

function toggleMenu() {
  const navMenu = document.querySelector('.nav-menu');
  if (navMenu) {
    navMenu.classList.toggle('active');
  } else {
    console.error('Nav menu element not found');
  }
}

const getPlanButton = document.getElementById('getPlanButton');
if (getPlanButton) {
  getPlanButton.addEventListener('click', function () {
    window.location.href = 'forma/forma.html';
  });
} else {
  console.error('Get plan button not found');
}
