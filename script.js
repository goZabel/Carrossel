const slides = document.querySelectorAll('.carrossel-item')
const nextButton = document.querySelector('.next-btn')
const prevButton = document.querySelector('.prev-btn')

let currentSlideIndex = 0
const lastSlideIndex = slides.length -1

const manipulateSlideIndex = correctSlideIndex => {
    slides.forEach(slide =>{
        slide.classList.remove('visible-item')
    })

    slides[correctSlideIndex].classList.add('visible-item')
}

nextButton.addEventListener('click', () => {
    let correctSlideIndex = currentSlideIndex == lastSlideIndex
    ? currentSlideIndex = 0
    : ++currentSlideIndex

    manipulateSlideIndex(correctSlideIndex)
})

prevButton.addEventListener('click', () => {
    let correctSlideIndex = currentSlideIndex == 0
    ? currentSlideIndex = lastSlideIndex
    : --currentSlideIndex

    manipulateSlideIndex(correctSlideIndex)
})