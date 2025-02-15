// 移动端菜单切换
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    navLinks.classList.toggle('active');
    menuToggle.textContent = navLinks.classList.contains('active') ? '×' : '☰';
}

menuToggle.addEventListener('click', toggleMenu);

// 点击外部关闭菜单
document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-container') && navLinks.classList.contains('active')) {
        toggleMenu();
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 动态加载Font Awesome
const loadFontAwesome = () => {
    const fa = document.createElement('link');
    fa.rel = 'stylesheet';
    fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    document.head.appendChild(fa);
};

window.addEventListener('DOMContentLoaded', loadFontAwesome);