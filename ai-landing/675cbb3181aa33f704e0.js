// Mobile menu
$(function () {
  $(".main-nav__burger-js").on("click", function () {
    $(".main-nav__drawer-js").toggleClass("main-nav__drawer--hide");
  });
});

// Owl carousel
$(function () {
  $(".owl-carousel").owlCarousel({
    items: 1.5,
    loop: true,
    stagePadding: 2,
    margin: 50,
    dots: false,
    center: true,
    startPosition: 1,
    responsive: {
      768: {
        margin: 40,
        items: 3,
        center: false,
        loop: false,
      },
      1440: {
        margin: 80,
        center: false,
        items: 4,
        loop: false,
        startPosition: 0,
      },
    },
  });
});

// Accordion

$(function () {
  $(".accordion-js").on("click", function () {
    this.classList.toggle("accordion--open");
    $(this).find(".accordion__icon-js").toggleClass("accordion__icon--open");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
