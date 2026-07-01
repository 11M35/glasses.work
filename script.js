const images = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80'
];

let currentIndex = 0;
const heroSection = document.getElementById('hero');

function changeBackgroundImage() {
    heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

changeBackgroundImage();
setInterval(changeBackgroundImage, 10000); // تغيير تلقائي كل 10 ثوانٍ

window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(11, 13, 18, 0.98)';
    } else {
        header.style.backgroundColor = 'rgba(17, 20, 27, 0.95)';
    }
});