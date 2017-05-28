'use strict';

window.onscroll = () => {
    const header = document.querySelector('.header');
    const content = document.getElementById('content');
    if (window.pageYOffset >= 80) {
        document.getElementById('up').classList.remove('invisible');
        document.getElementById('back').classList.add('invisible');
        header.firstElementChild.style.display = 'none';
        header.style.position = 'fixed';
        header.style.opacity = '0.95';
        content.style.margin = '120px auto 0 auto';
        document.getElementById('top_menu').style.marginLeft = '10px';
    } else {
        document.getElementById('top_menu').style.marginLeft = '140px';
        document.getElementById('up').classList.add('invisible');
        if (document.getElementById('news').classList.contains('invisible')) {
            document.getElementById('back').classList.remove('invisible');
        }
        header.firstElementChild.style.display = 'block';
        header.style.position = null;
        header.style.opacity = null;
        content.style.margin = '0 auto 0 auto';
    }
};
