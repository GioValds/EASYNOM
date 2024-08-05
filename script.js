let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 3000);

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        box.classList.add('clicked');
        setTimeout(() => {
            box.classList.remove('clicked');
        }, 200);
    });
});

function toggleMenu() {
    document.querySelector('.hamburger-menu').classList.toggle('show');
}
