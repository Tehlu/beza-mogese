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

// Clipboard copy for contact cards using event delegation
function restoreCopyIcon(btn) {
    btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><rect x="3" y="3" width="13" height="13" rx="2"/></svg>';
}
document.addEventListener('click', function(e) {
    if (e.target.closest('.copy-btn')) {
        const btn = e.target.closest('.copy-btn');
        const text = btn.getAttribute('data-copy');
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                btn.textContent = 'Copied!';
                setTimeout(() => restoreCopyIcon(btn), 1200);
            });
        } else {
            // fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            btn.textContent = 'Copied!';
            setTimeout(() => restoreCopyIcon(btn), 1200);
        }
    }
});

// Set up navigation event listeners
window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            showPage(page);
        });
    });
    // Only show home by default if #right does NOT already have a background-image set
    const rightDiv = document.getElementById('right');
    if (rightDiv && !rightDiv.style.backgroundImage) {
        showPage('home');
    }
});
