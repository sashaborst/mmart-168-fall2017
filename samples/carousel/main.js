/*
Inspiration:
https://demo.themefuse.com/the-core/?iframe=true
*/
let counter = 1
let direction = 'forward'
const images = [
    'https://d359p6e6ippbat.cloudfront.net/the-core/wp-content/uploads/2015/09/slide1_revo.jpg',
    'https://d359p6e6ippbat.cloudfront.net/the-core/wp-content/uploads/2015/09/slide2_revo.jpg',
    'https://d359p6e6ippbat.cloudfront.net/the-core/wp-content/uploads/2015/09/slide3_revo.jpg',
    'https://d359p6e6ippbat.cloudfront.net/the-core/wp-content/uploads/2015/09/slide4_revo.jpg'
]

const loadImages = () => {
    let num = 1
    images.forEach(imgURL => {
        const img = document.createElement('img')
        img.src = imgURL
        img.className = 'hide'
        img.id = 'slide_' + num
        document.getElementById('carousel').appendChild(img)
        ++num
    })
    document.getElementById('slide_1').className = 'show'
}

const hideSlide = (className) => {
    document.getElementById('slide_' + counter).className = className
}

const showSlide = (className) => {
    document.getElementById('slide_' + counter).className = className
}

const incrementCounter = () => {
    if (counter === images.length) {
        counter = 1
    } else {
        ++counter
    }
}

const decrementCounter = () => {
    if (counter === 1) {
        counter = images.length
    } else {
        --counter
    }
}

const showNext = () => {
    if (direction === 'forward') {
        hideSlide('left-out')
        incrementCounter()
        showSlide('left-in')
    } else {
        hideSlide('right-out')
        decrementCounter()
        showSlide('right-in')
    }
}

loadImages()
setInterval(showNext, 3000)
