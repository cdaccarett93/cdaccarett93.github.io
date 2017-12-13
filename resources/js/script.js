$(document).ready(function() {
  $('#my-form').captcha();

  $(function() {
    $.scrollify({
      section: '.section-scroll'
    });
  });

  Typed.new('.element', {
    strings: ['Computer Science', 'Developer'],
    typeSpeed: 150,
    loop: null
  });

  /* Navigation */
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(':focus')) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  $('#mySidenav a').on('click', function() {
    document.getElementById('mySidenav').style.width = '0';
  });

  $('#closenav').on('click', function() {
    document.getElementById('mySidenav').style.width = '0';
  });

  $('#menu').on('click', function() {
    document.getElementById('mySidenav').style.width = '250px';
  });
});

var top0 = $('#pwaTodolist').offset().top;
var top1 = $('#carbcandy').offset().top;
var top2 = $('#fsbuynsell').offset().top;
var top3 = $('#contact').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    var top4 = $('#about').offset().top;
    if (scrollPos === top4) {
      $('#menu').css('color', '#f1f1f1');
    } else {
      $('#menu').css('color', '#555');
    }
  } else {
    if (
      scrollPos === top0 ||
      scrollPos === top1 ||
      scrollPos === top2 ||
      scrollPos >= top3
    ) {
      $('#menu').css('color', '#555');
    } else {
      $('#menu').css('color', '#f1f1f1');
    }
  }
});
