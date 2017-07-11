$(document).ready(function(){

  /* Scroll */
  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('#' + this.hash.slice(1));
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });

  /* Contact */
  $('#contact-form').on('click', 'button', function(e) {
    e.preventDefault();
    $('.alert-info').closest('.form-group').fadeIn('slow');
    $.post('https://app.libreclass.org/landingpage/message', {
      name: $('#inputName').val(),
      phone: $('#inputPhone').val(),
      email: $('#inputEmail').val(),
      subject: $('#inputSubject').val(),
      message: $('#inputMessage').val()
    }, function(data) {
      if (data.status == 1) {
        $('.alert-success').closest('.form-group').fadeIn('slow');
        setTimeout(function() {
          $('.alert-success').closest('.form-group').fadeOut('slow');
        }, 8000);
      } else {
        $('.alert-danger').html('\
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">\
            <span aria-hidden="true">&times;</span>\
          </button>\
          ' + data.message + '\
        ');
        $('.alert-danger').closest('.form-group').fadeIn('slow');
          setTimeout(function() {
            $('.alert-danger').closest('.form-group').fadeOut('slow');
          }, 8000);
        }
    }).fail(function() {
      $('.alert-danger').closest('.form-group').fadeIn('slow');
      setTimeout(function() {
        $('.alert-danger').closest('.form-group').fadeOut('slow');
      }, 8000);
    }).always(function() {
      $('.alert-info').closest('.form-group').hide();
    });
  });
});
