$(document).ready(function() {
  $('#fm-mail').submit(function(e) {
    e.preventDefault();

    var data = {
      name: $('#txt-name').val(),
      email: $('#txt-email').val(),
      subject: $('#txt-subject').val(),
      message: $('#ltxt-message').val()
    };

    $.ajax({
      type: 'POST',
      url: 'email.php',
      data: data,
      success: function() {
        $('#fm-mail').addClass('hide').next('p#success').removeClass('hide');
      },
      error: function() {
        $('#fm-mail').addClass('hide').next('p#failure').removeClass('hide');
      }
    });
  });
});
