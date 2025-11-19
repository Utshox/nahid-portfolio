// Design tokens (match CSS):
const COLORS = {
  black: '#101113',
  grey: '#454953',
  light: '#F4F6FA',
  bgBlack: '#212225'
};

// Fluid Cursor Animation
const TAIL_LENGTH = 20;
let mouseX = 0;
let mouseY = 0;
let cursorCircles;
let cursorHistory = Array(TAIL_LENGTH).fill({x: 0, y: 0});

function onMouseMove(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;
  
  for (let i = 0; i < TAIL_LENGTH; i++) {
    let div = document.createElement('div');
    div.classList.add('cursor-circle');
    cursor.append(div);
  }
  cursorCircles = Array.from(document.querySelectorAll('.cursor-circle'));
}

function updateCursor() {  
  cursorHistory.shift();
  cursorHistory.push({ x: mouseX, y: mouseY });
    
  for (let i = 0; i < TAIL_LENGTH; i++) {
    let current = cursorHistory[i];
    let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];
    
    let xDiff = next.x - current.x;
    let yDiff = next.y - current.y;
    
    current.x += xDiff * 0.35;
    current.y += yDiff * 0.35;
    cursorCircles[i].style.transform = `translate(${current.x}px, ${current.y}px) scale(${i/TAIL_LENGTH})`;  
  }
  requestAnimationFrame(updateCursor);
}

// Button Hover Animation Class
class Button {
  constructor(buttonElement) {
    this.block = buttonElement;
    this.init();
    this.initEvents();
  }

  init() {
    const el = gsap.utils.selector(this.block);

    this.DOM = {
      button: this.block,
      flair: el(".button__flair")
    };

    this.xSet = gsap.quickSetter(this.DOM.flair, "xPercent");
    this.ySet = gsap.quickSetter(this.DOM.flair, "yPercent");
  }

  getXY(e) {
    const {
      left,
      top,
      width,
      height
    } = this.DOM.button.getBoundingClientRect();

    const xTransformer = gsap.utils.pipe(
      gsap.utils.mapRange(0, width, 0, 100),
      gsap.utils.clamp(0, 100)
    );

    const yTransformer = gsap.utils.pipe(
      gsap.utils.mapRange(0, height, 0, 100),
      gsap.utils.clamp(0, 100)
    );

    return {
      x: xTransformer(e.clientX - left),
      y: yTransformer(e.clientY - top)
    };
  }

  initEvents() {
    this.DOM.button.addEventListener("mouseenter", (e) => {
      const { x, y } = this.getXY(e);

      this.xSet(x);
      this.ySet(y);

      gsap.to(this.DOM.flair, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      });
    });

    this.DOM.button.addEventListener("mouseleave", (e) => {
      const { x, y } = this.getXY(e);

      gsap.killTweensOf(this.DOM.flair);

      gsap.to(this.DOM.flair, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    this.DOM.button.addEventListener("mousemove", (e) => {
      const { x, y } = this.getXY(e);

      gsap.to(this.DOM.flair, {
        xPercent: x,
        yPercent: y,
        duration: 0.4,
        ease: "power2"
      });
    });
  }
}

function initButtonAnimations() {
  const buttonElements = document.querySelectorAll('[data-block="button"]');
  buttonElements.forEach((buttonElement) => {
    new Button(buttonElement);
  });
}

// Initialize scroll-triggered animations for case cards
function initCaseCardScrollAnimations() {
  if (!window.gsap || !window.gsap.ScrollTrigger) return;

  gsap.registerPlugin(window.gsap.ScrollTrigger);

  // Animate case cards on scroll
  const cards = document.querySelectorAll('.case-card.reveal');
  cards.forEach((card, index) => {
    gsap.set(card, { opacity: 0, y: 40 });

    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        end: 'top 45%',
        scrub: 0,
        markers: false
      }
    });
  });
}

