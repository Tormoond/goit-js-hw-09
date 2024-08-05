
const formData = {
    email: "",
    message: "",
};

const form = document.querySelector('.feedback-form');

window.addEventListener('DOMContentLoaded', () => {
    const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedFormData) {
        form.email.value = savedFormData.email;
        form.message.value = savedFormData.message;
    }
});

form.addEventListener('input', e => {
    const { name, value } = e.target;
    if (formData.hasOwnProperty(name)) {
        formData[name] = value.trim();
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
});

form.addEventListener('submit', e => {
    e.preventDefault();

    const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedFormData.email && savedFormData.message) {
        console.log(savedFormData);
        localStorage.removeItem('feedback-form-state');
        form.reset();
    } else {
        alert('Fill please all fields');
    }
});