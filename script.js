// مصفوفة تحتوي على روابط الخلفيات (يمكنك استبدال الروابط بصورك الخاصة لاحقاً)
const images = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80', // صورة واجهة زجاجية حديثة
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80', // تصميم داخلي مودرن
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80'  // نافذة زجاجية عملاقة
];

let currentIndex = 0;
const heroSection = document.getElementById('hero');

// دالة تغيير الخلفية
function changeBackgroundImage() {
    // تطبيق الصورة الحالية بناءً على الـ Index
    heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
    
    // الانتقال للعنصر التالي، والعودة للصفر إذا وصلنا لنهاية المصفوفة
    currentIndex = (currentIndex + 1) % images.length;
}

// تشغيل الدالة فور تحميل الصفحة لأول مرة
changeBackgroundImage();

// تعيين التغيير التلقائي ليعمل بدقة كل 10 ثوانٍ (10000ms)
setInterval(changeBackgroundImage, 10000);


// تفعيل تأثير بسيط عند التمرير لشريط التنقل العلوي (اختياري لجمالية الموقع)
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