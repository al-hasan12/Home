// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.querySelector('i').classList.add('fa-bars');
            navToggle.querySelector('i').classList.remove('fa-times');
        });
    });
    
    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    });
    
    // Scroll to Top Button
    const scrollTopBtn = document.querySelector('.scroll-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });
    
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Skill Bars Animation
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            const isInView = isElementInViewport(bar);
            
            if (isInView && !bar.classList.contains('animated')) {
                bar.style.width = width + '%';
                bar.classList.add('animated');
            }
        });
    }
    
    // Check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelectorAll('input[type="text"]')[1].value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields!');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address!');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For now, we'll just show a success message
            const submitBtn = this.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert(`Thank you ${name}! Your message has been sent successfully.\n\nI will get back to you within 24 hours.`);
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const icon = themeToggle.querySelector('i');
            
            if (document.body.classList.contains('dark-theme')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });
        
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.querySelector('i').classList.remove('fa-moon');
            themeToggle.querySelector('i').classList.add('fa-sun');
        }
    }
    
    // Download CV Button
    const downloadBtn = document.querySelector('.btn-primary[href*="Download"]');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create a simple CV content
            const cvContent = `
                MD HASAN MIA - NETWORK & SUPPORT ENGINEER
                ============================================
                
                CONTACT INFORMATION
                -------------------
                Email: mdhasan233922@gmail.com
                Phone: +880 1710-038512
                Location: Dhaka, Bangladesh
                LinkedIn: linkedin.com/in/md-hasan-mia-68bb8229b
                
                PROFESSIONAL SUMMARY
                --------------------
                Network & Support Engineer with hands-on experience in configuring, 
                monitoring, and supporting enterprise network infrastructure. 
                Skilled in Data Center operations, network security, and technical 
                support with expertise in MikroTik and Cisco devices.
                
                WORK EXPERIENCE
                ----------------
                Assistant Officer (Network & Support Engineer)
                Akij Resources Ltd | Oct 2025 - Present
                • Data Center monitoring and maintenance
                • BMS (Building Management System) operations
                • Enterprise network infrastructure management
                
                Network Support Engineer
                Pipex Network | Nov 2023 - Sep 2025
                • OLT management using iManager platform
                • MikroTik router configuration and maintenance
                • ISP billing systems (SRZone, SASRadius)
                
                PROFESSIONAL TRAINING
                ---------------------
                • CCNA (200-301) - Techno First Institute
                • MTCNA - MikroTik Certified Network Associate
                • MTCRE - MikroTik Certified Routing Engineer
                
                TECHNICAL SKILLS
                ----------------
                • Network Configuration & Troubleshooting
                • Data Center Operations
                • MikroTik & Cisco Devices
                • Network Monitoring (NMS)
                • OLT Management (iManager)
                • ISP Billing Systems
                
                EDUCATION
                ---------
                B.Sc. in Computer Science & Engineering
                Northern University Bangladesh (Ongoing)
                
                Diploma in Computer Science & Engineering
                TMSS Institute of Science and ICT
                CGPA: 3.86/4.00
            `;
            
            // Create and download text file
            const blob = new Blob([cvContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Md_Hasan_Mia_CV.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            
            alert('CV download started!');
        });
    }
    
    // Initialize skill bars on load
    animateSkillBars();
    
    // Animate skill bars on scroll
    window.addEventListener('scroll', animateSkillBars);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add dark theme styles dynamically
    const darkThemeStyles = `
        <style>
            body.dark-theme {
                background-color: #121212;
                color: #e0e0e0;
            }
            
            body.dark-theme .navbar {
                background: rgba(18, 18, 18, 0.95);
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
            }
            
            body.dark-theme .nav-link {
                color: #e0e0e0;
            }
            
            body.dark-theme .nav-link:hover,
            body.dark-theme .nav-link.active {
                color: var(--primary-color);
                background: rgba(0, 119, 181, 0.2);
            }
            
            body.dark-theme .logo-sub {
                color: #e0e0e0;
            }
            
            body.dark-theme .hero {
                background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            }
            
            body.dark-theme .hero-title,
            body.dark-theme .section-title {
                color: #ffffff;
            }
            
            body.dark-theme .service-card,
            body.dark-theme .skills-category,
            body.dark-theme .timeline-content,
            body.dark-theme .exp-card,
            body.dark-theme .project-card,
            body.dark-theme .info-card,
            body.dark-theme .contact-form,
            body.dark-theme .highlight-card {
                background: #1e1e1e;
                color: #e0e0e0;
            }
            
            body.dark-theme .detail-item strong {
                color: #ffffff;
            }
            
            body.dark-theme .about-text,
            body.dark-theme .service-card p,
            body.dark-theme .project-content p {
                color: #b0b0b0;
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', darkThemeStyles);
});