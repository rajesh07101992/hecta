const form = document.querySelector('.referelForm');
const userName = document.getElementById('userName');
const userNumber = document.getElementById('userNumber');
const userEmail = document.getElementById('userEmail');
const referralName = document.getElementById('referralName');
const referralNumber = document.getElementById('refferralNumber');
const referralEmail = document.getElementById('referralEmail');
const declaration = document.getElementById('declaration');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (!userName.value) {
    document.getElementById('userNameError').textContent = 'Please enter your name';
  } else {
    document.getElementById('userNameError').textContent = '';
  }
  
  if (!userNumber.value) {
    document.getElementById('userNumberError').textContent = 'Please enter your contact number';
  } else if (userNumber.value.length !== 10) {
    document.getElementById('userNumberError').textContent = 'Contact number must be 10 digits';
  } else {
    document.getElementById('userNumberError').textContent = '';
  }
  
  if (!userEmail.value) {
    document.getElementById('userEmailError').textContent = 'Please enter your email address';
  } else {
    document.getElementById('userEmailError').textContent = '';
  }
  
  if (!referralName.value) {
    document.getElementById('referralNameError').textContent = 'Please enter the referral name';
  } else {
    document.getElementById('referralNameError').textContent = '';
  }
  
  if (!referralNumber.value) {
    document.getElementById('refferralNumberError').textContent = 'Please enter the referral contact number';
  } else if (referralNumber.value.length !== 10) {
    document.getElementById('refferralNumberError').textContent = 'Referral contact number must be 10 digits';
  } else {
    document.getElementById('refferralNumberError').textContent = '';
  }
  
  if (!referralEmail.value) {
    document.getElementById('referralEmailError').textContent = 'Please enter the referral email address';
  } else {
    document.getElementById('referralEmailError').textContent = '';
  }
  
  if (!declaration.checked) {
    document.getElementById('declarationError').textContent = 'Please agree to the terms of service and privacy policy';
  } else {
    document.getElementById('declarationError').textContent = '';
  }
  
  if (userName.value && userNumber.value && userEmail.value && referralName.value && referralNumber.value && referralEmail.value && declaration.checked) {
    form.submit();
  }
});
