const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

/* Event listener for images */

imgs.forEach (img => 
    img.addEventListener('click', imgClick)
);

function imgClick(e) {
    current.src = e.target.src;
}
