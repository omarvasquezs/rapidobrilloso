// ===== Initialize AOS (Animate On Scroll) =====
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// ===== jQuery Document Ready =====
$(document).ready(function() {
    
    // ===== Navbar Scroll Effect =====
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('scrolled');
            $('#scrollTopBtn').addClass('show');
        } else {
            $('.navbar').removeClass('scrolled');
            $('#scrollTopBtn').removeClass('show');
        }
    });
    
    // ===== Smooth Scroll for Navigation Links =====
    $('.nav-link, .btn[href^="#"], .scroll-down, .footer-links a[href^="#"]').click(function(e) {
        const href = $(this).attr('href');
        if (href && href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const target = $(href);
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 800, 'swing');
                
                // Close mobile menu if open
                $('.navbar-collapse').collapse('hide');
            }
        }
    });
    
    // ===== Scroll to Top Button =====
    $('#scrollTopBtn').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800, 'swing');
    });
    
    // ===== Active Navigation Link on Scroll =====
    $(window).scroll(function() {
        let scrollPos = $(document).scrollTop() + 100;
        
        $('.nav-link').each(function() {
            let currLink = $(this);
            let refElement = $(currLink.attr('href'));
            
            if (refElement.length && refElement.position().top <= scrollPos && 
                refElement.position().top + refElement.height() > scrollPos) {
                $('.nav-link').removeClass('active');
                currLink.addClass('active');
            } else {
                currLink.removeClass('active');
            }
        });
    });
    
    // ===== Counter Animation =====
    let counterStarted = false;
    
    function startCounter() {
        $('.counter').each(function() {
            const $this = $(this);
            const target = parseInt($this.attr('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(function() {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                $this.text(Math.floor(current).toLocaleString());
            }, 16);
        });
    }
    
    // Trigger counter when stats section is visible
    $(window).scroll(function() {
        const statsSection = $('.stats-section');
        if (statsSection.length && !counterStarted) {
            const scrollPos = $(window).scrollTop() + $(window).height();
            const sectionPos = statsSection.offset().top + 100;
            
            if (scrollPos > sectionPos) {
                counterStarted = true;
                startCounter();
            }
        }
    });
    
    // ===== Package Card Selection =====
    $('.package-card .btn').click(function(e) {
        e.preventDefault();
        
        const packageName = $(this).closest('.package-card').find('h4').text();
        const packagePrice = $(this).closest('.package-card').find('.amount').text();
        
        // Add animation
        $(this).addClass('loading');
        
        setTimeout(() => {
            $(this).removeClass('loading');
            
            // Fill contact form
            $('#servicio option').each(function() {
                if ($(this).text().includes(packageName.toLowerCase())) {
                    $(this).prop('selected', true);
                }
            });
            
            // Scroll to contact form
            $('html, body').animate({
                scrollTop: $('#contacto').offset().top - 70
            }, 800);
            
            // Show success message
            showNotification('Paquete ' + packageName + ' seleccionado. Complete el formulario para continuar.', 'success');
        }, 1000);
    });
    
    // ===== Contact Form Submission =====
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        
        // Get form values
        const nombre = $('#nombre').val();
        const telefono = $('#telefono').val();
        const email = $('#email').val();
        const servicio = $('#servicio option:selected').text();
        const mensaje = $('#mensaje').val();
        
        // Show loading state
        const $submitBtn = $(this).find('button[type="submit"]');
        const originalText = $submitBtn.html();
        $submitBtn.prop('disabled', true).html('<i class="bi bi-hourglass-split"></i> Enviando...');
        
        // Simulate form submission (replace with actual AJAX call)
        setTimeout(function() {
            // Reset form
            $('#contactForm')[0].reset();
            
            // Reset button
            $submitBtn.prop('disabled', false).html(originalText);
            
            // Show success notification
            showNotification('¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.', 'success');
            
            // In production, you would send data to a server:
            /*
            $.ajax({
                url: 'your-backend-endpoint',
                method: 'POST',
                data: {
                    nombre: nombre,
                    telefono: telefono,
                    email: email,
                    servicio: servicio,
                    mensaje: mensaje
                },
                success: function(response) {
                    showNotification('¡Mensaje enviado exitosamente!', 'success');
                },
                error: function() {
                    showNotification('Error al enviar el mensaje. Intente nuevamente.', 'error');
                }
            });
            */
        }, 2000);
    });
    
    // ===== Newsletter Form =====
    $('.newsletter-form').submit(function(e) {
        e.preventDefault();
        
        const email = $(this).find('input[type="email"]').val();
        const $submitBtn = $(this).find('button[type="submit"]');
        const originalHtml = $submitBtn.html();
        
        $submitBtn.prop('disabled', true).html('<i class="bi bi-hourglass-split"></i>');
        
        setTimeout(function() {
            $('.newsletter-form input[type="email"]').val('');
            $submitBtn.prop('disabled', false).html(originalHtml);
            showNotification('¡Gracias por suscribirte! Recibirás nuestras ofertas exclusivas.', 'success');
        }, 1500);
    });
    
    // ===== Gallery Item Click Effect =====
    $('.gallery-item').click(function() {
        $(this).toggleClass('clicked');
        
        // Add pulse effect
        $(this).css('animation', 'pulse 0.5s');
        setTimeout(() => {
            $(this).css('animation', '');
        }, 500);
    });
    
    // ===== Service Card Hover Effect =====
    $('.service-card').hover(
        function() {
            $(this).find('.service-icon').addClass('animated');
        },
        function() {
            $(this).find('.service-icon').removeClass('animated');
        }
    );
    
    // ===== Testimonial Card Animation =====
    $('.testimonial-card').each(function(index) {
        $(this).css('animation-delay', (index * 0.1) + 's');
    });
    
    // ===== Parallax Effect on Hero Section =====
    $(window).scroll(function() {
        const scrolled = $(window).scrollTop();
        $('.hero-section').css('background-position', 'center ' + (scrolled * 0.5) + 'px');
    });
    
    // ===== Dynamic Year in Footer =====
    const currentYear = new Date().getFullYear();
    $('.footer').find('p:contains("2024")').html(function(_, html) {
        return html.replace('2024', currentYear);
    });
    
    // ===== Notification System =====
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        $('.notification').remove();
        
        // Create notification element
        const notification = $('<div class="notification notification-' + type + '"></div>');
        
        // Add icon based on type
        let icon = '';
        switch(type) {
            case 'success':
                icon = '<i class="bi bi-check-circle-fill"></i>';
                break;
            case 'error':
                icon = '<i class="bi bi-x-circle-fill"></i>';
                break;
            case 'warning':
                icon = '<i class="bi bi-exclamation-triangle-fill"></i>';
                break;
            default:
                icon = '<i class="bi bi-info-circle-fill"></i>';
        }
        
        notification.html(icon + ' ' + message);
        
        // Add to body
        $('body').append(notification);
        
        // Show notification with animation
        setTimeout(() => {
            notification.addClass('show');
        }, 100);
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            notification.removeClass('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
        
        // Click to dismiss
        notification.click(function() {
            $(this).removeClass('show');
            setTimeout(() => {
                $(this).remove();
            }, 300);
        });
    }
    
    // Add notification styles dynamically
    $('head').append(`
        <style>
            .notification {
                position: fixed;
                top: 100px;
                right: -400px;
                background: white;
                padding: 20px 25px;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                z-index: 9999;
                max-width: 350px;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                gap: 15px;
                font-weight: 500;
                cursor: pointer;
            }
            
            .notification.show {
                right: 30px;
            }
            
            .notification i {
                font-size: 1.5rem;
            }
            
            .notification-success {
                border-left: 4px solid #28a745;
                color: #28a745;
            }
            
            .notification-error {
                border-left: 4px solid #dc3545;
                color: #dc3545;
            }
            
            .notification-warning {
                border-left: 4px solid #ffc107;
                color: #ffc107;
            }
            
            .notification-info {
                border-left: 4px solid #17a2b8;
                color: #17a2b8;
            }
            
            @media (max-width: 768px) {
                .notification {
                    max-width: 90%;
                    right: -100%;
                }
                
                .notification.show {
                    right: 5%;
                }
            }
        </style>
    `);
    
    // ===== Lazy Loading Images - Fixed logic to ensure images appear =====
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // If image is already loaded, just show it
                if (img.complete) {
                    img.style.opacity = '1';
                } else {
                    // Start with opacity 0 and fade in on load
                    img.style.opacity = '0';
                    img.addEventListener('load', () => {
                        img.style.transition = 'opacity 0.5s';
                        img.style.opacity = '1';
                    });
                }
                observer.unobserve(img);
            }
        });
    });
    
    $('.gallery-item img').each(function() {
        imageObserver.observe(this);
    });
    
    // ===== Keyboard Navigation =====
    $(document).keydown(function(e) {
        // Press Escape to close mobile menu
        if (e.key === 'Escape') {
            $('.navbar-collapse').collapse('hide');
        }
        
        // Press Home to scroll to top
        if (e.key === 'Home') {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 800);
        }
    });
    
    // ===== Dynamic Price Calculation (Optional Feature) =====
    window.calculatePrice = function(packageType) {
        const prices = {
            'basico': 30,
            'estandar': 60,
            'premium': 120,
            'elite': 250
        };
        return prices[packageType] || 0;
    };
    
    // ===== Form Validation Enhancement =====
    $('input[type="tel"]').on('input', function() {
        this.value = this.value.replace(/[^0-9+\-() ]/g, '');
    });
    
    $('input[type="email"]').on('blur', function() {
        const email = $(this).val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email && !emailRegex.test(email)) {
            $(this).addClass('is-invalid');
            if (!$(this).next('.invalid-feedback').length) {
                $(this).after('<div class="invalid-feedback">Por favor ingrese un email válido.</div>');
            }
        } else {
            $(this).removeClass('is-invalid');
            $(this).next('.invalid-feedback').remove();
        }
    });
    
    // ===== Auto-hide navbar on scroll down, show on scroll up - REMOVED =====
    /*
    let lastScrollTop = 0;
    $(window).scroll(function() {
        const scrollTop = $(this).scrollTop();
        
        if (scrollTop > lastScrollTop && scrollTop > 500) {
            // Scrolling down
            $('.navbar').css('transform', 'translateY(-100%)');
        } else {
            // Scrolling up
            $('.navbar').css('transform', 'translateY(0)');
        }
        
        lastScrollTop = scrollTop;
    });
    */
    
    // ===== Add loading effect on page load =====
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });
    
    // ===== Easter Egg: Konami Code =====
    let konamiCode = [];
    const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    $(document).keydown(function(e) {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);
        
        if (JSON.stringify(konamiCode) === JSON.stringify(konamiPattern)) {
            showNotification('¡Código secreto activado! 🎉 Obtén 25% de descuento adicional', 'success');
            $('body').addClass('party-mode');
            
            setTimeout(() => {
                $('body').removeClass('party-mode');
            }, 5000);
        }
    });
    
    // Add party mode styles
    $('head').append(`
        <style>
            .party-mode {
                animation: rainbow 2s linear infinite;
            }
            
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        </style>
    `);
    
    // ===== Welcome Animation =====
    setTimeout(() => {
        if (!sessionStorage.getItem('visited')) {
            showNotification('¡Bienvenido a RapidoBrilloso! 🚗✨ Consulta nuestros paquetes especiales', 'info');
            sessionStorage.setItem('visited', 'true');
        }
    }, 2000);
    
    // ===== Performance Monitoring =====
    if (window.performance) {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        console.log('Page loaded in ' + loadTime + 'ms');
    }
    
    // ===== Add smooth reveal animation for elements =====
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1
    });
    
    $('.service-card, .package-card, .testimonial-card').each(function() {
        revealObserver.observe(this);
    });
    
    $('head').append(`
        <style>
            .service-card, .package-card, .testimonial-card {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s ease;
            }
            
            .service-card.revealed, .package-card.revealed, .testimonial-card.revealed {
                opacity: 1;
                transform: translateY(0);
            }
        </style>
    `);
    
    console.log('%c🚗 RapidoBrilloso Car Wash 🚗', 'font-size: 20px; font-weight: bold; color: #00d4ff;');
    console.log('%cWebsite loaded successfully!', 'font-size: 14px; color: #0099ff;');
    
});

// ===== Additional Vanilla JavaScript Features =====

// Disable right-click on images (optional security)
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

// Add viewport height fix for mobile browsers
function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVH();
window.addEventListener('resize', setVH);

// Preload critical images
window.addEventListener('load', function() {
    const criticalImages = [
        'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1920'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});
