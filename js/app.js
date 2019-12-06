const showButton = document.querySelector("body > main > section.education > div.education__header > div.education__header_arrow > svg");
const edu = document.querySelector("body > main > section.education > div.education__descr");
const head = document.querySelector("body > main > section.education > div.education__header");

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
