gsap.registerPlugin(ScrollTrigger);

function initPageAnimations() {
    const typingText = document.getElementById('typing-text');
    if (typingText) {
        const words = ['Web Developer', 'Web Designer'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        function type() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                typingText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }
            let typeSpeed = 80;
            if (isDeleting) {
                typeSpeed = 60;
            }
            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 600;
            }
            setTimeout(type, typeSpeed);
        }
        type();
    }
    const heroTitle = document.querySelector('.split-text');
    const heroDescription = document.querySelector('.hero-description');
    gsap.from(heroTitle, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    });
    gsap.from(heroDescription, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power4.out'
    });
    gsap.to('.scroll-line', {
        scaleY: 0.3,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
    });
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    const projectCards = document.querySelectorAll('.featured-card');
    projectCards.forEach(card => {
        const image = card.querySelector('img');
        const title = card.querySelector('h3');
        const description = card.querySelector('p');
        const techStack = card.querySelector('.tech-stack');
        const viewProject = card.querySelector('.view-project');
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
                end: 'top center',
                toggleActions: 'play none none reverse'
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                scale: 1.02,
                duration: 0.4,
                ease: 'power2.out'
            });
            gsap.to(image, {
                scale: 1.1,
                duration: 0.4,
                ease: 'power2.out'
            });
            gsap.to(title, {
                y: -5,
                duration: 0.3,
                ease: 'power2.out'
            });
            gsap.to(description, {
                y: -3,
                opacity: 0.8,
                duration: 0.3,
                delay: 0.1,
                ease: 'power2.out'
            });
            gsap.to(techStack.children, {
                y: -3,
                opacity: 1,
                duration: 0.3,
                stagger: 0.05,
                ease: 'power2.out'
            });
            gsap.to(viewProject, {
                x: 5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.4,
                ease: 'power2.out'
            });
            gsap.to(image, {
                scale: 1,
                duration: 0.4,
                ease: 'power2.out'
            });
            gsap.to(title, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
            gsap.to(description, {
                y: 0,
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
            gsap.to(techStack.children, {
                y: 0,
                opacity: 0.7,
                duration: 0.3,
                stagger: 0.05,
                ease: 'power2.out'
            });
            gsap.to(viewProject, {
                x: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    const skillItems = document.querySelectorAll('.skill-category li');
    skillItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                end: 'top 60%',
                toggleActions: 'play none none reverse'
            },
            x: -50,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });
}

function initContactAnimations() {
    gsap.from('.contact-header', {
        scrollTrigger: {
            trigger: '.contact-header',
            start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    const typewriteElements = document.querySelectorAll('.typewrite');
    typewriteElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;
        gsap.from(element.parentElement, {
            scrollTrigger: {
                trigger: element.parentElement,
                start: 'top 80%',
            },
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                const typing = setInterval(() => {
                    if (i < text.length) {
                        element.textContent += text.charAt(i);
                        i++;
                    } else {
                        clearInterval(typing);
                        element.classList.add('typed');
                    }
                }, 50);
            }
        });
    });
    gsap.from('.social-icon', {
        scrollTrigger: {
            trigger: '.social-links',
            start: 'top 80%',
        },
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)'
    });
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact-right',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    gsap.from('.form-group', {
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.4
    });
}

function setupInfiniteCarousels() {
  document.querySelectorAll('.carousel-row').forEach(row => {
    const track = row.querySelector('.carousel-track');
    if (!track) return;
    track.querySelectorAll('.carousel-tile.clone').forEach(e => e.remove());
    const tiles = Array.from(track.children).filter(e => e.classList.contains('carousel-tile') && !e.classList.contains('clone'));
    tiles.forEach(tile => {
      const clone = tile.cloneNode(true);
      clone.classList.add('clone');
      track.appendChild(clone);
    });
    function setDuration(direction) {
      const tileCount = tiles.length;
      const tileWidth = tiles[0].offsetWidth;
      const gap = parseInt(window.getComputedStyle(track).gap || 0);
      const totalWidth = tileCount * tileWidth + (tileCount - 1) * gap;
      track.style.minWidth = (2 * totalWidth) + 'px';
      const pxPerSecond = 40;
      const duration = (totalWidth) / pxPerSecond;
      let anim = '';
      if (!direction) direction = row.dataset.direction || (row.classList.contains('carousel-rtl') ? 'rtl' : 'ltr');
      if (direction === 'rtl') {
        anim = `carousel-slide-rtl-js ${duration}s linear infinite`;
      } else {
        anim = `carousel-slide-ltr-js ${duration}s linear infinite`;
      }
      track.style.animation = 'none';
      void track.offsetWidth;
      track.style.animation = anim;
    }
    row.dataset.defaultDirection = row.classList.contains('carousel-rtl') ? 'rtl' : 'ltr';
    row.dataset.direction = row.dataset.defaultDirection;
    setDuration(row.dataset.direction);
    window.addEventListener('resize', () => setDuration(row.dataset.direction));
    let reverseTimeout;
    row.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        const newDir = e.deltaX > 0 ? 'ltr' : 'rtl';
        row.dataset.direction = newDir;
        setDuration(newDir);
        clearTimeout(reverseTimeout);
        reverseTimeout = setTimeout(() => {
          row.dataset.direction = row.dataset.defaultDirection;
          setDuration(row.dataset.defaultDirection);
        }, 3000);
      }
    }, { passive: false });
  });
}

