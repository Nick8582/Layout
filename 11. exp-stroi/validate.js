function validatePhone(phone) {
  var regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  return regex.test(phone);
}



let inputTell = document.querySelector('#inputTell');
let btnPhone = document.querySelector('#btn_phone');
btnPhone.setAttribute('disabled', true);

inputTell.oninput = function() {
  let phone = inputTell.value;
  let mess = $('#result_form_phone');
  if (!validatePhone(phone)) {
    btnPhone.setAttribute('disabled', true);
    mess.html('<div class="alert alert-danger mt-3">Заполните поле корректно</div>');
    $("#inputTell").addClass("alert-danger");
  } else {
    mess.empty();
    btnPhone.removeAttribute('disabled');
    $("#inputTell").removeClass("alert-danger");
  }
};

let inputTell2 = document.querySelector('#inputTell2');
let btnPhone2 = document.querySelector('#btn_phone2');
btnPhone2.setAttribute('disabled', true);

inputTell2.oninput = function() {
  let phone = inputTell2.value;
  let mess = $('#result_form_phone2');
  if (!validatePhone(phone)) {
    btnPhone2.setAttribute('disabled', true);
    mess.html('<div class="alert alert-danger mt-3">Заполните поле корректно</div>');
    $("#inputTell2").addClass("alert-danger");
  } else {
    mess.empty();
    btnPhone2.removeAttribute('disabled');
    $("#inputTell2").removeClass("alert-danger");
  }
};

let nameIn = document.querySelector('#name');
let phone = document.querySelector('#phone');
let btnSubmit = document.querySelector('#btn_submit');
btnSubmit.setAttribute('disabled', true);

nameIn.oninput = function() {
  let val = nameIn.value;
  let mess = $('.sent-message');
  if (val.length <= 1) {
    btnSubmit.setAttribute('disabled', true);
    mess.html('<div class="alert alert-danger mt-3">Заполните поле "Имя" корректно</div>');
    $("#name").addClass("alert-danger");
  } else {
    mess.empty();
    btnSubmit.removeAttribute('disabled');
    $("#name").removeClass("alert-danger");
  }
  if (phone.val == '') {
    btnSubmit.removeAttribute('disabled');
    console.log("1");
  } else {
    btnSubmit.setAttribute('disabled', true);
  }
};
phone.oninput = function() {
  let phoneIn = phone.value;
  let mess = $('.sent-message');
  if (!validatePhone(phoneIn)) {
    btnSubmit.setAttribute('disabled', true);
    mess.html('<div class="alert alert-danger mt-3">Заполните поле "Телефон" корректно</div>');
    $("#phone").addClass("alert-danger");
  } else {
    mess.empty();
    btnSubmit.removeAttribute('disabled');
    $("#phone").removeClass("alert-danger");
  }

};

let nameModal = document.querySelector("#nameModal");
let phoneModal = document.querySelector('#phoneModal');
let submitButtonModal = document.querySelector('#submitButton_Modal');
submitButtonModal.setAttribute('disabled', true);

nameModal.oninput = function() {
  let val = nameModal.value;
  let mess = $('.sent-messageModal');
  if (val.length <= 1) {
    btnSubmit.setAttribute('disabled', true);
    mess.html('<div class="alert alert-danger mt-3">Заполните поле "Имя" корректно</div>');
    $("#nameModal").addClass("alert-danger");
  } else {
    mess.empty();
    btnSubmit.removeAttribute('disabled');
    $("#nameModal").removeClass("alert-danger");
  }
  if (phoneModal.val === '') {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', true);
  }
};
phoneModal.oninput = function() {
  let phoneInput = phoneModal.value;
  let mess = $('.sent-messageModal');
  if (!validatePhone(phoneInput)) {
    submitButtonModal.setAttribute('disabled', true);
    mess.html('<div class="alert alert-danger mt-3">Заполните поле корректно</div>');
    $("#phoneModal").addClass("alert-danger");
  } else {
    mess.empty();
    submitButtonModal.removeAttribute('disabled');
    $("#phoneModal").removeClass("alert-danger");
  }

};


$(function() {
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

    $.ajax({
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

  $('#ajax_form_phone').submit(function(e) {
    e.preventDefault();
    let form = $(this);
    let mess = $('#result_form_phone');
    let btn = $('#btn_phone');
    btn.addClass('progress-bar-striped progress-bar-animated');

    function reset() {
      $('#inputTell').val('');
    }

    $.ajax({
      type: "POST",
      url: "contactPhone.php",
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
  $('#ajax_form_phone2').submit(function(e) {
    e.preventDefault();
    let form = $(this);
    let mess = $('#result_form_phone2');
    let btn = $('#btn_phone2');
    btn.addClass('progress-bar-striped progress-bar-animated');

    function reset() {
      $('#inputTell2').val('');
    }

    $.ajax({
      type: "POST",
      url: "contactPhone2.php",
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
})

$(function() {
  $('.validate-p').hyphenate();
});

$('.bottomnumber').click(function() {
  $('.close-modal').trigger('click');
});