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

async function sendMessage(){

  const input = document.getElementById("userInput");

  const message = input.value;

  if(message.trim() === "") return;

  const chatBox = document.getElementById("chatBox");

  // USER MESSAGE

  chatBox.innerHTML += `
    <div class="user-message">
      ${message}
    </div>
  `;

  input.value = "";

  // API REQUEST

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY",
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify({

        contents:[
          {
            parts:[
              {
                text:
                `
                You are Pranjal Mitra's portfolio assistant.

                About Pranjal:
                - BTech CSE Student
                - Skills: HTML, CSS, JS, Python, C++
                - Projects: Arduino RC Car, Shadow Sensor
                - Future Software Engineer

                User Question:
                ${message}
                `
              }
            ]
          }
        ]

      })

    }
  );

  const data = await response.json();

  const botReply =
    data.candidates[0].content.parts[0].text;

  chatBox.innerHTML += `
    <div class="bot-message">
      ${botReply}
    </div>
  `;

  chatBox.scrollTop = chatBox.scrollHeight;
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
