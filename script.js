// Typed Effect
new Typed(".typing", {
  strings: [
    "CSE Student",
    "Frontend Developer",
    "Future Software Engineer",
    "Tech Enthusiast"
  ],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true
});

// AOS
AOS.init();

// Cursor Glow
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Music Toggle
const music = document.getElementById("bgMusic");

document.getElementById("musicToggle")
.addEventListener("click", () => {

  if(music.paused){
    music.play();
  }else{
    music.pause();
  }

});

// Contact Form
document.getElementById("contactForm")
.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Message Sent Successfully!");

});

// MATRIX EFFECT
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01";
const matrix = letters.split("");

const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];

for(let i = 0; i < columns; i++){
  drops[i] = 1;
}

function draw(){

  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "#0f0";
  ctx.font = fontSize + "px monospace";

  for(let i = 0; i < drops.length; i++){

    const text = matrix[Math.floor(Math.random()*matrix.length)];

    ctx.fillText(text, i*fontSize, drops[i]*fontSize);

    if(drops[i]*fontSize > canvas.height && Math.random() > 0.975){
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw,35);

// Resize Fix
window.addEventListener("resize", () => {

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

});