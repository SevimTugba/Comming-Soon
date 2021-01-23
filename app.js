/* const form = document.querySelector('.form');
const input = document.querySelector('[email="email"]');

form.addEventListener('keyup', function (e) {
    e.preventDefault();
    const value = input.value;
    console.log(value);
  }); */

const form = document.querySelector('.form');
const input = document.querySelector('input');
const error = document.querySelector('.error-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = input.value;
    console.log(value);
    if(value === "") {
      error.classList.remove('error-hidden');
      input.classList.add('input-error');
        error.innerHTML = `<img class="error-img" src="./images/icon-error.svg" alt=""><p class="error-text">this area cannot be empty</p>`
    }
    else if(!validateEmail(value)){
      error.classList.remove('error-hidden');
      input.classList.add('input-error');
      error.innerHTML = `<img class="error-img" src="./images/icon-error.svg" alt=""><p class="error-text">enter a valid email address</p>`
    }
    else if(validateEmail(value)){
      error.classList.add('error-hidden');
      input.classList.remove('input-error');
    }
  }); 

  function validateEmail(email){
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    {
      return true;
    }
    else{
      return false;
    }
  }