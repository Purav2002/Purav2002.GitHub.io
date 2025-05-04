// DOM Elements
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('navLinks');
const viewResumeBtn = document.getElementById('view-resume-btn');
const resumeModal = document.getElementById('resumeModal');
const projectModal = document.getElementById('projectModal');
const projectButtons = document.querySelectorAll('.project-details-btn');
const projectModalContent = document.getElementById('projectModalContent');
const closeBtns = document.querySelectorAll('.close-btn');
const contactForm = document.getElementById('contactForm');

// Project Data
const projectData = {
    'nasa-api': {
        title: 'NASA API Application',
        image: 'assets/nasa-nasa-logo-space.webp',
        description: 'Collaborated on a Python application leveraging NASA\'s public API to fetch and display space imagery and data. The application provides users with an intuitive interface to browse NASA\'s vast collection of space imagery and information.',
        details: [
            'Implemented API integration with NASA\'s APOD (Astronomy Picture of the Day) and Mars Rover Photos APIs.',
            'Created a user-friendly interface for searching and filtering astronomical imagery by date, camera, and other parameters.',
            'Developed a favorites system allowing users to save and organize collections of space imagery.',
            'Implemented caching mechanisms to reduce API calls and improve application performance.'
        ],
        technologies: ['Python', 'Flask', 'REST API', 'NASA API', 'SQLite', 'HTML/CSS', 'JavaScript'],
        bullets: {
            title: 'Key Achievements',
            items: [
                'Successfully processed and displayed over 10,000 high-resolution Mars rover photos',
                'Implemented efficient caching reducing API calls by 70%',
                'Created responsive design for mobile and desktop viewing',
                'Developed comprehensive documentation for future maintenance'
            ]
        }
    },
    'centralized-monitoring': {
        title: 'Centralized Server Monitoring',
        image: 'assets/centralized-ill.png',
        description: 'Designed and implemented a centralized monitoring solution using Zabbix and Grafana to track server performance metrics across a distributed IT environment. This system provides real-time monitoring and alerting for critical infrastructure components.',
        details: [
            'Set up Zabbix server to collect and analyze performance metrics from multiple Linux and Windows servers.',
            'Configured custom monitoring templates and alerting thresholds based on system requirements.',
            'Integrated with Grafana to create comprehensive dashboards visualizing system health and performance trends.',
            'Implemented automated alert notifications via email and SMS for critical system events.'
        ],
        technologies: ['Zabbix', 'Grafana', 'Linux', 'Windows Server', 'SQL', 'Shell Scripting', 'SNMP'],
        bullets: {
            title: 'Monitoring Capabilities',
            items: [
                'CPU, memory, and disk utilization tracking with historical trends',
                'Network traffic analysis and bandwidth monitoring',
                'Service availability and response time measurements',
                'Customizable alerting thresholds with escalation procedures'
            ]
        }
    },
    'database-design': {
        title: 'Database Design & Optimization',
        image: 'assets/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social.png',
        description: 'Created a relational database system for a small business, optimizing query performance and implementing proper normalization techniques. The database serves as the foundation for inventory management, customer relationships, and sales tracking.',
        details: [
            'Analyzed business requirements and designed a normalized database schema to eliminate redundancy.',
            'Created appropriate indexes and optimized query patterns to improve performance for frequently run reports.',
            'Implemented stored procedures and triggers to enforce business rules and maintain data integrity.',
            'Developed a comprehensive backup and recovery strategy to protect against data loss.'
        ],
        technologies: ['SQL', 'MySQL', 'Database Design', 'Query Optimization', 'Data Modeling', 'ERD', 'Backup & Recovery'],
        bullets: {
            title: 'Optimization Results',
            items: [
                'Reduced query execution time by 65% for complex reporting operations',
                'Improved data consistency through proper constraint implementation',
                'Minimized storage requirements by eliminating redundant data',
                'Implemented automated backup procedures with point-in-time recovery capabilities'
            ]
        }
    },
    'iot-monitoring': {
        title: 'IoT Device Monitoring',
        image: 'assets/iot-devices.png',
        description: 'Developed a system to monitor and manage IoT devices, collecting and analyzing data in real-time with dashboard visualization. This solution enables businesses to monitor environmental conditions, track asset locations, and optimize resource usage.',
        details: [
            'Created a central hub using Raspberry Pi to collect data from various IoT sensors including temperature, humidity, and motion sensors.',
            'Implemented MQTT protocol for efficient and reliable communication between devices and central server.',
            'Developed a web-based dashboard providing real-time visualization of collected data and system status.',
            'Set up automated alerts for abnormal conditions and threshold violations.'
        ],
        technologies: ['IoT', 'Python', 'MQTT', 'Raspberry Pi', 'Node.js', 'WebSockets', 'Time Series DB', 'Data Visualization'],
        bullets: {
            title: 'Applications',
            items: [
                'Environmental monitoring for temperature-sensitive environments',
                'Security systems integration with motion detection capabilities',
                'Asset tracking and location services for inventory management',
                'Energy consumption monitoring for efficiency optimization'
            ]
        }
    }
};

// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Check saved theme
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
    }
    // Default is dark mode (already applied in HTML)
}

// Mobile Menu Toggle
function toggleMenu() {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Close Mobile Menu when clicking a link
function closeMenuOnClick() {
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// Open Resume Modal
function openResumeModal() {
    resumeModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Open Project Modal
function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;
    
    let bulletHTML = '';
    if (project.bullets) {
        bulletHTML = `
            <div class="project-details-bullets">
                <h3>${project.bullets.title}</h3>
                <ul>
                    ${project.bullets.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    const modalHTML = `
        <h2>${project.title}</h2>
        <img src="${project.image}" alt="${project.title}" class="project-details-image">
        <p>${project.description}</p>
        <div class="project-details-tech">
            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
        </div>
        <div class="project-details">
            <h3>Project Details</h3>
            <ul>
                ${project.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
        </div>
        ${bulletHTML}
    `;
    
    projectModalContent.innerHTML = modalHTML;
    projectModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close Modals
function closeModal() {
    resumeModal.classList.remove('show');
    projectModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Handle Contact Form Submission (Demo only - no server required)
function handleContactFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // In a real application, this would send data to a server
    console.log('Form Submitted:', { name, email, subject, message });
    
    // Success message (simulate successful submission)
    alert('Thank you for your message! This is a demo form - in a real portfolio, this would be sent to my email.');
    
    // Reset form
    contactForm.reset();
}

// Scroll Animation for Elements
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const animatedSections = document.querySelectorAll('.section-title, .timeline-item, .skill-item, .project-card, .info-box, .competency-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
    
    // Apply specific animations based on element type
    animatedSections.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            // Skip if already animated
            if (element.classList.contains('animated')) return;
            
            element.classList.add('animated');
            
            // Apply different animations based on element type
            if (element.classList.contains('section-title')) {
                element.style.animation = 'fadeIn 1s forwards';
            } else if (element.classList.contains('timeline-item')) {
                element.style.animation = 'slideInLeft 0.7s forwards';
            } else if (element.classList.contains('skill-item')) {
                element.style.animation = 'fadeIn 0.8s forwards';
                
                // Animate the skill progress bar with delay
                const progressBar = element.querySelector('.skill-progress');
                if (progressBar) {
                    setTimeout(() => {
                        progressBar.style.transition = 'width 1.5s ease-in-out';
                        progressBar.style.width = progressBar.style.width || '0%';
                    }, 300);
                }
            } else if (element.classList.contains('project-card')) {
                element.style.animation = 'scaleIn 0.8s forwards';
            } else if (element.classList.contains('info-box')) {
                element.style.animation = 'slideInRight 0.8s forwards';
            } else if (element.classList.contains('competency-item')) {
                element.style.animation = 'slideInUp 0.6s forwards';
                // Apply delay based on index
                const index = Array.from(document.querySelectorAll('.competency-item')).indexOf(element);
                element.style.animationDelay = `${index * 0.1}s`;
            }
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Load saved theme
    loadSavedTheme();
    
    // Theme toggle event
    themeToggleBtn.addEventListener('click', toggleTheme);
    
    // Mobile menu toggle event
    menuToggle.addEventListener('click', toggleMenu);
    
    // Close menu when clicking a link
    closeMenuOnClick();
    
    // Resume button event
    if (viewResumeBtn) {
        viewResumeBtn.addEventListener('click', openResumeModal);
    }
    
    // Project buttons events
    projectButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.getAttribute('data-id');
            openProjectModal(projectId);
        });
    });
    
    // Close modal events
    closeBtns.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
    
    // Close modal when clicking outside of content
    window.addEventListener('click', (e) => {
        if (e.target === resumeModal || e.target === projectModal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Handle contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
    
    // Scroll animations
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});