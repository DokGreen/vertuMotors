//---------------------------------------------------------------- VARIABLES

//vars for the buttons of the top carousel
const bpBtn = document.querySelector('.inner--bp');
const layoutBtn = document.querySelector('.inner--layout');
const colorBtn = document.querySelector('.inner--color');
const trimBtn = document.querySelector('.inner--trim');

//var for the sections
const bpSect = document.querySelector('.carousel--bp');
const layoutSect = document.querySelector('.carousel--layout');
const colorSect = document.querySelector('.carousel--color');
const trimSect = document.querySelector('.carousel--trim');


//---------------------------------------------------------------- FUNCTIONS

//add and remove class/styles for carousel top
function toggle(a, r) {
    layoutBtn.classList.remove('carousel--active');
    bpBtn.classList.remove('carousel--active');
    colorBtn.classList.remove('carousel--active');
    trimBtn.classList.remove('carousel--active');
    
    a.classList.add('carousel--active');
    
    bpSect.style.display = 'none';
    colorSect.style.display = 'none';
    layoutSect.style.display = 'none';
    trimSect.style.display = 'none';
    
    r.style.display = 'block';
}

//------------------------------------------------Flip through Carousel top
bpBtn.addEventListener('click', () => {
    trimBtn.classList.remove('carousel--active');
    layoutBtn.classList.remove('carousel--active');
    colorBtn.classList.remove('carousel--active');
    
    bpBtn.classList.add('carousel--active');
    
    layoutSect.style.display = 'none';
    colorSect.style.display = 'none';
    trimSect.style.display = 'none';
    
    bpSect.style.display = 'flex';
});

layoutBtn.addEventListener('click', () => toggle(layoutBtn, layoutSect));

colorBtn.addEventListener('click', () => toggle(colorBtn, colorSect));

trimBtn.addEventListener('click', () => toggle(trimBtn, trimSect));
//------------------------------------------------------------------------------
//--------------------------------------------------------------- CAR PICKER
//array of dots
const dots = document.querySelectorAll('.dot');
console.log(dots);


//loop through the dots waiting for a click
//on click display the car class aka the name of the car img
for(i = 0; i < dots.length; i++) {
    
    const carSrc = document.getElementsByClassName('car__cat--container')[0];
    
    let car = dots[i].className.split(' ').pop();
    dots[i].addEventListener('click', () => {
        console.log(car);
        
        
        //change the bg img to reflect the btn
        carSrc.style.backgroundImage = `url(resources/media/${car}.png)` 
    })
}



//---------------------------------------------------------------CAROUSEL BOTTOM

const track = document.querySelector('.carousel__track--bottom');
const slides = Array.from(track.children);
//console.log(slides);

const preBtn = document.querySelector('.pre--btn');
const nextBtn = document.querySelector('.next--btn');

//numbers
const numNav = document.querySelector('.carousel--nav');
let count = 1;

//size of the slides
const slideWidth = slides[0].getBoundingClientRect().width;

const slidePosition = (s, index) => {
    s.style.left = slideWidth * index + 'px';
};

console.log();

//move the slides over
slides.forEach(slidePosition);

function moveToSlide (track, currentSlide, targetSlide) {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('currentSlide');
    targetSlide.classList.add('currentSlide');
};


nextBtn.addEventListener('click', () => {
    
    if(count >= slides.length) {
        console.log('Max reached');
    } else {
    count++;
    }
    const currentSlide = document.querySelector('.currentSlide');
    const nextSlide = currentSlide.nextElementSibling;
    numNav.innerHTML = count + '/12';
    
   moveToSlide(track, currentSlide, nextSlide);
})

preBtn.addEventListener('click', () => {
    
    if(count == 1) {
        console.log('Min reached');
    } else {
    count--;
    }
    const currentSlide = document.querySelector('.currentSlide');
    const preSlide = currentSlide.previousElementSibling;
    numNav.innerHTML = count + '/12';
   
    moveToSlide(track, currentSlide, preSlide);
})