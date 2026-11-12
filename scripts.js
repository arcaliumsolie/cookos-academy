/*!
* Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    toggle.textContent = open ? '✕' : '☰';
  };

  // Opening and Closing link
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    setOpen(!nav.classList.contains('open'));
  });

  // Closes when the link is selected
  nav.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', () => setOpen(false))
  );

  // Closes when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });

  // Reset if window is resized
  window.addEventListener('resize', () => {
    if (window.innerWidth > 640) setOpen(false);
  });

  // Highlight current page
  const current = location.pathname.split('/').pop() || 'index.html';
  nav.querySelectorAll('a').forEach((link) => {
    if (link.getAttribute('href') === current) link.classList.add('active');
  });
});

// Gallery filtering
document.addEventListener("DOMContentLoaded", function () {

    const filterButtons = document.querySelectorAll(".gallery-filters button");
    const galleryImages = document.querySelectorAll(".gallery-grid img");

    filterButtons.forEach(button => {

        button.addEventListener("click", function () {

            const filter = this.dataset.filter;

            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            // Filter gallery images
            galleryImages.forEach(image => {

                if (filter === "all" || image.dataset.category === filter) {
                    image.hidden = false;
                } else {
                    image.hidden = true;
                }

            });

        });

    });

});