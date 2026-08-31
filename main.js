 
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const toggleIcon = mobileToggle.querySelector('i');

 
mobileToggle.addEventListener('click', function () {

 
    if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
 
        mobileMenu.style.display = 'block';
 
        toggleIcon.classList.remove('fa-bars');
        toggleIcon.classList.add('fa-xmark');
    } else {
 
        mobileMenu.style.display = 'none';
 
        toggleIcon.classList.remove('fa-xmark');
        toggleIcon.classList.add('fa-bars');
    }
});