/*=============== toggle icon navbar ================*/
let menuIcon = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*=============== scroll sections active link ================*/
let sections = document.getElementsByTagName("section");
let navLinks = document.getElementsByTagName("header nav a");

window.addEventListener("scroll", () => {
  const currentPos = window.scrollY;
  sections.forEach((sec) => {
    const top = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (currentPos >= top && currentPos < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector(`header nav a[href*=${id}]`)
        .classList.add("active");
    }
  });

  /*==================== sticky navbar ====================*/
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", currentPos > 100);

  /*=============== remove toggle icon and navbar when click navbar link (scroll) ================*/
  if (window.innerWidth < 768) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
});

/*=============== smooth scrolling on anchor link clicks ================*/
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    const topOffset = 100; // Adjust this value to offset the scroll position
    const elementPosition = target.offsetTop;
    const offsetPosition = elementPosition - topOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

/*==================== scroll reveal ====================*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact-form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/*==================== typed js ====================*/
const typed = new Typed(".multiple-text", {
  strings: [
    "a Software Developer",
    " a Graphic Designer",
    "a Digital Marketer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/*==================== form validation ====================*/
var nameError = document.getElementById("Name-error");
var phoneError = document.getElementById("Phone-error");
var emailError = document.getElementById("Email-error");
var messageError = document.getElementById("Message-error");
var submitError = document.getElementById("Submit-error");

function validateName() {
  var name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Please enter your full name";
    return false;
  }
  nameError.innerHTML = '<i class="bx bx-check-circle"></i>';
  return true;
}

function validatePhone() {
  var phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone number is required";
    return false;
  }
  if (!phone.match(/^[0-9]{11}$/)) {
    phoneError.innerHTML = "Please enter a valid phone number";
    return false;
  }
  phoneError.innerHTML = '<i class="bx bx-check-circle"></i>';
  return true;
}

function validateEmail() {
  var email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z0-9_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
    emailError.innerHTML = "Please enter a valid email address";
    return false;
  }
  emailError.innerHTML = '<i class="bx bx-check-circle"></i>';
  return true;
}

function validateMessage() {
  var message = document.getElementById("contact-message").value;

  if (message.length == 0) {
    messageError.innerHTML = "Message is required";
    return false;
  }
  messageError.innerHTML = '<i class="bx bx-check-circle"></i>';
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.innerHTML = "Please fill in all fields";
    return false;
  }
  submitError.innerHTML = '<i class="bx bx-check-circle"></i>';
  return true;
}
