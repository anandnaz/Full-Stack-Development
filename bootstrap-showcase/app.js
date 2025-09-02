// Digital Agency Website JavaScript
// Author: DigitalCraft Team

// Application data
const appData = {
  "services": [
    {
      "title": "Web Design",
      "description": "Creating beautiful, user-friendly websites that convert visitors into customers.",
      "icon": "fas fa-paint-brush"
    },
    {
      "title": "Web Development",
      "description": "Building robust, scalable web applications using modern technologies.",
      "icon": "fas fa-code"
    },
    {
      "title": "Digital Marketing",
      "description": "Helping your business grow through strategic online marketing campaigns.",
      "icon": "fas fa-chart-line"
    },
    {
      "title": "SEO Optimization",
      "description": "Improving your website's visibility and ranking in search engines.",
      "icon": "fas fa-search"
    }
  ],
  "testimonials": [
    {
      "name": "Sarah Johnson",
      "position": "CEO, TechStart",
      "content": "Working with this team was an absolute pleasure. They delivered exactly what we needed and more.",
      "rating": 5
    },
    {
      "name": "Mike Chen",
      "position": "Marketing Director",
      "content": "Professional, efficient, and creative. Our new website has increased our conversion rate by 40%.",
      "rating": 5
    },
    {
      "name": "Emily Rodriguez",
      "position": "Startup Founder",
      "content": "They understood our vision perfectly and brought it to life better than we imagined.",
      "rating": 5
    }
  ],
  "team": [
    {
      "name": "Alex Thompson",
      "position": "Lead Designer",
      "description": "Creative director with 8+ years of experience in digital design."
    },
    {
      "name": "Jordan Smith",
      "position": "Full Stack Developer",
      "description": "Expert developer specializing in modern web technologies."
    },
    {
      "name": "Casey Wilson",
      "position": "Digital Strategist",
      "description": "Marketing specialist focused on data-driven growth strategies."
    }
  ],
  "stats": [
    {
      "number": "150+",
      "label": "Projects Completed"
    },
    {
      "number": "98%",
      "label": "Client Satisfaction"
    },
    {
      "number": "5+",
      "label": "Years Experience"
    },
    {
      "number": "24/7",
      "label": "Support Available"
    }
  ]
};

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    populateServices();
    populateStats();
    populateTeam();
    populateTestimonials();
    initializeFormValidation();
    initializeAnimations();
    initializeCarousel();
    
    console.log('Digital Agency Website Initialized Successfully!');
});

// Navigation Functions
function initializeNavigation() {
    const navbar = document.getElementById('mainNavbar');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for navigation links - Fixed implementation
    document.addEventListener('click', function(e) {
        // Check if the clicked element is a nav link with hash
        if (e.target.matches('a[href^="#"]') || e.target.closest('a[href^="#"]')) {
            const link = e.target.matches('a[href^="#"]') ? e.target : e.target.closest('a[href^="#"]');
            const href = link.getAttribute('href');
            
            // Skip if it's a carousel control or modal trigger
            if (href === '#' || link.hasAttribute('data-bs-target') || link.hasAttribute('data-bs-toggle')) {
                return;
            }
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }
            }
        }
    });
}

// Populate Services Section
function populateServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    
    if (!servicesGrid) return;
    
    servicesGrid.innerHTML = '';
    
    appData.services.forEach((service, index) => {
        const serviceCard = createServiceCard(service, index);
        servicesGrid.appendChild(serviceCard);
    });
}

function createServiceCard(service, index) {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-6';
    
    col.innerHTML = `
        <div class="service-card h-100 animate-on-scroll" data-delay="${index * 100}">
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h4 class="fw-bold mb-3">${service.title}</h4>
            <p class="text-muted mb-3">${service.description}</p>
            <button class="btn btn-outline-primary btn-sm" onclick="showServiceModal('${service.title}')">
                Learn More <i class="fas fa-arrow-right ms-1"></i>
            </button>
        </div>
    `;
    
    return col;
}

// Populate Stats Section
function populateStats() {
    const statsSection = document.getElementById('statsSection');
    
    if (!statsSection) return;
    
    statsSection.innerHTML = '';
    
    appData.stats.forEach((stat, index) => {
        const statItem = createStatItem(stat, index);
        statsSection.appendChild(statItem);
    });
}

function createStatItem(stat, index) {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-6';
    
    col.innerHTML = `
        <div class="stat-item animate-on-scroll" data-delay="${index * 150}">
            <span class="stat-number counter" data-count="${stat.number.replace(/\D/g, '') || '0'}">${stat.number}</span>
            <div class="stat-label">${stat.label}</div>
        </div>
    `;
    
    return col;
}

