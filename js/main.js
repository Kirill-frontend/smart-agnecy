const arrowLeft = document.querySelector('.slider_left_arrow')
const arrowRight = document.querySelector('.slider_right_arrow')

const dotsWrapp = document.querySelector('.slider_dots')

const slides = document.querySelectorAll('.feedback_slide')

let slideCount = 0


function toggleSlide() {
  slides.forEach(item => {
    item.classList.add('hide')
  })
  slides[slideCount].classList.remove('hide')
}

toggleSlide()


arrowLeft.addEventListener('click', function () {
  if (slideCount === 0) {
    slideCount = slides.length - 1
    toggleSlide()
    toggleDots()
  } else {
    --slideCount
    toggleSlide()
    toggleDots()
  }
})

arrowRight.addEventListener('click', function () {
  if (slideCount < slides.length - 1) {
    ++slideCount
    toggleSlide()
    toggleDots()
  } else {
    slideCount = 0
    toggleSlide()
    toggleDots()
  }
})


const createDots = () => {

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div')
    dot.classList.add('slider_dot')
    dotsWrapp.append(dot)
  }

  const dots = document.querySelectorAll('.slider_dot')
  dots[0].classList.add('dot_active')
  dots.forEach(item => item.addEventListener('click', function (e) {
    const dots = document.querySelectorAll('.slider_dot')
    console.log(item);

    if (e.target.classList.contains('dot_active')) {

      return false
    } else {
      const dots = document.querySelectorAll('.slider_dot')

      dots.forEach(item => item.classList.remove('dot_active'))
      item.classList.add('dot_active')
      dots.forEach((item, index) => {
        if (item.classList.contains('dot_active')) {
          console.log(index);
          slideCount = index
        }
      })
    }
  }));
}

function toggleDots() {
  const dots = document.querySelectorAll('.slider_dot')

  dots.forEach(item => item.classList.remove('dot_active'));
  dots[slideCount].classList.add('dot_active')
}


if (dotsWrapp) {
  createDots()
};

// Scroll

const navItem = document.querySelectorAll('.header_nav_list li')

navItem.forEach(item => {
  item.addEventListener('click', () => {
    scrollToElem(item.dataset.scrollto)
  })
})

function scrollToElem(elem) {
  const element = document.querySelector(`.${elem}`)
  const box = element.getBoundingClientRect()
  scrollTo({
    top: box.top + pageYOffset,
    behavior: 'smooth'
  })
}

//loader 
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    document.querySelector('body').classList.remove('scroll-lock')
    document.querySelector('.loader_wrap').remove()    
  }, 1000)  
})