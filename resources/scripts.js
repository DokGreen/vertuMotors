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