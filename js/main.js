document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav a');
    const sections = {
        '.a': '.home',
        '.b': '.aboutme', 
        '.c': '.gallery',
        '.d': '.contactme'
    };

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            const targetClass = '.' + this.className.split(' ')[0];
            const targetSection = sections[targetClass];
            
            if (targetSection) {
                Object.values(sections).forEach(section => {
                    const element = document.querySelector(section);
                    if (element) {
                        element.style.display = 'none';
                        element.style.opacity = '0';
                    }
                });
                
                const activeElement = document.querySelector(targetSection);
                if (activeElement) {
                    activeElement.style.display = 'block';
                    setTimeout(() => {
                        activeElement.style.opacity = '1';
                    }, 10);
                }
            }
        });
    });

    const form = document.querySelector('.contactform form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = this.querySelector('input[placeholder="First Name"]').value;
            const lastName = this.querySelector('input[placeholder="Last Name"]').value;
            const email = this.querySelector('input[placeholder="Your Email"]').value;
            const message = this.querySelector('textarea').value;
            
            if (!firstName || !lastName || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            alert('Thank you for your message! (Note: This is a demo form)');
            this.reset();
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
