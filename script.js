const nextButton = document.querySelector('.next-btn')
const prevButton = document.querySelector('.prev-btn')
const slide = document.querySelectorAll('.carrossel-item')

let currentSlideIndex = 0
const lastSlideIndex = slide.length - 1

const manipulateClasses = correctSlideIndex =>{
    slide.forEach(slide =>{
        slide.classList.remove('visible-item')
    })

    slide[correctSlideIndex].classList.add('visible-item')
}

nextButton.addEventListener('click', () => {
    let correctSlideIndex = currentSlideIndex == lastSlideIndex 
    ? currentSlideIndex = 0
    : ++currentSlideIndex

    manipulateClasses(correctSlideIndex)
})

prevButton.addEventListener('click', () =>{
    let correctSlideIndex = currentSlideIndex == 0
    ? currentSlideIndex = lastSlideIndex
    : --currentSlideIndex

    manipulateClasses(correctSlideIndex)
})