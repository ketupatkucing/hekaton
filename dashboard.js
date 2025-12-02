const burgerOpen = document.querySelector(".burger");
const burgerClose = document.querySelector(".burgerClose");
function openDrawer() {
    document.getElementById("drawer").style.left = "0";
    burgerOpen.style.display = "none";
    burgerClose.style.display = "block";
}
function closeDrawer() {
    document.getElementById("drawer").style.left = "-260px";
    burgerOpen.style.display = "block";
    burgerClose.style.display = "none";
}

function toggleMenu() {
    const nav = document.getElementById("navMenu");
    if (nav.style.display === "flex" || nav.style.display === "") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
    }
}

let slideCount = 0;
const leftSlides = document.querySelectorAll(".leftArticle");
const rightSlides = document.querySelectorAll(".rightArticle");

function next() {
    if (slideCount < leftSlides.length) {
        leftSlides[slideCount].classList.toggle("hidden");
        leftSlides[slideCount].classList.remove("show");
        leftSlides[slideCount].style.animation = "slideRightHide 1s ease";
        rightSlides[slideCount].classList.toggle("hidden");
        rightSlides[slideCount].classList.remove("show");
        rightSlides[slideCount].style.animation = "slideRightHide 1s ease";
        slideCount++;
        if (slideCount < leftSlides.length) {
            leftSlides[slideCount].classList.toggle("show");
            leftSlides[slideCount].classList.remove("hidden");
            leftSlides[slideCount].style.animation = "slideRightShow 1s ease";
            rightSlides[slideCount].classList.toggle("show");
            rightSlides[slideCount].classList.remove("hidden");
            rightSlides[slideCount].style.animation = "slideRightShow 1s ease";
        } else {
            slideCount = 0;
            leftSlides[slideCount].classList.toggle("show");
            leftSlides[slideCount].classList.remove("hidden");
            leftSlides[slideCount].style.animation = "slideRightShow 1s ease";
            rightSlides[slideCount].classList.toggle("show");
            rightSlides[slideCount].classList.remove("hidden");
            rightSlides[slideCount].style.animation = "slideRightShow 1s ease";
        }
    }
}

function prev() {
    if (slideCount >= 0) {
        leftSlides[slideCount].classList.toggle("hidden");
        leftSlides[slideCount].classList.remove("show");
        leftSlides[slideCount].style.animation = "slideLeftHide 1s ease";
        rightSlides[slideCount].classList.toggle("hidden");
        rightSlides[slideCount].classList.remove("show");
        rightSlides[slideCount].style.animation = "slideLeftHide 1s ease";
        slideCount--;
        if (slideCount >= 0) {
            leftSlides[slideCount].classList.toggle("show");
            leftSlides[slideCount].classList.remove("hidden");
            leftSlides[slideCount].style.animation = "slideLeftShow 1s ease";
            rightSlides[slideCount].classList.toggle("show");
            rightSlides[slideCount].classList.remove("hidden");
            rightSlides[slideCount].style.animation = "slideLeftShow 1s ease";
            console.log(slideCount, leftSlides.length);
        } else {
            slideCount = leftSlides.length - 1;
            leftSlides[slideCount].classList.toggle("show");
            leftSlides[slideCount].classList.remove("hidden");
            leftSlides[slideCount].style.animation = "slideLeftShow 1s ease";
            rightSlides[slideCount].classList.toggle("show");
            rightSlides[slideCount].classList.remove("hidden");
            rightSlides[slideCount].style.animation = "slideLeftShow 1s ease";
        }
    }
}
