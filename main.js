const slide = document.querySelector('.slide')
const images = document.querySelectorAll('.img')
const prevbtn = document.querySelector('#prevbtn')
const nextbtn = document.querySelector('#nextbtn')
let counter = 1
const size =images[0].clientWidth

slide.style.transform = 'translateX(' + (-size *counter ) + 'px)' 

nextbtn.addEventListener('click', ()=>{
    if(counter >= images.length - 1) return;
    slide.style.transition = ' transform 1s ease-in-out '
    counter++
    slide.style.transform = 'translateX(' +(-size* counter)+ 'px)'
})

prevbtn.addEventListener('click', ()=>{
    if(counter <= 0) return;
    slide.style.transition = ' transform 1s ease-in-out '
    counter--
    slide.style.transform = 'translateX(' +(-size* counter)+ 'px)'
})

slide.addEventListener('transitionend', () => {
    if(images [counter].id === 'lastclone'){
        slide.style.transition = ' none '
        counter = images.length - 2
        slide.style.transform = 'translateX(' +(-size * counter) + 'px)'
    }
    if(images [counter].id === 'firstclone'){
        slide.style.transition = ' none '
        counter = images.length - counter
        slide.style.transform = 'translateX(' +(-size* counter)+ 'px)'
    }
})