// Populate Team Section
function populateTeam() {
    const teamGrid = document.getElementById('teamGrid');
    
    if (!teamGrid) return;
    
    teamGrid.innerHTML = '';
    
    appData.team.forEach((member, index) => {
        const teamCard = createTeamCard(member, index);
        teamGrid.appendChild(teamCard);
    });
}

function createTeamCard(member, index) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6';
    
    // Get first letter of name for avatar
    const initial = member.name.charAt(0);
    
    col.innerHTML = `
        <div class="team-card animate-on-scroll" data-delay="${index * 100}">
            <div class="team-avatar">
                ${initial}
            </div>
            <h5 class="fw-bold mb-2">${member.name}</h5>
            <p class="text-primary fw-medium mb-3">${member.position}</p>
            <p class="text-muted">${member.description}</p>
        </div>
    `;
    
    return col;
}

// Populate Testimonials Section
function populateTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    
    if (!testimonialsGrid) return;
    
    testimonialsGrid.innerHTML = '';
    
    appData.testimonials.forEach((testimonial, index) => {
        const testimonialCard = createTestimonialCard(testimonial, index);
        testimonialsGrid.appendChild(testimonialCard);
    });
}

function createTestimonialCard(testimonial, index) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6';
    
    // Generate star rating
    const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
    
    col.innerHTML = `
        <div class="testimonial-card animate-on-scroll" data-delay="${index * 150}">
            <div class="testimonial-stars mb-2">${stars}</div>
            <div class="testimonial-content mb-3">
                "${testimonial.content}"
            </div>
            <div class="testimonial-author">
                <h6 class="fw-bold mb-1">${testimonial.name}</h6>
                <small class="text-muted">${testimonial.position}</small>
            </div>
        </div>
    `;
    
    return col;
}

// Form Validation and Submission
function initializeFormValidation() {
    const contactForm = document.getElementById('contactForm');
    const quickContactForm = document.getElementById('quickContactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
    
    if (quickContactForm) {
        quickContactForm.addEventListener('submit', handleQuickFormSubmission);
    }
    
    // Real-time validation
    const formInputs = document.querySelectorAll('.form-control, .form-select');
    formInputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Remove previous validation classes
    field.classList.remove('is-valid', 'is-invalid');
    
    let isValid = true;
    
    if (field.required && !value) {
        isValid = false;
    }
    
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
        }
    }
    
    field.classList.add(isValid ? 'is-valid' : 'is-invalid');
    
    return isValid;
}

function clearFieldError(e) {
    const field = e.target;
    if (field.classList.contains('is-invalid')) {
        field.classList.remove('is-invalid');
        if (field.value.trim()) {
            validateField(e);
        }
    }
}

function handleFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Validate all fields
    const fields = form.querySelectorAll('.form-control, .form-select');
    let isFormValid = true;
    
    fields.forEach(field => {
        const fieldEvent = { target: field };
        if (!validateField(fieldEvent)) {
            isFormValid = false;
        }
    });
    
    if (!isFormValid) {
        showAlert('Please fill in all required fields correctly.', 'danger');
        return;
    }
    
    // Show loading state
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<span class="loading"></span> Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        form.reset();
        
        // Clear validation classes
        fields.forEach(field => {
            field.classList.remove('is-valid', 'is-invalid');
        });
        
        showAlert('Thank you! Your message has been sent successfully. We will get back to you soon.', 'success');
    }, 2000);
}

function handleQuickFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Simple validation
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.required && !input.value.trim()) {
            isValid = false;
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        }
    });
    
    if (!isValid) {
        showAlert('Please fill in all fields.', 'warning');
        return;
    }
    
    // Show loading state
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<span class="loading"></span> Sending...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        form.reset();
        
        // Remove validation classes
        inputs.forEach(input => {
            input.classList.remove('is-valid', 'is-invalid');
        });
        
        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
        if (modal) modal.hide();
        
        showAlert('Message sent successfully! We will contact you soon.', 'success');
    }, 1500);
}

// Alert System - Enhanced with better visibility
function showAlert(message, type = 'success') {
    const alertElement = document.getElementById('successAlert');
    const messageElement = document.getElementById('alertMessage');
    
    if (!alertElement || !messageElement) return;
    
    messageElement.textContent = message;
    alertElement.className = `alert alert-${type} alert-dismissible position-fixed top-0 start-50 translate-middle-x mt-5`;
    alertElement.style.zIndex = '9999';
    alertElement.classList.remove('d-none');
    
    // Auto-hide after 6 seconds
    setTimeout(() => {
        alertElement.classList.add('d-none');
    }, 6000);
}

