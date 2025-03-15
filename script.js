// 点击页面任意位置关闭菜单
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    if (!event.target.closest('nav')) {
        nav.classList.remove('nav-active');
    }
});

// 汉堡菜单动画
document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
});