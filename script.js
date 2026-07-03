// مصفوفة صور الخلفية
const images = [
    'WA1.jpeg',
    'WA2.jpeg',
    'WA3.jpeg',
    'WA4.jpeg'
];
let currentIndex = 0;
const heroSection = document.getElementById('hero');

// دالة تغيير الخلفية
function changeBackgroundImage() {
    heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

// تشغيل الصورة الأولى فوراً
changeBackgroundImage();

// التبديل التلقائي كل 10 ثوانٍ
setInterval(changeBackgroundImage, 10000);

// تأثير الهيدر عند التمرير
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

// تمرير سلس للروابط الداخلية
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});