const showButton = document.querySelector("body > main > section.education > div.education__header > div.education__header_arrow > svg");
const edu = document.querySelector("body > main > section.education > div.education__descr");
const head = document.querySelector("body > main > section.education > div.education__header");
const swiperBtn = document.querySelector('.swiper-button');
const swiperBtnDescr = document.querySelector('.swiper-top_panel p');
const swiperDescr = document.querySelectorAll('.card-description');
const card = document.querySelectorAll('.card');
const h = document.querySelector('h2');

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
    if (swiperBtnDescr.innerText === "Show description") {
        swiperBtnDescr.innerText = "Hide description";
    } else {
        swiperBtnDescr.innerText = "Show description";
    }
});

if (parseInt(getComputedStyle(document.body).width) <= 720) {
    card[0].onclick = () => {
        location.href = 'project1.html';
    }
    
    card[1].onclick = () => {
        location.href = 'project2.html';
    }
}
