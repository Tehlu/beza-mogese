// Mapping of page to image
const pageBackgrounds = {
    home: 'img/Home.jpg',
    about: 'img/About.jpg',
    projects: 'img/Projects.jpg',
    blog: 'img/Blog.jpg',
    contact: 'img/Contact.jpg'
};

function showPage(page) {
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(div => {
        div.classList.remove('active');
    });
    // Show selected page
    const pageDiv = document.getElementById(page + '-page');
    if (pageDiv) {
        pageDiv.classList.add('active');
    }
    // Set background image
    const rightDiv = document.getElementById('right');
    rightDiv.style.backgroundImage = `url('${pageBackgrounds[page]}')`;
    rightDiv.style.backgroundSize = 'cover';
    rightDiv.style.backgroundRepeat = 'no-repeat';
    rightDiv.style.backgroundPosition = 'center';
    rightDiv.style.backgroundAttachment = 'fixed';
    rightDiv.style.backgroundBlendMode = 'lighten';
    rightDiv.style.opacity = 1;
}

// Set up navigation event listeners
window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            showPage(page);
        });
    });
    // Show home by default
    showPage('home');
});
