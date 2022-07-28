/**
 * PHP Email Form Validation - v3.2
 * URL: https://bootstrapmade.com/php-email-form/
 * Author: BootstrapMade.com
 */
(function() {
  $('#form').submit(function(e) {
    e.preventDefault();
    let form = $(this);
    let mess = $('.sent-message');
    let btn = $('#btn_submit');
    btn.addClass('progress-bar-striped progress-bar-animated');

    function reset() {
      $('#name').val('');
      $('#phone').val('');
      $('#email').val('');
      $('#text_comment').val('');
    }

    console.log($);
    $.ajax({
      type: "POST",
      url: "contact.php",
      data: form.serialize(),
      success: function() {
        btn.removeClass('progress-bar-striped progress-bar-animated');
        setTimeout(
          mess.html('<div class="alert alert-success mt-3">Заявка отправлена</div>'),
          3000);
        reset();
      },
      error: function() {
        mess.html('<div class="alert alert-danger mt-3">Ошибка отправки!</div>');
        btn.addClass('progress-bar-striped progress-bar-animated');
      }
    })
    return false
  })

  $('#contactForm_modal').submit(function(e) {
    e.preventDefault();
    let form = $(this);
    let mess = $('.sent-messageModal');
    let btn = $('#submitButton_Modal');
    btn.addClass('progress-bar-striped progress-bar-animated');

    function reset() {
      $('#nameModal').val('');
      $('#phoneModal').val('');
      $('#emailModal').val('');
      $('#messageModal').val('');
    }

    console.log($);
    jQuery.ajax({
      type: "POST",
      url: "contactModal.php",
      data: form.serialize(),
      success: function() {
        btn.removeClass('progress-bar-striped progress-bar-animated');
        setTimeout(
          mess.html('<div class="alert alert-success mt-3">Заявка отправлена</div>'),
          3000);
        reset();
      },
      error: function() {
        mess.html('<div class="alert alert-danger mt-3">Ошибка отправки!</div>');
        btn.addClass('progress-bar-striped progress-bar-animated');
      }
    })
    return false
  })

})();