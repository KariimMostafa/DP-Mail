document.addEventListener('DOMContentLoaded', function() {
    let sideNav = document.querySelectorAll('.sidenav');
    let sideNavInit = M.Sidenav.init(sideNav);

    let carousel = document.querySelectorAll('.carousel');
    let carouselInit = M.Carousel.init(carousel);

    let lightbox = document.querySelectorAll('.materialboxed');
    let lightboxInit = M.Materialbox.init(lightbox);

    let faqs = document.querySelectorAll('.collapsible');
    let faqsInit = M.Collapsible.init(faqs, {accordion: false,});
  });

const waveOption = {
    fills: ["#E8EAF6", "#9FA8DA"],
    offset: 0.2,
    flowRate: 3,
};

waves(waveOption).mount("#waves");
