// مصفوفة صور الخلفية
const images = [
    'WA1.jpeg',
    'WA2.jpeg',
    'WA3.jpeg',
    'WA4.jpeg'
];
let currentIndex = 0;
const heroSection = document.getElementById('hero');

function changeBackgroundImage() {
    heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

changeBackgroundImage();
setInterval(changeBackgroundImage, 10000);

window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(11, 13, 18, 0.98)';
        header.style.padding = '5px 0';
    } else {
        header.style.backgroundColor = 'rgba(17, 20, 27, 0.95)';
        header.style.padding = '8px 0';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});