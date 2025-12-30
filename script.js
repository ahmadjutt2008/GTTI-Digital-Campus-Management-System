document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Add mobile login buttons if missing
    // Since we hid auth-buttons on mobile in CSS, let's clone them into the nav menu for mobile
    if (window.innerWidth <= 768) {
        moveAuthButtons();
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            moveAuthButtons();
        } else {
            // Optional: move back if needed, but for simplicity we rely on desktop layout
            const authContainer = document.querySelector('.auth-buttons');
            const mobileItems = document.querySelectorAll('.nav-links .mobile-auth-item');
            mobileItems.forEach(item => item.remove());
            // Restore proper display for dropdown - check CSS for default or set explicitly
            if (authContainer) {
                authContainer.style.display = ''; // Reset inline style to let CSS take over (inline-block or flex)
                authContainer.classList.remove('hidden'); // Just in case
            }
        }
    });

    function moveAuthButtons() {
        const authContainer = document.querySelector('.auth-buttons');
        const dropdownContent = document.querySelector('.dropdown-content');
        const existingMobileAuth = document.querySelector('.nav-links .mobile-auth');

        if (!existingMobileAuth && authContainer && dropdownContent) {
            // Create a container for mobile auth links
            const mobileAuth = document.createElement('div');
            mobileAuth.className = 'mobile-auth';
            mobileAuth.style.display = 'flex';
            mobileAuth.style.flexDirection = 'column';
            mobileAuth.style.gap = '15px';
            mobileAuth.style.marginTop = '20px';
            mobileAuth.style.width = '100%';
            mobileAuth.style.textAlign = 'center';

            // Extract links from dropdown and add to mobile menu
            // We clone them so we don't destroy the original dropdown
            const links = dropdownContent.querySelectorAll('a');
            links.forEach(link => {
                const newLink = link.cloneNode(true);
                // Check if it's the Admin link to give it distinct style
                if (newLink.textContent.includes('Admin')) {
                    newLink.className = 'btn btn-primary';
                } else {
                    newLink.className = 'btn btn-secondary';
                }
                newLink.style.display = 'block';
                mobileAuth.appendChild(newLink);
            });

            navLinks.appendChild(mobileAuth);
            // Hide original
            authContainer.style.display = 'none';
        } else if (existingMobileAuth) {
            if (authContainer) authContainer.style.display = 'none';
        }
    }


    // Login Dropdown Click Handling (Desktop)
    const dropBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (dropBtn && dropdownContent) {
        dropBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent immediate closing
            dropdownContent.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        window.addEventListener('click', (e) => {
            if (!e.target.matches('.dropbtn') && !e.target.closest('.dropbtn')) {
                if (dropdownContent.classList.contains('show')) {
                    dropdownContent.classList.remove('show');
                }
            }
        });
    }
});
