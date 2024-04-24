const slideButton = document.getElementById('slideButton');
const coverDiv = document.getElementById('coverDiv');

slideButton.addEventListener('click', () => {
    coverDiv.style.height = '100%';
});   

document.addEventListener("DOMContentLoaded", function() {
var sidebar = document.getElementById("sidebar");
var content = document.querySelector(".content");
var menuToggle = document.querySelector(".menu-toggle");
var backButton = document.getElementById("backButton");
var request = document.querySelector("#request");

function toggleMenu() {
    sidebar.classList.toggle("active");
    content.classList.toggle("active");
}

function load(){
    window.location.href = "loading.html";
    submitIssue();
}

function back(){
    window.location.href= "AutoworldHome.html";
}

menuToggle.addEventListener("click", toggleMenu);
backButton.addEventListener("click", back);
request.addEventListener("click", load);

document.addEventListener("click", function(event) {
    var isClickInside = sidebar.contains(event.target) || menuToggle.contains(event.target);
    if (!isClickInside && sidebar.classList.contains("active")) {
    toggleMenu();
    }
});
});

