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

// AOS Animation
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
// GEMINI AI CHATBOT

function sendMessage(){

  const input =
  document.getElementById("userInput");

  const message =
  input.value.toLowerCase();

  if(message.trim() === "") return;

  const chatBox =
  document.getElementById("chatBox");

  // USER MESSAGE

  chatBox.innerHTML += `
    <div class="user-message">
      ${message}
    </div>
  `;

  let botReply =
  "Sorry, I don't understand.";

  // PREDEFINED REPLIES

  if(message.includes("who")){

    botReply =
    "Pranjal Mitra is a BTech CSE student passionate about software development, AI, and modern web technologies.";

  }

  else if(message.includes("skills")){

    botReply =
    "Skills include HTML, CSS, JavaScript, Python, C/C++, GitHub, and frontend development.";

  }

  else if(message.includes("project")){

    botReply =
    "Projects include an Arduino Bluetooth RC Car and Shadow Sensor using Raspberry Pi Pico.";

  }

  else if(message.includes("contact")){

    botReply =
    "You can contact Pranjal through LinkedIn, Instagram, or Email from the contact section.";

  }

  else if(message.includes("resume")){

    botReply =
    "You can download Pranjal's resume using the Download Resume button.";

  }

  // BOT MESSAGE

  chatBox.innerHTML += `
    <div class="bot-message">
      ${botReply}
    </div>
  `;

  input.value = "";

  chatBox.scrollTop =
  chatBox.scrollHeight;

}
}
// Background Music Toggle
const music = document.getElementById("bgMusic");

document.getElementById("musicToggle")
.addEventListener("click", () => {

  if (music.paused) {

    music.play();

  } else {

    music.pause();

  }

});

// ==============================
// EMAILJS CONTACT FORM
// ==============================

// Initialize EmailJS
emailjs.init("ZJFhV9kSm5LVQO1wg");

// Contact Form Submit
document.getElementById("contactForm")
.addEventListener("submit", function(e) {

  e.preventDefault();

  emailjs.sendForm(
    "service_5g15su6",
    "template_lg458x8",
    this
  )

  .then(() => {

    alert("Message Sent Successfully!");

    // Reset form after sending
    document.getElementById("contactForm").reset();

  })

  .catch((error) => {

    alert("Failed to send message!");

    console.log("EmailJS Error:", error);

  });

});

// ==============================
// MATRIX EFFECT
// ==============================

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01";
const matrix = letters.split("");

const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];

for (let i = 0; i < columns; i++) {

  drops[i] = 1;

}

function draw() {

  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0f0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {

    const text = matrix[Math.floor(Math.random() * matrix.length)];

    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (
      drops[i] * fontSize > canvas.height &&
      Math.random() > 0.975
    ) {

      drops[i] = 0;

    }

    drops[i]++;

  }

}

setInterval(draw, 35);

// Resize Fix
window.addEventListener("resize", () => {

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

});
const chatToggle =
document.getElementById("chatToggle");

const chatbot =
document.querySelector(".chatbot-container");

chatToggle.addEventListener("click",()=>{

  if(chatbot.style.display === "flex"){

    chatbot.style.display = "none";

  }

  else{

    chatbot.style.display = "flex";

  }

});
