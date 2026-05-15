document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const headerContent = document.querySelector('.header-content');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            headerContent.style.background = 'rgba(255, 255, 255, 0.95)';
            headerContent.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
        } else {
            headerContent.style.background = 'rgba(255, 255, 255, 0.8)';
            headerContent.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.05)';
        }
    });

    // Mobile Menu Toggle (Basic implementation)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            // A simple toggle would just show/hide nav in a real implementation
            // For now, we'll just animate the hamburger icon
            mobileBtn.classList.toggle('active');
            if (mobileBtn.classList.contains('active')) {
                mobileBtn.children[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                mobileBtn.children[1].style.opacity = '0';
                mobileBtn.children[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                mobileBtn.children[0].style.transform = 'none';
                mobileBtn.children[1].style.opacity = '1';
                mobileBtn.children[2].style.transform = 'none';
            }
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Testimonial Slider
    const sliderBtns = document.querySelectorAll('.slider-btn');
    const testimonials = [
        {
            text: "BrightPath Academy completely transformed my child's approach to learning. The teachers are incredibly supportive and the environment is just so positive and cheerful!",
            author: "Sarah Jenkins",
            role: "Parent of 4th Grader",
            initial: "S",
            color: "var(--color-blue)"
        },
        {
            text: "The STEM program here is exceptional. My daughter comes home every day excited to tell us about the new projects she's building. Truly preparing them for the future.",
            author: "Marcus Chen",
            role: "Parent of 8th Grader",
            initial: "M",
            color: "var(--color-orange)"
        },
        {
            text: "A wonderful community that feels like family. The balance between academic excellence and student well-being is exactly what we were looking for.",
            author: "Elena Rodriguez",
            role: "Parent of 6th Grader",
            initial: "E",
            color: "var(--color-yellow)"
        }
    ];

    const quoteText = document.querySelector('.testimonial-text');
    const authorName = document.querySelector('.author-info strong');
    const authorRole = document.querySelector('.author-info span');
    const authorAvatar = document.querySelector('.author-avatar');

    sliderBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Update active state
            sliderBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Add simple fade out
            quoteText.style.opacity = '0';
            
            setTimeout(() => {
                // Update content
                const data = testimonials[index];
                quoteText.textContent = data.text;
                authorName.textContent = data.author;
                authorRole.textContent = data.role;
                authorAvatar.textContent = data.initial;
                authorAvatar.style.backgroundColor = data.color;
                
                // Fade back in
                quoteText.style.opacity = '1';
                quoteText.style.transition = 'opacity 0.3s ease';
            }, 300);
        });
    });
});
