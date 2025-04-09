//  DOM elements
const overlay = document.querySelector('.overlay-main');
const userProfile = document.querySelector('.user-profile');
const navHeaders = document.querySelectorAll('.nav-link');

const showOverlay = () => {
    overlay.style.display = 'block';
};

const hideOverlay = () => {
    overlay.style.display = 'none';
};

userProfile.addEventListener('mouseenter', showOverlay);
userProfile.addEventListener('mouseleave', hideOverlay);

navHeaders.forEach(header => {
    header.addEventListener('mouseenter', showOverlay);
    header.addEventListener('mouseleave', hideOverlay);
});