const showButton = document.querySelector("body > main > section.education > div.education__header > div.education__header_arrow > svg");
const edu = document.querySelector("body > main > section.education > div.education__descr");
const head = document.querySelector("body > main > section.education > div.education__header");
const swiperBtn = document.querySelector('.swiper-button');
const swiperBtnDescr = document.querySelector('.swiper-top_panel p');
const swiperDescr = document.querySelectorAll('.card-description');

window.onload = () => {
    edu.classList.add('hidden');
};

const swiper = new Swiper ('.swiper-container', {    
    loop: true,  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

head.addEventListener('click', () => {
    let elem = getComputedStyle(showButton);
    let check = elem.transform;
    if (check !== 'none') {
        showButton.style.transform = '';
    } else {
        showButton.style.transform = 'rotate(180deg)';
    }
    edu.classList.toggle('hidden');
});

swiperBtn.addEventListener('click', function() {  
    swiperDescr.forEach(el => el.classList.toggle('visible'));
    if (swiperBtnDescr.innerHTML === "Show description") {
        swiperBtnDescr.innerHTML = "Hide description";
    } else {
        swiperBtnDescr.innerHTML = "Show description";
    }
});
