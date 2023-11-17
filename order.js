//form-validation
const form = document.querySelector('.checkout-main-left-form-form');
const email = document.querySelector('#email');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const company = document.querySelector('#company');
const address = document.querySelector('#address1');
const address2 = document.querySelector('#address2');
const address3 = document.querySelector('#address3');
const country = document.querySelector('#country');
const state = document.querySelector('#state');
const city = document.querySelector('#city');
const postal = document.querySelector('#postal');
const phone = document.querySelector('#phone');
const shippingOptions = document.querySelectorAll('input[name="shipping-fee"]');
const shippingFeeError = document.querySelector('.shipping-fee-error');
const conformForm = document.querySelector('.checkout-main-left-second');
const iconColorHandle = document.querySelector('.checkout-title-icon-shipping-review');
form.addEventListener('submit', (e) => {
  if (!validateInputs() || !validateShippingFee()) {
    e.preventDefault();

  }
  else {
    e.preventDefault();
    showSecond();
  }

});

function showSecond() {
  iconColorHandle.classList.add('review')
  form.style.display = 'none';
  conformForm.classList.remove('hidden')

  $('.displayDetails-name').text(firstname.value + " " + lastname.value)
  $('.displayDetails-company').text(company.value)
  $('.displayDetails-address').text(address.value + ', ' + address2.value + ', ' + address3.value)
  $('.displayDetails-cityState').text(city.value + ", " + state.value)
  $('.displayDetails-country').text(country.value)
  $('.displayDetails-phone').text(phone.value)
  $('.displayDetails-email').text(email.value)

}


function validateShippingFee() {
  const selectedOption = Array.from(shippingOptions).find((option) => option.checked);

  if (!selectedOption) {
    shippingFeeError.innerText = 'Please select a shipping fee option.';
    return false;
  } else {
    shippingFeeError.innerText = '';
    return true;
  }
}

function validateInputs() {
  const emailVal = email.value.trim();
  const firstnameVal = firstname.value.trim();
  const lastnameVal = lastname.value.trim();
  const addressVal = address.value.trim();
  const cityVal = city.value.trim();
  const postalVal = postal.value.trim();
  const phoneVal = phone.value.trim();
  let success = true;
  if (firstnameVal === '') {
    success = false;
    setError(firstname, 'This is a required field.');
    firstname.focus();
  } else {
    setSuccess(firstname);
  }

  if (lastnameVal === '') {
    success = false;
    setError(lastname, 'This is a required field.');
  } else {
    setSuccess(lastname);
  }

  if (emailVal === '') {
    success = false;
    firstname.focus();

    setError(email, 'This is a required field.');
  } else if (!validateEmail(emailVal)) {
    success = false;
    setError(email, 'Please enter a valid email address (Ex: johndoe@domain.com).');
  } else {
    setSuccess(email);
  }

  if (addressVal === '') {
    success = false;
    setError(address, 'This is a required field.');
  } else {
    setSuccess(address);
  }

  if (cityVal === '') {
    success = false;
    setError(city, 'This is a required field.');
  } else {
    setSuccess(city);
  }

  if (postalVal === '') {
    success = false;
    setError(postal, 'This is a required field.');
  } else if (!validateNumber(postalVal)) {
    success = false;
    setError(postal, 'Please enter a valid number.');
  } else {
    setSuccess(postal);
  }

  if (phoneVal === '') {
    success = false;
    setError(phone, 'This is a required field.');
  } else if (!validatephoneNumber(phoneVal)) {
    success = false;
    setError(phone, 'Please enter a valid number.');
  } else {
    setSuccess(phone);
  }

  return success;
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector('.error');
  errorElement.innerText = message;
  inputGroup.classList.add('err');
  inputGroup.classList.remove('success');
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector('.error');
  errorElement.innerText = '';
  inputGroup.classList.remove('err');
  inputGroup.classList.add('success');
}

function validateEmail(email) {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailPattern.test(email);
}

function validatephoneNumber(number) {
  const phoneNumberPattern = /^\d{10}$/;
  return phoneNumberPattern.test(number);
}
function validateNumber(number) {
  const alphanumericPattern = /^[0-9a-zA-Z]*$/;
  return alphanumericPattern.test(number);
}

// discount
$(document).ready(function () {
  $('.second-payment-content-discount-title').on('click', function () {
    $('.second-payment-content-discount').toggleClass("hidden");
  })
})



//checkbox-clicked
const addressDisplay = document.querySelector('#addressDisplay')
// addressDisplay.checked = true
$(addressDisplay).on('click', function () {
  if (!addressDisplay.checked) {
    this.checked = false
  }
  else {
    this.checked = true
  }
  if (addressDisplay.checked) {
    $('.place-order').on('click', function () {
      $('.checkout-section').css('display', 'none')
      $('.checkout-section-conform').css('display', 'block')
    })
    
  }
})
