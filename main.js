const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
//for global presence
const dots = document.querySelectorAll('.dot');

        dots.forEach(dot => {
            dot.addEventListener('mouseover', function() {
                const tooltip = document.createElement('div');
                tooltip.classList.add('tooltip');
                tooltip.innerText = this.dataset.location;
                this.appendChild(tooltip);
            });

            dot.addEventListener('mouseout', function() {
                const tooltip = this.querySelector('.tooltip');
                if (tooltip) {
                    tooltip.remove();
                }
            });
        });

// js for maps direction


       
//for expanding information of industries
function toggleInfo(element) {
  const industryInfo = element.nextElementSibling;  // Get the next sibling (the .industry-info div)
  industryInfo.style.display = industryInfo.style.display === "block" ? "none" : "block"; // Toggle display
}





menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  menuBtnIcon.classList.toggle("ri-close-line");
  menuBtnIcon.classList.toggle("ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtnIcon.classList.remove("ri-close-line");
    menuBtnIcon.classList.add("ri-menu-line");
  }
});




button.addEventListener("click",()=>{
  window.open('products.html');
})
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__item", {
  ...scrollRevealOption,
  interval: 500,
});

// stats container
ScrollReveal().reveal(".stats__image img", {
  ...scrollRevealOption,
  origin: "right",
  interval: 500,
});

ScrollReveal().reveal(".stats__card", {
  interval: 500,
  duration: 500,
  delay: 1000,
});

// blog container
ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});