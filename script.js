// 🌟 Smooth Scroll (if navigation is added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


// 🌟 Reveal Sections on Scroll (Modern UI)
const sections = document.querySelectorAll("section");

function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        } else {
            section.style.opacity = "0";
            section.style.transform = "translateY(40px)";
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// 🌟 CTA Click Interaction (Ad-style response)
const ctas = document.querySelectorAll(".cta");

ctas.forEach(cta => {
    cta.addEventListener("click", () => {
        alert("🔥 You're one step away! Book your consultation now.");
    });
});


// 🌟 Highlight Hooks on Hover
const hooks = document.querySelectorAll("li");

hooks.forEach(hook => {
    hook.addEventListener("mouseover", () => {
        hook.style.color = "#ff3c78";
        hook.style.fontWeight = "bold";
        hook.style.cursor = "pointer";
    });

    hook.addEventListener("mouseout", () => {
        hook.style.color = "#333";
        hook.style.fontWeight = "normal";
    });
});


// 🌟 Simulate “Ad Engagement Counter”
let views = 1200;

const header = document.querySelector("header");
const viewText = document.createElement("p");

viewText.style.marginTop = "10px";
viewText.style.fontSize = "14px";

function updateViews() {
    views += Math.floor(Math.random() * 10);
    viewText.textContent = `👀 ${views}+ people viewed this ad`;
}

header.appendChild(viewText);
setInterval(updateViews, 2000);


// 🌟 Dynamic Time-Based Message (UGC vibe)
const hour = new Date().getHours();
let message = "";

if (hour < 12) {
    message = "🌅 Morning scroll? Check this out!";
} else if (hour < 18) {
    message = "☀️ Trending now in skincare!";
} else {
    message = "🌙 Night routine upgrade starts here!";
}

const msg = document.createElement("p");
msg.textContent = message;
msg.style.fontWeight = "bold";

header.appendChild(msg);


// 🌟 Console Branding 😎
console.log("🚀 UGC Ad Content Page Loaded Successfully!");
