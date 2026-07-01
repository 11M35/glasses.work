// مصفوفة صور الخلفية المحلية الخاصة بك بدلاً من الروابط الخارجية
// تم تعديلها لتستدعي صورك الثلاثة مباشرة بنفس الامتداد المطلوب
const images = [
    'WA1.jpeg',
    'WA2.jpeg',
    'WA3.jpeg',
     'WA4.jpeg'
];
let currentIndex = 0;
const heroSection = document.getElementById('hero');

// دالة تغيير الخلفية (تعدل مسار الخلفية في الـ CSS برمجياً)
function changeBackgroundImage() {
    heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

// تشغيل الدالة فور تحميل الصفحة لأول مرة لتظهر الصورة الأولى w1.jpeg
changeBackgroundImage();

// التغيير التلقائي ليعمل بدقة كل 10 ثوانٍ (10000ms) بين الصور الثلاث
setInterval(changeBackgroundImage, 10000);

// تأثير الـ Header عند التمرير (ثابت بدون تغيير لحفظ التصميم)
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(11, 13, 18, 0.98)';
        header.style.padding = '5px 0';
    } else {
        header.style.backgroundColor = 'rgba(17, 20, 27, 0.95)';
        header.style.padding = '15px 0';
    }
});

// تفعيل روابط التنقل السلس (Smooth Scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});