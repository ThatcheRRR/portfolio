const swiper = new Swiper ('.swiper-container', {    
    loop: true,  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
 
const spoilerWrap = document.querySelector('.spoiler-wrap');

spoilerWrap.addEventListener('click', function() {
    spoilerWrap.classList.toggle('active');
});
