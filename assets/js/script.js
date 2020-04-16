document.addEventListener('DOMContentLoaded', () => {
  const selectAllElements = document.querySelectorAll("[data-select]");

  selectAllElements.forEach(function (item) {
    item.addEventListener('click', function (event) {

      if (event.target.hasAttribute("data-select-item")) {
        this.querySelector('[data-select-title]').innerText = event.target.getAttribute('data-select-item');
        this.querySelector('.select__dropdown').classList.toggle("hidden");
      } else {
        this.querySelector('.select__dropdown').classList.toggle("hidden");
      }
    })
  })
});



$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 10,
  });
  var owl = $('.owl-carousel');
  owl.owlCarousel();
  // Go to the next item
  $('.carousel-arrow__left').click(function () {
    owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.carousel-arrow__right').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
  })
});


let loaded = document.querySelector('.preloaded');
setTimeout(endLoaded, 4000);

function endLoaded() {
  loaded.classList.add('preloaded_active');
}