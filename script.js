const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 80){

navbar.style.background = "rgba(0,0,0,.95)";
navbar.style.boxShadow = "0 10px 20px rgba(0,0,0,.4)";
navbar.style.padding = "12px 0";

}else{

navbar.style.background = "rgba(0,0,0,.6)";
navbar.style.boxShadow = "none";
navbar.style.padding = "18px 0";

}

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;

if(scrollY >= sectionTop){
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});

});

const menu = document.querySelector(".navbar-collapse");

document.querySelectorAll(".nav-link").forEach(link => {

link.addEventListener("click", () => {

if(menu.classList.contains("show")){

bootstrap.Collapse.getInstance(menu).hide();

}

});

});

const revealItems = document.querySelectorAll(
".about-section,.project-card,.blog-card,.testimonial,.contact-section"
);

function revealAnimation(){

revealItems.forEach(item => {

const top = item.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

item.classList.add("show-animation");

}

});

}

window.addEventListener("scroll", revealAnimation);

revealAnimation();

const counters = document.querySelectorAll(".about-box h3");

let started = false;

function runCounter(){

const about = document.querySelector(".about-section");

if(window.scrollY > about.offsetTop - 300 && !started){

counters.forEach(counter => {

const target = parseInt(counter.innerText);

let count = 0;

const update = () => {

count += target / 100;

if(count < target){

counter.innerText =
Math.floor(count) + "+";

requestAnimationFrame(update);

}else{

counter.innerText = target + "+";

}

};

update();

});

started = true;

}

}

window.addEventListener("scroll", runCounter);

const words = [
"Innovative Architecture",
"Luxury Interior Design",
"Smart Urban Planning",
"Modern Living Spaces"
];

const heroText = document.querySelector(".hero-text");

let index = 0;

setInterval(() => {

heroText.style.opacity = "0";

setTimeout(() => {

heroText.innerText = words[index];

heroText.style.opacity = "1";

index++;

if(index >= words.length){
index = 0;
}

},400);

},3000);

const topButton = document.createElement("button");

topButton.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

topButton.classList.add("top-btn");

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

if(window.scrollY > 500){

topButton.classList.add("show-top-btn");

}else{

topButton.classList.remove("show-top-btn");

}

});

topButton.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});

const toastNotice = document.createElement("div");
toastNotice.className = "toast-notice";
document.body.appendChild(toastNotice);
let toastTimer = null;

function showToast(message) {
clearTimeout(toastTimer);
toastNotice.textContent = message;
toastNotice.classList.add("show-toast");
toastTimer = setTimeout(() => {
toastNotice.classList.remove("show-toast");
}, 3700);
}

const projectButtons = document.querySelectorAll(".project-btn");
projectButtons.forEach(button => {
button.addEventListener("click", event => {
const clickedCard = event.target.closest(".project-card");
const clickedDetails = clickedCard?.querySelector(".project-details");
const projectName = clickedCard?.dataset.project || "Project";

projectButtons.forEach(btn => {
const card = btn.closest(".project-card");
const details = card?.querySelector(".project-details");
if (card !== clickedCard) {
if (details?.classList.contains("active")) {
details.classList.remove("active");
btn.textContent = "View Project";
}
}
});

const isActive = clickedDetails?.classList.toggle("active");
button.textContent = isActive ? "Hide Details" : "View Project";
showToast(isActive ? `Showing details for ${projectName}.` : `Hiding details for ${projectName}.`);
});
});

const contactForm = document.querySelector("#contact form");
if (contactForm) {
contactForm.addEventListener("submit", event => {
event.preventDefault();
showToast("Thank you! Your message has been sent. We will reply soon.");
contactForm.reset();
});
}
