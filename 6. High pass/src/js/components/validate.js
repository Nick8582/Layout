(() => {
  new JustValidate('.contacts__form', {
    colorWrong: '#F06666',
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 25
      },
      email: {
        required: true,
      },
      message: {
        required: true,
      }
    },
    messages: {
      name: {
        required: "Недопустимый формат",
        minLength: "Введите 2 и более символов",
        maxLength: "Запрещенно вводить более 25 символов"
      },
      email: {
        required: "Недопустимый формат"
      },
      message: {
        required: "Не допустимый формат"
      }
    },
  });
  new JustValidate('.about__form', {
    colorWrong: '#F06666',
    rules: {
      email: {
        required: true,
      }
    },
    messages: {
      email: {
        required: "Недопустимый формат"
      },
    },
  });
})();
