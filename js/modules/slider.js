let slider = (slideSelector, prevSelector, nextSelector) => {
    
    let slideIndex = 1,
        slides = document.querySelectorAll(slideSelector),
        prev = document.querySelector(prevSelector),
        next = document.querySelector(nextSelector);

    function showSlides(n) {
        slides.forEach((item) => item.style.display = 'none');

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides[slideIndex - 1].style.display = 'block';
    }
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', () => {
        plusSlides(-1);
    });
    next.addEventListener('click', () => {
        plusSlides(1);
    });
};

export default slider;