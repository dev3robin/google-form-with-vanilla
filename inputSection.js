// input_box2
const inputField = document.getElementById('myInput2');
const inputBoxRelated = document.getElementById('input-box2-related');
const wrapper = document.getElementById('wrapper2');

inputField.addEventListener('focus', () => {
    wrapper.classList.add('focused');
});

inputField.addEventListener('blur', () => {
    if (!inputField.value) {
        wrapper.classList.remove('focused');
    }
});

inputBoxRelated.addEventListener('click', () => {
    inputField.value = '';
    inputField.focus();
    wrapper.classList.remove('focused');
});
// input_box3
const inputField3 = document.getElementById('myInput3');
const inputBoxRelated3 = document.getElementById('input-box3-related');
const wrapper3 = document.getElementById('wrapper3');

inputField3.addEventListener('focus', () => {
    wrapper3.classList.add('focused');
});

inputField3.addEventListener('blur', () => {
    if (!inputField3.value) {
        wrapper3.classList.remove('focused');
    }
});

inputBoxRelated3.addEventListener('click', () => {
    inputField3.value = '';
    inputField3.focus();
    wrapper3.classList.remove('focused');
});
