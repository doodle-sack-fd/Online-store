const cntButton = document.querySelector('.contacts-button');
const popup = document.querySelector('.modal');
const popupClose = popup.querySelector('.modal-close');
const userName = popup.querySelector('[name=name]');
const userEmail = popup.querySelector('[name=email]');
const form = popup.querySelector('.user-form')

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

cntButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
    userName.focus();
    if (storage) {
        userName.value = storage;
        userEmail.focus();
    } else {
        userName.focus();
    }
});

popupClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
});

form.addEventListener('submit', function (evt) {
    if (!userName.value || !userEmail.value) {
        evt.preventDefault();
    } else {
        if (isStorageSupport) {
            localStorage.setItem('name', userName.value);
        }
    }
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains('modal-show')) {
            evt.preventDefault();
            popup.classList.remove('modal-show');
        }
    }
})