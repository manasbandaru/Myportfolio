/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// Function to toggle between light and dark mode
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');

  // Toggle dark mode class on the body
  body.classList.toggle('dark-mode');

  // Change the icon based on the current theme
  if (body.classList.contains('dark-mode')) {
      themeIcon.classList.remove('uil-moon');
      themeIcon.classList.add('uil-sun');
  } else {
      themeIcon.classList.remove('uil-sun');
      themeIcon.classList.add('uil-moon');
  }

  // Save the current theme preference to localStorage
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Function to load the saved theme preference
function loadThemePreference() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
      body.classList.add('dark-mode');
      themeIcon.classList.remove('uil-moon');
      themeIcon.classList.add('uil-sun');
  } else {
      body.classList.remove('dark-mode');
      themeIcon.classList.remove('uil-sun');
      themeIcon.classList.add('uil-moon');
  }
}

// Load theme preference when the page loads
document.addEventListener('DOMContentLoaded', loadThemePreference);


/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Data Analyst","Problem Solver","Developer"],
  loop : true,
  typeSpeed : 200, 
  backSpeed : 100,
  backDelay : 1000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)

const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
