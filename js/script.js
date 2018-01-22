const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

/* Event listener for images */

imgs.forEach (img => 
    img.addEventListener('click', imgClick)
);

function imgClick(e) {
    // Reset opacity 
    imgs.forEach(img => (img.style.opacity = 1));

    current.src = e.target.src;

    // Fade in class 
    current.classList.add('fade-in');


    // Change image opacity
    e.target.style.opacity = opacity;
}
