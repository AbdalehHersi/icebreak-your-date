const loginFormHandler = async (event) => {
  event.preventDefault();


  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  if (username && password) {

    const errorMessage = document.getElementById("passwordLogin");
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/main');
      if (errorMessage.classList === "loginValidator") {
        errorMessage.classList.remove("loginValidator")
      }
    } else {
      errorMessage.classList.add("loginValidator");
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#name-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const errorMessage = document.getElementById("errorMessage");

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/main');
      if (errorMessage.classList === "signupValidator") {
        errorMessage.classList.remove("signupValidator");
      }
    } else {
      errorMessage.classList.remove("signupValidatorNoDetails");
      errorMessage.classList.add("signupValidator");
    }
  } else {
    if (errorMessage.classList === "signupValidator") {
      errorMessage.classList.remove("signupValidator")
    }
    errorMessage.classList.add("signupValidatorNoDetails")
  }
};

document.querySelector(".login-form").addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
