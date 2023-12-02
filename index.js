const bar = document.querySelector('.bar')
const listCon = document.querySelector('.list-con')
const oneBar = document.querySelector('.one')
const twoBar = document.querySelector('.two')
const threeBar = document.querySelector('.three')
const the_animation = document.querySelectorAll('.animator')



window.onload = function () {
    let slides = document.getElementsByClassName('carousel-item')

    function addActive(slide) {
        slide.classList.add('active')
    }

    function removeActive(slide) {
        slide.classList.remove('active')
    }

    addActive(slides[0])
    setInterval(() => {
        for (let i = 0; i < slides.length; i++) {
            if (i + 1 == slides.length) {
                addActive(slides[0])
                setTimeout(removeActive,350,slides[i])
                break
            } 

            if(slides[i].classList.contains('active')) {
                setTimeout(removeActive,350,slides[i])
                addActive(slides[i+1])
                break
            }
        }
    },1500)

}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }else {
            entry.target.classList.remove('scroll-animation')
        }
    })
},{
    threshold:0.5
})

for(let i=0; i < the_animation.length;i++) {
    const elements = the_animation[i]
    observer.observe(elements) 
}

bar.addEventListener('click',() => {
    // console.log('hello');
    listCon.classList.toggle('h')
    oneBar.classList.toggle('a')
    twoBar.classList.toggle('c')
   threeBar.classList.toggle('b')
})