// Animate case study heading on scroll
function initCaseStudyHeadingAnimation() {
  if (!window.gsap || !window.gsap.ScrollTrigger) return;

  const heading = document.querySelector('#case-studies-heading .case-title-heading');
  if (!heading) return;

  gsap.registerPlugin(window.gsap.ScrollTrigger);

  gsap.from(heading, {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: heading,
      start: 'top 85%',
      end: 'top 50%',
      scrub: 0.5 // smooth scrub
    }
  });
}

// Overlay controls for pixel-perfect comparison with Figma export
function initOverlay() {
  const overlay = document.getElementById('pixel-overlay');
  if (!overlay) return;

  const img = overlay.querySelector('img');
  const status = overlay.querySelector('.overlay-controls span:first-child strong');
  const opacityEl = overlay.querySelector('.overlay-controls span:last-child strong');
  if (!img) return;
  let active = false;
  let opacity = 0.5;

  function render() {
    overlay.classList.toggle('active', active);
    img.style.opacity = String(opacity);
    if (status) status.textContent = active ? 'On' : 'Off';
    if (opacityEl) opacityEl.textContent = `${Math.round(opacity * 100)}%`;
  }

  render();

  window.addEventListener('keydown', (e) => {
    if (e.key === 'o' || e.key === 'O') {
      active = !active;
      render();
    } else if (e.key === '[') {
      opacity = Math.max(0, opacity - 0.05);
      render();
    } else if (e.key === ']') {
      opacity = Math.min(1, opacity + 0.05);
      render();
    }
  });
}

// Carousel scroll controls
function initCarousel() {
  const track = document.getElementById('carousel-track');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  if (!track || !prevBtn || !nextBtn) return;

  const cards = Array.from(track.querySelectorAll('.grid-item'));
  const supportsSmoothScroll = 'scrollBehavior' in document.documentElement.style;
  const snapPositions = [];
  let isAnimating = false;

  // Add click handler for video playback
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const video = card.querySelector('video');
      if (!video) return;

      // Toggle playing state
      if (card.classList.contains('playing')) {
        video.pause();
        card.classList.remove('playing');
      } else {
        // Pause other videos
        cards.forEach((otherCard) => {
          const otherVideo = otherCard.querySelector('video');
          if (otherVideo) {
            otherVideo.pause();
            otherCard.classList.remove('playing');
          }
        });

        // Play this video
        card.classList.add('playing');
        video.currentTime = 0;
        video.play().catch((err) => {
          console.warn('Video playback failed:', err);
        });
      }
    });
  });

  function refreshMetrics() {
    snapPositions.length = 0;
    cards.forEach((card) => {
      snapPositions.push(card.offsetLeft);
    });
  }

  function clampScroll(value) {
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    return Math.max(0, Math.min(value, maxScroll));
  }

  function resolveTarget(direction) {
    const current = track.scrollLeft;
    if (direction === 'next') {
      for (let i = 0; i < snapPositions.length; i += 1) {
        if (snapPositions[i] > current + 4) {
          return clampScroll(snapPositions[i]);
        }
      }
      return clampScroll(snapPositions[snapPositions.length - 1] ?? current);
    }

    for (let i = snapPositions.length - 1; i >= 0; i -= 1) {
      if (snapPositions[i] < current - 4) {
        return clampScroll(snapPositions[i]);
      }
    }
    return 0;
  }

  function runCardRipple(direction, duration) {
    if (!window.gsap) return;

    const offset = direction === 'next' ? 45 : -45;
    gsap.fromTo(
      cards,
      { x: offset, opacity: 0.94 },
      {
        x: 0,
        opacity: 1,
        duration,
        ease: 'power2.out',
        stagger: 0.04
      }
    );
  }

  function smoothScroll(direction) {
    if (isAnimating) return;

    const target = resolveTarget(direction);
    if (target === track.scrollLeft) return;

    isAnimating = true;
    prevBtn.disabled = true;
    nextBtn.disabled = true;

    const duration = 0.75;

    if (window.gsap) {
      gsap.to(track, {
        scrollLeft: target,
        duration,
        ease: 'power2.out',
        onUpdate: updateButtonStates,
        onComplete: () => {
          isAnimating = false;
          prevBtn.disabled = false;
          nextBtn.disabled = false;
          updateButtonStates();
        }
      });
      runCardRipple(direction, duration);
    } else if (supportsSmoothScroll) {
      track.scrollTo({ left: target, behavior: 'smooth' });
      setTimeout(() => {
        isAnimating = false;
        prevBtn.disabled = false;
        nextBtn.disabled = false;
        updateButtonStates();
      }, 500);
    } else {
      track.scrollLeft = target;
      isAnimating = false;
      prevBtn.disabled = false;
      nextBtn.disabled = false;
      updateButtonStates();
    }
  }

  function updateButtonStates() {
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    const isAtStart = track.scrollLeft <= 1;
    const isAtEnd = track.scrollLeft >= maxScroll - 1;

    prevBtn.disabled = isAtStart || isAnimating;
    nextBtn.disabled = isAtEnd || isAnimating;

    prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
    prevBtn.style.pointerEvents = prevBtn.disabled ? 'none' : 'auto';
    nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
    nextBtn.style.pointerEvents = nextBtn.disabled ? 'none' : 'auto';
  }

  prevBtn.addEventListener('click', (event) => {
    event.preventDefault();
    smoothScroll('prev');
  });

  nextBtn.addEventListener('click', (event) => {
    event.preventDefault();
    smoothScroll('next');
  });

  track.addEventListener('scroll', updateButtonStates);
  window.addEventListener('resize', () => {
    refreshMetrics();
    track.scrollLeft = clampScroll(track.scrollLeft);
    updateButtonStates();
  });

  refreshMetrics();
  updateButtonStates();
}