function setupProjectSlider() {
  document.querySelectorAll('.project-slider').forEach(slider => {
    const images = JSON.parse(slider.getAttribute('data-images'));
    const imgEl = slider.querySelector('.slider-img');
    const dots = slider.querySelectorAll('.slider-dot');
    let idx = 0;
    function showImage(newIdx) {
      if (newIdx === idx) return;
      imgEl.classList.remove('fade-in');
      imgEl.classList.add('fade-out');
      setTimeout(() => {
        imgEl.src = images[newIdx];
        imgEl.classList.remove('fade-out');
        imgEl.classList.add('fade-in');
      }, 350);
      dots[idx].classList.remove('active');
      dots[newIdx].classList.add('active');
      idx = newIdx;
    }
    imgEl.classList.add('fade-in');
    setInterval(() => {
      let next = (idx + 1) % images.length;
      showImage(next);
    }, 3000);
  });
}

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Form submitted');
        });
    }
    const commentForm = document.getElementById('commentForm');
    const commentsList = document.getElementById('commentsList');
    if (commentForm && commentsList) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('commentName');
            const commentInput = document.getElementById('commentText');
            const name = nameInput.value.trim();
            const comment = commentInput.value.trim();
            if (name && comment) {
                const newComment = createCommentElement(name, comment);
                commentsList.insertBefore(newComment, commentsList.firstChild);
                nameInput.value = '';
                commentInput.value = '';
                gsap.from(newComment, {
                    opacity: 0,
                    y: -20,
                    duration: 0.5,
                    ease: 'power2.out'
                });
                console.log('Comment added:', { name, comment });
            }
        });
    }
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuLinks = document.querySelectorAll('.menu-link');
    console.log('Menu elements found:', { menuToggle, menuOverlay, menuLinks });
    if (menuToggle && menuOverlay) {
        menuToggle.addEventListener('click', () => {
            console.log('Menu toggle clicked');
            menuOverlay.classList.toggle('active');
            if (menuOverlay.classList.contains('active')) {
                gsap.from(menuLinks, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power3.out'
                });
            }
        });
    }
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Menu link clicked:', this.getAttribute('href'));
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            console.log('Target section found:', targetSection);
            if (targetSection) {
                if (menuOverlay) {
                    menuOverlay.classList.remove('active');
                }
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                console.log('Scrolling to section:', targetId);
            } else {
                console.log('Target section not found:', targetId);
            }
        });
    });
    initPageAnimations();
    initContactAnimations();
    setupInfiniteCarousels();
    setupProjectSlider();
    const resumeBtn = document.getElementById('download-resume-btn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function(e) {
            const rect = resumeBtn.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';
            ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
            resumeBtn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 500);
            e.preventDefault();
            const link = document.createElement('a');
            link.href = 'files/Lance Enri Diamzon.pdf';
            link.setAttribute('download', 'Lance Enri Diamzon.pdf');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});

function createCommentElement(name, comment) {
    const commentItem = document.createElement('div');
    commentItem.className = 'comment-item';
    const currentTime = new Date();
    const timeString = getTimeAgo(currentTime);
    commentItem.innerHTML = `
        <div class="comment-header">
            <span class="comment-author">${escapeHtml(name)}</span>
            <span class="comment-date">${timeString}</span>
        </div>
        <div class="comment-content">
            <p>${escapeHtml(comment)}</p>
        </div>
    `;
    return commentItem;
}

function getTimeAgo(date) {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    if (diffInSeconds < 60) {
        return 'Just now';
    } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
        const days = Math.floor(diffInSeconds / 86400);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
