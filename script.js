function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');
    
    const img = document.querySelector(".profile img");

    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/Mobile/avatar2.png');
        img.setAttribute('alt', 'Profile-lightmode-avatar');
    } else {
        img.setAttribute('src', './assets/Mobile/avatar1.png');
        img.setAttribute('alt', 'Profile-darkmode-avatar');
    }
}