function initPhilosophyMotion() {
  const section = document.getElementById('philosophy');
  const dots = section?.querySelector('.philo-dots');
  const lines = section ? Array.from(section.querySelectorAll('.philo-line')) : [];

  if (!section || !dots || !lines.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    dots.style.opacity = '0.7';
    return;
  }

  const dotTranslate = 44;
  const textTranslate = 26;

  let rafId = null;
  let targetX = 0;
  let targetY = 0;
  let lineOffsetX = 0;
  let lineOffsetY = 0;

  function applyTransforms() {
    const tx = targetX;
    const ty = targetY;

    dots.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotateX(${ty * -0.04}deg) rotateY(${tx * 0.04}deg) scale(1.02)`;
    lines.forEach((line, index) => {
      const depth = 1 + index * 0.4;
      line.style.transform = `translate3d(${lineOffsetX / depth}px, ${lineOffsetY / depth}px, 0)`;
    });

    rafId = null;
  }

  function requestUpdate(xRatio, yRatio) {
    targetX = -xRatio * dotTranslate;
    targetY = -yRatio * dotTranslate;
    lineOffsetX = -xRatio * textTranslate;
    lineOffsetY = -yRatio * textTranslate;

    if (!rafId) {
      rafId = window.requestAnimationFrame(applyTransforms);
    }
  }

  function reset() {
    targetX = 0;
    targetY = 0;
    lineOffsetX = 0;
    lineOffsetY = 0;
    dots.style.transition = 'transform 0.6s ease';
    lines.forEach((line) => {
      line.style.transition = 'transform 0.6s ease';
      line.style.transform = 'translate3d(0,0,0)';
    });
    dots.style.transform = 'translate3d(0,0,0)';

    window.setTimeout(() => {
      dots.style.transition = '';
      lines.forEach((line) => { line.style.transition = ''; });
    }, 600);
  }

  section.addEventListener('pointermove', (event) => {
    const rect = section.getBoundingClientRect();
    const xRatio = ((event.clientX - rect.left) / rect.width) - 0.5;
    const yRatio = ((event.clientY - rect.top) / rect.height) - 0.5;
    requestUpdate(xRatio, yRatio);
  });

  section.addEventListener('pointerleave', () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    reset();
  });

  section.addEventListener('pointerenter', () => {
    dots.style.transition = 'transform 0.35s ease';
    lines.forEach((line) => {
      line.style.transition = 'transform 0.35s ease';
    });
  });
}

function initFooterMarquee() {
  // Pure CSS animation - no JavaScript needed
  // Animation runs automatically via @keyframes scroll-left
  console.log('Footer marquee using pure CSS animation');
}

function initRevealObserver(root = document) {
  const elements = root.querySelectorAll('.reveal');
  if (!elements.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  if (typeof IntersectionObserver !== 'function') {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, io) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10%', threshold: 0.15 });

  elements.forEach((el) => observer.observe(el));
}

function initCaseBannerParallax(image) {
  if (!image) return;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  let rafId = null;

  function update() {
    const rect = image.getBoundingClientRect();
    const viewport = window.innerHeight || document.documentElement.clientHeight;
    const progress = 1 - Math.min(Math.max((rect.top + rect.height) / (viewport + rect.height), 0), 1);
    const translate = (progress - 0.5) * 60; // clamp to subtle parallax
    image.style.transform = `translateY(${translate}px)`;
    rafId = null;
  }

  function onScroll() {
    if (rafId) return;
    rafId = window.requestAnimationFrame(update);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
}

function initCaseScrollProgress() {
  const progressBar = document.getElementById('case-progress');
  if (!progressBar) return;

  function update() {
    const scrollTop = window.scrollY || window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = docHeight > 0 ? scrollTop / docHeight : 0;
    progressBar.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

function initCaseBackToTop() {
  const triggerDistance = 420;
  const button = document.getElementById('case-back-to-top');
  if (!button) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });

  function onScroll() {
    if ((window.scrollY || window.pageYOffset) > triggerDistance) {
      button.classList.add('is-visible');
    } else {
      button.classList.remove('is-visible');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initCaseEntranceAnimation() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!window.gsap || prefersReducedMotion) return;

  const heroElements = document.querySelectorAll('#case-hero .reveal');
  if (!heroElements.length) return;

  heroElements.forEach((el) => el.classList.add('is-visible'));
  gsap.set(heroElements, { opacity: 0, y: 32 });

  gsap.to(heroElements, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.08
  });
}

function initCaseStudyPage() {
  const pageRoot = document.getElementById('case-study');
  if (!pageRoot) return;

  initRevealObserver(pageRoot);
  initCaseEntranceAnimation();
  initCaseBannerParallax(document.getElementById('case-banner-img'));
  initCaseScrollProgress();
  initCaseBackToTop();
}

// Email Modal Handler
function initEmailModal() {
  const emailBtn = document.getElementById('email-btn');
  const emailModal = document.getElementById('email-modal');
  const closeBtn = document.getElementById('email-modal-close');
  const contactForm = document.getElementById('contact-form');

  if (!emailBtn || !emailModal) return;

  // Open modal
  emailBtn.addEventListener('click', () => {
    emailModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // Close modal
  function closeModal() {
    emailModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  closeBtn?.addEventListener('click', closeModal);

  // Close on overlay click
  emailModal.addEventListener('click', (e) => {
    if (e.target === emailModal) {
      closeModal();
    }
  });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && emailModal.classList.contains('active')) {
      closeModal();
    }
  });

  // Handle form submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const fullname = document.getElementById('fullname').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Create mailto link with form data
      const subject = 'Portfolio Contact Form';
      const body = `Name: ${fullname}\nEmail: ${email}\n\nMessage:\n${message}`;
      const mailtoLink = `mailto:neamul.morshed.nahid@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;
      
      // Close modal after sending
      setTimeout(closeModal, 500);
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  initCursor();
  if (cursorCircles && cursorCircles.length > 0) {
    updateCursor();
  }
  initButtonAnimations();
  initCaseStudyHeadingAnimation();
  initCaseCardScrollAnimations();
  initOverlay();
  initCarousel();
  initPhilosophyMotion();
  initFooterMarquee();
  initCaseStudyPage();
  initEmailModal();
});

document.addEventListener('mousemove', onMouseMove, false);
