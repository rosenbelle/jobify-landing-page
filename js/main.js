$(document).ready(function () {

  var $upArrow = $('.up-arrow');

  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    pagination: '.swiper-pagination',
    speed: 500,
    effect: 'slide',
    keyboardControl: true,
    onInit: function (swiper) {
      initAnimation();
      // get items ready for animations
      playAnimations(swiper);
      // play animations of the first slide
    },
    onSlideChangeStart: function (swiper) {
      playAnimations(swiper);
      // play animations at each slide
    },
    onReachEnd: function (swiper) {
      $upArrow.hide();
    },
    onSlidePrevStart: function (swiper) {
      $upArrow.show();
    },
    loop: false
  })

  function initAnimation() {
      $('.animated').each(function () {
          $(this).attr('data-origin-class', $(this).attr('class'));
          var aniDuration = $(this).data('ani-duration');
          var aniDelay = $(this).data('ani-delay');
          $(this).css({
              'visibility': 'hidden',
              'animation-duration': aniDuration,
              'animation-delay': aniDelay,
          });
      });
  }

  function clearAnimations() {
      $('.animated').each(function () {
          $(this).css({ 'visibility': 'hidden' });
          $(this).attr('class', $(this).data('origin-class'));
      });
  }

  function playAnimations(mySwiper) {

    clearAnimations();
    // puts back original class

    var aniItems = mySwiper.slides[mySwiper.activeIndex].querySelectorAll('.animated');
    // selecting items of current slide

        $(aniItems).each(function () {
            $(this).css({ 'visibility': 'visible' });
            var aniName = $(this).data('ani-name');
            $(this).addClass(aniName);
            // ads class to launch animation
        });
  }

  // play and pause button functions
  var audio = document.getElementById("audio");

  function playAudio() {
      audio.play();
  }

  function pauseAudio() {
      audio.pause();
  }

  function playSound() {
    $(this).toggleClass('paused');
    if (audio.paused) {
      playAudio();
      } else {
        pauseAudio();
      }
  }

  var soundButton = document.getElementById("play");
  $(soundButton).on('click', playSound);

  $('.loading-overlay').slideUp();
  // everything is ready, the overlay slides up

  playSound();
  // starts playing the audio track

});
