const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

// Opacity first image 
imgs[0].style.opacity = opacity;

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

    // Remove fade-in class after click

    setTimeout(() => current.classList.remove('fade-in'), 500);


    // Change image opacity
    e.target.style.opacity = opacity;
}
