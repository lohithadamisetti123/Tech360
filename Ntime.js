  function openn() {
    document.getElementsByClassName("slide-menu")[0].style.left = "0px";
    document.querySelector(".overlay").style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function cloose() {
    document.getElementsByClassName("slide-menu")[0].style.left = "-250px";
    document.querySelector(".overlay").style.display = "none";
    document.body.style.overflow = "auto";
  }


// For filtering success and failed startup cards
function filterCards(type) {
    const allCards = document.querySelectorAll('.startup-card');
    allCards.forEach(card => {
        if (type === 'all' || card.dataset.type === type) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// "View More" button behavior
function setupViewMoreButtons() {
    const buttons = document.querySelectorAll('.view-more-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const link = button.getAttribute('data-link');
            if (link) window.open(link, '_blank');
        });
    });
}

// Scroll animation using IntersectionObserver
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const animatedCards = document.querySelectorAll('.startup-card');
    animatedCards.forEach(card => observer.observe(card));
}

// Initialize all features
window.addEventListener('DOMContentLoaded', () => {
    setupViewMoreButtons();
    animateOnScroll();
});

  // View More button logic
  document.querySelectorAll('.view-more-btn').forEach(button => {
    button.addEventListener('click', () => {
      const link = button.getAttribute('data-link');
      if (link) window.open(link, '_blank');
    });
  });

  // Scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.startup-card').forEach(card => observer.observe(card));

  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }


