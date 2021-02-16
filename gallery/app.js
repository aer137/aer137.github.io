// SCROLL IMAGE ANIMATION

gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray('img');
const loader = document.querySelector('.loader--text');
const updateProgress = (instance) =>
loader.textContent = `${Math.round(instance.progressedCount * 100 / images.length)}%`;

const showDemo = () => {
  document.body.style.overflow = 'auto';
  document.scrollingElement.scrollTo(0, 0);
  gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });

  gsap.utils.toArray('section').forEach((section, index) => {
    const w = section.querySelector('.wrapper');
    const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
    gsap.fromTo(w, { x }, {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        scrub: 0.5 } });

  });
};

imagesLoaded(images).on('progress', updateProgress).on('always', showDemo);



// TO TOP BUTTON

//Get the button
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// CURSOR
let mouseCursor = document.querySelector(".cursor");
let button = document.querySelectorAll("button");
let olsen = document.querySelector(".olsen");
let navLinks = document.querySelectorAll(".nav-links li");



window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

button.forEach(but => {
    but.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
        but.classList.add("hover");
    });
    but.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
        but.classList.remove("hover");
    });
});

olsen.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    olsen.classList.add("hover");
});
olsen.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    olsen.classList.remove("hover");
});



  navLinks.forEach(link => {
      link.addEventListener("mouseover", () => {
          mouseCursor.classList.add("link-grow");
          link.classList.add("hover");
      });
      link.addEventListener("mouseleave", () => {
          mouseCursor.classList.remove("link-grow");
          link.classList.remove("hover");
      });
  });
