const form = document.querySelector('form');
const input = document.querySelector('.email-input');
const subBtn = document.querySelector('.email-btn');
const errorMsg = document.getElementById('error-email');

input.addEventListener('input', () => {
  errorMsg.textContent = "";
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = input.value.trim();

    if (!email || !isValidEmail(email)) {
        errorMsg.textContent = "Please enter a valid email.";
        return;
    }

    else {
        errorMsg.textContent = "";
        window.location.href = "./mail-confirmation/mail.html";
    }

});

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const logo = document.querySelector(".logo");

logo.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});