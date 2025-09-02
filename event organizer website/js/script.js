let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }

});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop:true,
  autoplay:{
    delay: 3000,
    disableOnInteraction:false,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  }
});

var swiper = new Swiper(".reviews-slider", {
    grabCursor: true,
    loop:true,
    spaceBetween: 10,
    autoplay:{
      delay: 5000,
      disableOnInteraction:false,
    },
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      },    
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("#login-form");

  loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const usernameInput = loginForm.querySelector('input[name="login-username"]');
      const passwordInput = loginForm.querySelector('input[name="login-password"]');

      const username = usernameInput.value;
      const password = passwordInput.value;

      if (usernameInput.checkValidity() && passwordInput.checkValidity()) {
          alert("Login successful!");
      } else {
          alert("Please enter valid login credentials.");
      }
  });
});




document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.querySelector("#signup-form");

  signupForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Validate name (only letters and spaces)
      const nameInput = signupForm.querySelector('input[name="signup-name"]');
      if (!/^[a-zA-Z ]+$/.test(nameInput.value)) {
          alert("Please enter a valid name with only letters and spaces.");
          return;
      }

      // Validate contact info (only numbers)
      const contactInput = signupForm.querySelector('input[name="signup-contact"]');
      if (!/^[0-9]{10}$/.test(contactInput.value)) {
          alert("Please enter a valid contact info with only numbers with 10 digits .");
          return;
      }

      // Validate username (only letters and numbers)
      const usernameInput = signupForm.querySelector('input[name="signup-username"]');
      if (!/^[a-zA-Z0-9]+$/.test(usernameInput.value)) {
          alert("Please enter a valid username with only letters and numbers.");
          return;
      }

      // Validate email
      const emailInput = signupForm.querySelector('input[name="signup-email"]');
      if (!isValidEmail(emailInput.value)) {
          alert("Please enter a valid email address.");
          return;
      }

      // Validate password format
      const passwordInput = signupForm.querySelector('input[name="signup-password"]');
      if (!isValidPassword(passwordInput.value)) {
          alert("Please enter a valid password with at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character.");
          return;
      }

      // Validate password confirmation
      const confirmPasswordInput = signupForm.querySelector('input[name="signup-confirm-password"]');
      if (passwordInput.value !== confirmPasswordInput.value) {
          alert("Passwords do not match. Please enter the same password in both fields.");
          return;
      }

      // TODO: Add logic to submit the form if all validations pass
      var e=confirm("Form submitted successfully!");
      {
        if(e==true)
        {
          location.href="login.html";

        }
      }
  });

  // Helper function to validate email address
  function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  // Helper function to validate password format
  function isValidPassword(password) {
      // At least 1 uppercase, 1 lowercase, 1 digit, and 1 special character
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
      return passwordRegex.test(password);
  }
});




// script.js

document.addEventListener("DOMContentLoaded", function () {
  // ... (existing login and signup form validation code)

  // Contact form validation
  const contactForm = document.querySelector("#contact form");

  contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Validate name (only letters)
      const nameInput = contactForm.querySelector('input[type="text"]');
      if (!/^[a-zA-Z]+$/.test(nameInput.value)) {
          alert("Please enter a valid name with only letters.");
          return;
      }

      // Validate email
      const emailInput = contactForm.querySelector('input[type="email"]');
      if (!isValidEmail(emailInput.value)) {
          alert("Please enter a valid email address.");
          return;
      }

      // Validate number (only numbers)
      const numberInput = contactForm.querySelector('input[type="number"]');
      if (!/^[0-9]+$/.test(numberInput.value)) {
          alert("Please enter a valid number with only numbers.");
          return;
      }

      // Validate subject (only letters)
      const subjectInput = contactForm.querySelector('input[type="text"]');
      if (!/^[a-zA-Z]+$/.test(subjectInput.value)) {
          alert("Please enter a valid subject with only letters.");
          return;
      }

      // Validate message (non-empty)
      const messageInput = contactForm.querySelector('textarea');
      if (messageInput.value.trim() === "") {
          alert("Please enter a message.");
          return;
      }

      // TODO: Add logic to submit the form if all validations pass
      alert("Contact form submitted successfully!");
  });

  // Helper function to validate email address
  function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
});

