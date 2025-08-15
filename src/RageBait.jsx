import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './RageBait.css';

const RageBait = () => {
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const featuresRef = useRef(null);
  const stepsRef = useRef(null);
  const techRef = useRef(null);

  useEffect(() => {
    // Navigation entrance animation
    anime({
      targets: '.navbar',
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutQuart',
      delay: 200
    });

    // Hero badge animation
    anime({
      targets: '.hero-badge',
      scale: [0, 1],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutBack',
      delay: 600
    });

    // Title animation with character stagger
    anime({
      targets: titleRef.current,
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1200,
      easing: 'easeOutQuart',
      delay: 800
    });

    // Logo animation with enhanced effects
    anime({
      targets: logoRef.current,
      scale: [0, 1],
      rotate: [0, 360],
      duration: 2000,
      easing: 'easeOutElastic(1, .8)',
      delay: 1000
    });

    // Feature cards enhanced staggered animation
    anime({
      targets: '.feature-card-modern',
      translateY: [100, 0],
      opacity: [0, 1],
      scale: [0.8, 1],
      rotateX: [45, 0],
      duration: 1000,
      easing: 'easeOutCubic',
      delay: anime.stagger(150, {start: 1500})
    });

    // Steps animation on scroll with enhanced effects
    const stepsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: '.step-modern',
            translateX: [-150, 0],
            opacity: [0, 1],
            scale: [0.8, 1],
            rotateY: [45, 0],
            duration: 800,
            easing: 'easeOutCubic',
            delay: anime.stagger(200)
          });
        }
      });
    });

    if (stepsRef.current) {
      stepsObserver.observe(stepsRef.current);
    }

    // Tech items animation with 3D effects
    const techObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: '.tech-item-modern',
            scale: [0, 1],
            rotateY: [180, 0],
            opacity: [0, 1],
            translateZ: [100, 0],
            duration: 1000,
            easing: 'easeOutBack',
            delay: anime.stagger(100)
          });
        }
      });
    });

    if (techRef.current) {
      techObserver.observe(techRef.current);
    }

    // Download section animation
    const downloadObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: '.download-content > *',
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutQuart',
            delay: anime.stagger(200)
          });
        }
      });
    });

    const downloadSection = document.querySelector('.download-section');
    if (downloadSection) {
      downloadObserver.observe(downloadSection);
    }

    // Enhanced floating animation for feature icons
    anime({
      targets: '.feature-icon-modern svg',
      translateY: [-15, 15],
      rotateZ: [-5, 5],
      duration: 3000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      delay: anime.stagger(400)
    });

    // Tech icon floating animation
    anime({
      targets: '.tech-icon svg',
      translateY: [-10, 10],
      rotateZ: [-3, 3],
      duration: 2500,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      delay: anime.stagger(300)
    });

    // Glowing pulse animation for buttons
    anime({
      targets: '.btn-primary',
      scale: [1, 1.02, 1],
      boxShadow: [
        '0 8px 24px rgba(255, 107, 53, 0.4)',
        '0 12px 32px rgba(255, 107, 53, 0.6)',
        '0 8px 24px rgba(255, 107, 53, 0.4)'
      ],
      duration: 2500,
      loop: true,
      easing: 'easeInOutQuad'
    });

    // Continuous glow animation for hero element
    anime({
      targets: '.hero-glow',
      filter: [
        'drop-shadow(0 0 40px rgba(255, 107, 53, 0.8))',
        'drop-shadow(0 0 60px rgba(255, 107, 53, 1))',
        'drop-shadow(0 0 40px rgba(255, 107, 53, 0.8))'
      ],
      duration: 3000,
      loop: true,
      easing: 'easeInOutSine'
    });

    // Parallax effect for background elements and navbar interaction
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const navbar = document.querySelector('.navbar');

      // Parallax background elements
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      parallaxElements.forEach((el, index) => {
        const speed = 0.5 + (index * 0.1);
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });

      // Interactive navbar based on scroll
      if (navbar) {
        if (scrolled > 100) {
          navbar.style.background = 'rgba(10, 10, 15, 0.8)';
          navbar.style.backdropFilter = 'blur(40px) saturate(200%)';
          navbar.style.borderBottomColor = 'rgba(255, 107, 53, 0.2)';
        } else {
          navbar.style.background = 'rgba(10, 10, 15, 0.4)';
          navbar.style.backdropFilter = 'blur(32px) saturate(200%)';
          navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.15)';
        }
      }
    };

    // Cursor following effect
    const handleMouseMove = (e) => {
      const cursor = document.querySelector('.cursor-follower');
      if (cursor) {
        const x = e.clientX;
        const y = e.clientY;

        cursor.style.transform = `translate(${x - 100}px, ${y - 100}px)`;

        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.className = 'cursor-ripple';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        document.body.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 1000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      stepsObserver.disconnect();
      techObserver.disconnect();
      downloadObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleButtonHover = (e) => {
    anime({
      targets: e.target,
      scale: 1.1,
      duration: 300,
      easing: 'easeOutQuart'
    });
  };

  const handleButtonLeave = (e) => {
    anime({
      targets: e.target,
      scale: 1,
      duration: 300,
      easing: 'easeOutQuart'
    });
  };

  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 15 4 15 8V16C15 18.2091 13.2091 20 11 20H10C7.79086 20 6 18.2091 6 16V8C6 4 9 1 12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 10V12C19 16.4183 15.4183 20 11 20M5 10V12C5 16.4183 8.58172 20 13 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 23V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Speech Recognition',
      description: 'Monitors your speech for trigger words like "shey", "damn", "help" and triggers actions when detected.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 21L12 17L16 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 7H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 11H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Typing Monitor',
      description: 'Watches what you type and triggers when you express frustration through your keyboard.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
          <circle cx="15.5" cy="8.5" r="1.5" fill="currentColor"/>
          <circle cx="8.5" cy="15.5" r="1.5" fill="currentColor"/>
          <circle cx="15.5" cy="15.5" r="1.5" fill="currentColor"/>
          <path d="M12 8.5V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8.5 12H15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Random Actions',
      description: '50/50 chance to either destroy your code or attempt to fix it when triggered.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Panic Undo',
      description: 'Emergency undo button that reverses the last 5 actions when things go wrong.'
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Install Extension',
      description: 'Download and install RageBait from GitHub or load manually.'
    },
    {
      number: 2,
      title: 'Start Speech Server',
      description: 'Run the Node.js speech recognition server to enable voice monitoring.'
    },
    {
      number: 3,
      title: 'Code & Rage',
      description: 'Write code normally. When you get frustrated and say trigger words, RageBait activates!'
    },
    {
      number: 4,
      title: 'Chaos Ensues',
      description: 'RageBait randomly destroys or fixes your code. Use panic undo if needed!'
    }
  ];

  const techStack = [
    {
      name: 'VS Code Extension API',
      description: 'Core extension framework',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5 2L20.5 8V16L14.5 22L8.5 16V8L14.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8L16 12L12 16L8 12L12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'Node.js',
      description: 'Speech recognition server',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 8.5L12 12L2 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'Web Speech API',
      description: 'Browser-based speech recognition',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 11H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 16H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: 'WebSocket',
      description: 'Real-time communication',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 2V8L16 16V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 2V8L8 16V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'Express.js',
      description: 'Web server framework',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'JavaScript',
      description: 'Core programming language',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 3H22V21H2V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 17C8 15.8954 8.89543 15 10 15C11.1046 15 12 15.8954 12 17V19C12 20.1046 11.1046 21 10 21C8.89543 21 8 20.1046 8 19V17Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 15V19C16 20.1046 16.8954 21 18 21C19.1046 21 20 20.1046 20 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className="ragebait-app">
      {/* Cursor Follower */}
      <div className="cursor-follower"></div>

      {/* Floating Background Elements */}
      <div className="parallax-bg"></div>
      <div className="parallax-bg"></div>
      <div className="parallax-bg"></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <div className="nav-logo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C12 2 8 6 8 10C8 14 10 16 12 16C14 16 16 14 16 10C16 6 12 2 12 2Z" fill="url(#fireGradient1)"/>
                <path d="M12 4C12 4 10 7 10 9.5C10 11.5 11 12.5 12 12.5C13 12.5 14 11.5 14 9.5C14 7 12 4 12 4Z" fill="url(#fireGradient2)"/>
                <path d="M12 6C12 6 11 8 11 9C11 10 11.5 10.5 12 10.5C12.5 10.5 13 10 13 9C13 8 12 6 12 6Z" fill="url(#fireGradient3)"/>
                <defs>
                  <linearGradient id="fireGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#ff6b35"/>
                    <stop offset="100%" stopColor="#f7931e"/>
                  </linearGradient>
                  <linearGradient id="fireGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#f7931e"/>
                    <stop offset="100%" stopColor="#ffaa44"/>
                  </linearGradient>
                  <linearGradient id="fireGradient3" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#ffaa44"/>
                    <stop offset="100%" stopColor="#ffdd88"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="nav-title">RageBait</span>
          </div>
          <div className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#how-it-works" className="nav-link">How it Works</a>
            <a href="#tech" className="nav-link">Tech Stack</a>
            <a href="#download" className="nav-link">Download</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>New: Enhanced chaos detection system</span>
          </div>
          <h1 ref={titleRef} className="hero-title">
            Think chaotic with RageBait
          </h1>
          <p className="hero-subtitle">
            Never miss a rage, idea or code destruction.
          </p>

          <div className="hero-visual">
            <div ref={logoRef} className="hero-glow">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C12 2 8 6 8 10C8 14 10 16 12 16C14 16 16 14 16 10C16 6 12 2 12 2Z" fill="url(#heroFireGradient1)"/>
                <path d="M12 4C12 4 10 7 10 9.5C10 11.5 11 12.5 12 12.5C13 12.5 14 11.5 14 9.5C14 7 12 4 12 4Z" fill="url(#heroFireGradient2)"/>
                <path d="M12 6C12 6 11 8 11 9C11 10 11.5 10.5 12 10.5C12.5 10.5 13 10 13 9C13 8 12 6 12 6Z" fill="url(#heroFireGradient3)"/>
                <path d="M15 8C15 8 16 10 16 11C16 12 15.5 12.5 15 12.5C14.5 12.5 14 12 14 11C14 10 15 8 15 8Z" fill="url(#heroFireGradient2)"/>
                <path d="M9 8C9 8 8 10 8 11C8 12 8.5 12.5 9 12.5C9.5 12.5 10 12 10 11C10 10 9 8 9 8Z" fill="url(#heroFireGradient2)"/>
                <defs>
                  <linearGradient id="heroFireGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#ff6b35"/>
                    <stop offset="50%" stopColor="#f7931e"/>
                    <stop offset="100%" stopColor="#ffaa44"/>
                  </linearGradient>
                  <linearGradient id="heroFireGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#f7931e"/>
                    <stop offset="100%" stopColor="#ffdd88"/>
                  </linearGradient>
                  <linearGradient id="heroFireGradient3" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#ffaa44"/>
                    <stop offset="100%" stopColor="#fff2cc"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="warning-modern">
            <strong>⚠️ WARNING:</strong> This extension will randomly modify your code. Always backup your work before using RageBait!
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features" ref={featuresRef}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Chaotic Features</h2>
            <p className="section-subtitle">Everything you need to embrace the chaos in your coding workflow</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card-modern">
                <div className="feature-icon-modern">{feature.icon}</div>
                <h3 className="feature-title-modern">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="download-section" id="download">
        <div className="container">
          <div className="download-content">
            <div className="download-text">
              <h2 className="download-title">Ready for Chaos?</h2>
              <p className="download-description">
                Download RageBait and experience the most chaotic coding session of your life!
              </p>
              <div className="download-actions">
                <a
                  href="https://github.com/ramudaynair/Rage-Bait"
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                >
                  Download from GitHub
                </a>
              </div>
            </div>
            <div className="download-visual">
              <div className="code-preview">
                <div className="code-header">
                  <span className="code-title">Quick Start</span>
                </div>
                <div className="code-content">
                  <div className="code-line"># 1. Install the extension</div>
                  <div className="code-line"># 2. Start speech server</div>
                  <div className="code-line">cd speech-server</div>
                  <div className="code-line">npm install</div>
                  <div className="code-line">node server.js</div>
                  <div className="code-line"></div>
                  <div className="code-line"># 3. Open http://localhost:3847 in Chrome</div>
                  <div className="code-line"># 4. Allow microphone access</div>
                  <div className="code-line"># 5. Start coding and raging! 🔥</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works" id="how-it-works" ref={stepsRef}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Get started with RageBait in just a few simple steps</p>
          </div>
          <div className="steps-modern">
            {steps.map((step, index) => (
              <div key={index} className="step-modern">
                <div className="step-number-modern">{step.number}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack" id="tech" ref={techRef}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Tech Stack</h2>
            <p className="section-subtitle">Built with modern technologies for maximum chaos</p>
          </div>
          <div className="tech-grid-modern">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-item-modern">
                <div className="tech-icon">{tech.icon}</div>
                <h4 className="tech-name">{tech.name}</h4>
                <p className="tech-description">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 RageBait. Use at your own risk! Always backup your code.</p>
          <p>
            Made with chaos and passion by{' '}
            <a
              href="https://github.com/ramudaynair"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ram
            </a>
            {' & '}
            <a
              href="https://github.com/Reyzor255"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reyhan
            </a>
          </p>
          <div className="social-links">
            <a
              href="https://github.com/ramudaynair"
              target="_blank"
              rel="noopener noreferrer"
              title="Ram's GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 19C4 20.5 4 16.5 2 16M22 16V19C22 20.1046 21.1046 21 20 21H16C14.8954 21 14 20.1046 14 19V16.5C14 15.5 14.5 15 15 15H21C21.5 15 22 15.5 22 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 19C9 18 9 17 9 16V14C9 13 8.5 12 8 12C7.5 12 7 12.5 7 13V16C7 17 7 18 7 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Ram
            </a>
            <a
              href="https://github.com/Reyzor255"
              target="_blank"
              rel="noopener noreferrer"
              title="Reyhan's GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 19C4 20.5 4 16.5 2 16M22 16V19C22 20.1046 21.1046 21 20 21H16C14.8954 21 14 20.1046 14 19V16.5C14 15.5 14.5 15 15 15H21C21.5 15 22 15.5 22 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 19C9 18 9 17 9 16V14C9 13 8.5 12 8 12C7.5 12 7 12.5 7 13V16C7 17 7 18 7 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Reyhan
            </a>
            <a
              href="https://github.com/ramudaynair/Rage-Bait"
              target="_blank"
              rel="noopener noreferrer"
              title="Project Repository"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 10L12 13L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Repository
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RageBait;
