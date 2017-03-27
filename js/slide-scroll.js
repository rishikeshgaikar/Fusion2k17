$(document).ready(function() {
  var $contentContainer = $('#slide-scroll');
  var $topSection = $('section:first-child');
  var contentLength = $contentContainer.children('section').length;
  var $carouselContainers = $('.carousel__container');

  // Initialize the active slide to zero
  $contentContainer.data('slide', 0);

  function move(dir) {
    var activeIndex = parseInt($contentContainer.data('slide'));
    $carouselContainers.eq(activeIndex).removeClass('is-active');

    if (dir > 0) {
      activeIndex = (activeIndex + dir) % contentLength;
    } else if (dir < 0) {
      activeIndex = (activeIndex + dir + contentLength) % contentLength;
    }

    $carouselContainers.eq(activeIndex).addClass('is-active');
    $topSection.css('margin-top', -1 * activeIndex * 100 + 'vh');
    $contentContainer.data('slide', activeIndex);
  }

  var locked = false, timeOut;
  $(window).on('mousewheel', function(event) {
    if (locked === true) {
      return false;
    }

    locked = true;

    // Function to do
    var viewportHeight = $(window).height();

    if (event.deltaY > 0) {
      move(-1);
    } else {
      move(1);
    }

    clearTimeout(timeOut);
    timeOut = setTimeout(function() {
      locked = false;
    }, 1000);
  });

  $carouselContainers.on('click', function() {
    var activeIndex = parseInt($contentContainer.data('slide'));
    var clickedIndex = $(this).index();
    move(clickedIndex - activeIndex);

    $carouselContainers.eq(activeIndex).removeClass('is-active');
    $carouselContainers.eq(clickedIndex).addClass('is-active');
  });
});