// Animation Functions
function initializeAnimations() {
    // Animate progress bars when in view
    const progressBars = document.querySelectorAll('.progress-bar');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.getAttribute('data-width');
                if (targetWidth) {
                    setTimeout(() => {
                        progressBar.style.width = targetWidth;
                    }, 500);
                }
                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => observer.observe(bar));
    
    // Animate elements on scroll
    initializeScrollAnimations();
    
    // Animate counters
    initializeCounterAnimations();
}

function initializeScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.getAttribute('data-delay') || 0;
                
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, delay);
                
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(element);
    });
}

function initializeCounterAnimations() {
    const counters = document.querySelectorAll('.counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count')) || 0;
    const originalText = element.textContent;
    const hasSymbol = originalText.match(/[^\d]/);
    
    if (target === 0) return;
    
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        let displayValue = Math.floor(current).toString();
        if (hasSymbol) {
            displayValue = originalText.replace(/\d+/, displayValue);
        }
        
        element.textContent = displayValue;
    }, 40);
}

// Modal Functions - Fixed implementation
function showServiceModal(serviceTitle) {
    const service = appData.services.find(s => s.title === serviceTitle);
    if (!service) return;
    
    // Create service detail modal dynamically
    createAndShowServiceModal(service);
}

function createAndShowServiceModal(service) {
    // Remove existing modal if it exists
    const existingModal = document.getElementById('serviceDetailModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create new modal
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'serviceDetailModal';
    modal.tabIndex = -1;
    
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${service.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="text-center mb-4">
                        <div class="service-icon d-inline-flex">
                            <i class="${service.icon}"></i>
                        </div>
                    </div>
                    <p class="lead">${service.description}</p>
                    <h6 class="fw-bold mt-4 mb-3">What's Included:</h6>
                    <ul class="list-unstyled">
                        <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Comprehensive consultation</li>
                        <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Custom solution design</li>
                        <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Professional implementation</li>
                        <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Quality assurance testing</li>
                        <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Post-launch support</li>
                    </ul>
                    <div class="alert alert-info">
                        <i class="fas fa-info-circle me-2"></i>
                        <strong>Starting from $999</strong> - Contact us for a custom quote based on your specific needs.
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="requestQuote('${service.title}')">
                        <i class="fas fa-envelope me-2"></i>Request Quote
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Show the modal
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
    
    // Remove modal from DOM when hidden
    modal.addEventListener('hidden.bs.modal', () => {
        modal.remove();
    });
}

function requestQuote(serviceTitle) {
    // Close service modal
    const serviceModal = document.getElementById('serviceDetailModal');
    if (serviceModal) {
        const bsModal = bootstrap.Modal.getInstance(serviceModal);
        if (bsModal) bsModal.hide();
    }
    
    // Open contact modal after a short delay
    setTimeout(() => {
        const contactModal = document.getElementById('contactModal');
        if (contactModal) {
            const bsContactModal = new bootstrap.Modal(contactModal);
            bsContactModal.show();
            
            // Pre-fill service field if it exists
            const serviceSelect = document.getElementById('service');
            if (serviceSelect) {
                const serviceValue = serviceTitle.toLowerCase().replace(/\s+/g, '-');
                const option = serviceSelect.querySelector(`option[value="${serviceValue}"]`);
                if (option) {
                    serviceSelect.value = serviceValue;
                }
            }
        }
    }, 300);
}

// Carousel Functions
function initializeCarousel() {
    const carousel = document.getElementById('heroCarousel');
    if (!carousel) return;
    
    // Initialize Bootstrap carousel
    const bsCarousel = new bootstrap.Carousel(carousel, {
        interval: 5000,
        wrap: true,
        touch: true
    });
    
    // Pause on hover
    carousel.addEventListener('mouseenter', () => {
        bsCarousel.pause();
    });
    
    carousel.addEventListener('mouseleave', () => {
        bsCarousel.cycle();
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance Optimization
function optimizeImages() {
    const images = document.querySelectorAll('img');
    
    if ('loading' in HTMLImageElement.prototype) {
        images.forEach(img => {
            img.loading = 'lazy';
        });
    }
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', function() {
    optimizeImages();
});

// Export functions for global access
window.DigitalCraft = {
    showServiceModal,
    requestQuote,
    showAlert
};