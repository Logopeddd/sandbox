'use strict';

window.onscroll = () => {
    const header = document.querySelector('.header');
    const content = document.getElementById('content')
    if (window.pageYOffset >= 80) {
        header.firstElementChild.style.display = 'none';
        header.style.position = 'fixed';
        header.style.opacity = '0.95';
        content.style.margin = '120px auto 0 auto';
    } else {
        header.firstElementChild.style.display = 'block';
        header.style.position = null;
        header.style.opacity = null;
        content.style.margin = '0 auto 0 auto';
    }
}

