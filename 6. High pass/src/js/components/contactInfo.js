let closeInfoContact = document.querySelector('#contactInfoClose');
let contactsAdress = document.querySelector('.contacts__adress');
let openInfoContact = document.querySelector('#map');

closeInfoContact.addEventListener('click', function() {
  contactsAdress.style.display = 'none';
})

openInfoContact.addEventListener('click', function() {
  if (contactsAdress.style.display) {
    contactsAdress.style.display = 'block';
  }
})
