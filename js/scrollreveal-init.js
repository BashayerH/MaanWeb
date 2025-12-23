// ScrollReveal initialization for all pages
(function() {
  function initScrollReveal() {
    // Wait for ScrollReveal to load
    if (typeof ScrollReveal === 'undefined') {
      console.warn('ScrollReveal is not loaded');
      return;
    }

    // Initialize ScrollReveal with default settings
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 1000,
      delay: 100,
      reset: false,
      easing: 'ease-out',
      mobile: true,
      viewFactor: 0.2
    });

  // Common animations for all pages
  sr.reveal('.hero__text', {
    delay: 200,
    origin: 'bottom',
    distance: '80px'
  });

  sr.reveal('.section-heading', {
    delay: 150,
    origin: 'bottom',
    distance: '50px'
  });

  sr.reveal('.card', {
    interval: 200,
    origin: 'bottom',
    distance: '60px',
    delay: 100
  });

  // About page specific animations
  sr.reveal('.about-hero-content', {
    delay: 200,
    origin: 'bottom',
    distance: '80px'
  });

  sr.reveal('.about-story-text', {
    delay: 200,
    origin: 'right',
    distance: '80px'
  });

  sr.reveal('.about-story-image', {
    delay: 300,
    origin: 'left',
    distance: '80px'
  });

  sr.reveal('.about-value-panel', {
    interval: 200,
    origin: 'bottom',
    distance: '60px',
    delay: 100
  });

  sr.reveal('.about-logo-rationale-card', {
    interval: 200,
    origin: 'bottom',
    distance: '60px',
    delay: 100
  });

  // Zakat page specific animations (also used in rafidah and tababa)
  sr.reveal('.zakat-hero-split', {
    delay: 100,
    origin: 'bottom',
    distance: '40px'
  });

  sr.reveal('.zakat-hero-category', {
    delay: 150,
    origin: 'right',
    distance: '50px'
  });

  sr.reveal('.zakat-hero-heading', {
    delay: 200,
    origin: 'bottom',
    distance: '80px'
  });

  sr.reveal('.zakat-hero-description', {
    delay: 300,
    origin: 'bottom',
    distance: '60px'
  });

  sr.reveal('.zakat-hero-actions', {
    delay: 400,
    origin: 'bottom',
    distance: '60px'
  });

  sr.reveal('.zakat-hero-count', {
    delay: 500,
    origin: 'bottom',
    distance: '40px'
  });

  sr.reveal('.video-card', {
    interval: 150,
    origin: 'bottom',
    distance: '60px',
    delay: 100
  });

  sr.reveal('.video-player-wrapper', {
    delay: 200,
    origin: 'bottom',
    distance: '80px'
  });

  // Track tabs animations
  sr.reveal('.track-tabs-tab', {
    interval: 100,
    origin: 'bottom',
    distance: '40px',
    delay: 50
  });

  sr.reveal('.track-content-header', {
    delay: 200,
    origin: 'bottom',
    distance: '60px'
  });

  sr.reveal('.track-category', {
    interval: 150,
    origin: 'bottom',
    distance: '60px',
    delay: 100
  });

  // Exclude track-content-panels-container from ScrollReveal animation
  sr.clean('.track-content-panels-container');

  // Community section animations
  sr.reveal('.community-card', {
    interval: 200,
    origin: 'bottom',
    distance: '60px',
    delay: 100
  });

  // Footer animation
  sr.reveal('#footer-placeholder', {
    delay: 200,
    origin: 'bottom',
    distance: '60px'
  });

  // Pattern images (subtle fade)
  sr.reveal('.about-hero-pattern img, .about-story-pattern img, .zakat-hero-pattern-left img', {
    delay: 100,
    opacity: 0,
    scale: 0.95,
    duration: 1500
  });

  // Buttons and CTAs
  sr.reveal('.hero-cta, .zakat-hero-btn, .footer-contact-btn', {
    delay: 400,
    origin: 'bottom',
    distance: '40px'
  });

  // Text content
  sr.reveal('p.lede, .about-hero-subtitle, .muted', {
    delay: 300,
    origin: 'bottom',
    distance: '50px'
  });

  // Headings
  sr.reveal('h1, h2, h3, h4', {
    delay: 150,
    origin: 'bottom',
    distance: '60px'
  });

  // Lists
  sr.reveal('ul li', {
    interval: 100,
    origin: 'right',
    distance: '40px',
    delay: 50
  });

  // Section blocks (used in rafidah, tababa, and other pages)
  sr.reveal('.section-block', {
    delay: 200,
    origin: 'bottom',
    distance: '60px'
  });

  // Animate footer after it loads
  const animateFooter = () => {
    const footer = document.querySelector('#footer-placeholder .footer');
    if (footer) {
      sr.reveal(footer, {
        delay: 200,
        origin: 'bottom',
        distance: '60px'
      });
    } else {
      // Retry after a short delay if footer not loaded yet
      setTimeout(animateFooter, 100);
    }
  };

  // Wait a bit for footer to load, then animate
  setTimeout(animateFooter, 500);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      // Wait a bit for ScrollReveal to load
      setTimeout(initScrollReveal, 100);
    });
  } else {
    setTimeout(initScrollReveal, 100);
  }
})();

