document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const switchToRegister = document.getElementById('switchToRegister');
  const switchToLogin = document.getElementById('switchToLogin');

  switchToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
  });

  switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
  });

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //prisijungimo logiką, pvz., siųsdami duomenis į serverį
  });
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //registracijos logiką, pvz., siųsdami duomenis į serverį
  });
});
