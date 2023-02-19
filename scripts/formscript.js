const myForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#enquiry');
const userList = document.querySelector('#users');
const success = document.querySelector("#success");

console.log(success.innerHTML);

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (!(nameInput.value === '' || emailInput.value === '' || msg.value === '')) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}, ${emailInput.value}, ${msg.value};`));
        userList.appendChild(li);

        success.innerHTML = 'Message sent successfully';
        nameInput.value = '';
        emailInput.value = '';
        msg.value = '';
        setTimeout(() => success.innerHTML = '', 5000);
    }
}