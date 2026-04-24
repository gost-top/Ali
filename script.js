// تهيئة AOS
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 800,
        once: true
    });
});

// نظام الوضع الليلي
const themeToggleBtn = document.getElementById('themeToggleBtn');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
}

// إخفاء الـ Loader
function hideLoader() {
    const loader = document.getElementById("loader-wrapper");
    if (loader && loader.style.display !== "none") {
        loader.classList.add("loader-hidden");
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
}

window.addEventListener("load", hideLoader);
setTimeout(hideLoader, 2000);

// مشاهدة العناصر عند التمرير
const revealTargets = document.querySelectorAll('.reveal-on-scroll, .reveal-item');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.18,
    rootMargin: '0px 0px -40px 0px'
});

revealTargets.forEach((el, index) => {
    if (el.classList.contains('reveal-item')) {
        el.style.transitionDelay = `${(index % 6) * 70}ms`;
    }
    revealObserver.observe(el);
});

// منع النقر بزر الماوس الأيمن وبعض اختصارات لوحة المفاتيح
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('keydown', function (e) {
    if (
        e.keyCode === 123 ||
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
        (e.ctrlKey && e.shiftKey && e.keyCode === 67) ||
        (e.ctrlKey && e.keyCode === 85)
    ) {
        e.preventDefault();
    }
});