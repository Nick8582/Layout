(() => {
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999-99-99");

  im.mask(selector);

  new JustValidate('.contacts__form', {
    colorWrong: '#D11616',
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 25
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
    },
    messages: {
      name: {
        required: "Недопустимый формат",
        minLength: "Введите 2 и более символов",
        maxLength: "Запрещенно вводить более 25 символов"
      },
      tel: {
        required: "Недопустимый формат",
        function: "Здесь должно быть 10 символов"
      },
    },
    submitHandler: function(thisForm) {
      let formData = new FormData(thisForm);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
          }
        }
      }
      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);
      thisForm.reset();
    }
  });
})();