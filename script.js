const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: {
        OnlyInViewport:true,
    },
    slidesPerView: 3,
});



function getNumbersSum(num){

        return num.toString().split('').reduce(function(a, b) {

            return +a + +b;

        })
    }
    
    console.log(getNumbersSum(36));