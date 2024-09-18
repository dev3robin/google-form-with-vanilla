const button=document.getElementById('res-hidden-button');
const hiddenDiv=document.querySelector('.responses-hidden');
button.addEventListener('click',function(){
    if (hiddenDiv.style.display === 'none' || hiddenDiv.style.display === '') {
        hiddenDiv.style.display = 'block';
    } else {
        hiddenDiv.style.display = 'none';
    }
});


const button1=document.getElementById('presentation-button');
const hiddenDiv1=document.querySelector('.presentation-hidden');
button1.addEventListener('click',function(){
    if (hiddenDiv1.style.display === 'none' || hiddenDiv1.style.display === '') {
        hiddenDiv1.style.display = 'block';
    } else {
        hiddenDiv1.style.display = 'none';
    }
});

const button2=document.getElementById('from-defaults-button');
const hiddenDiv2=document.querySelector('.form-defaults-hidden');
button2.addEventListener('click',function(){
    if (hiddenDiv2.style.display === 'none' || hiddenDiv2.style.display === '') {
        hiddenDiv2.style.display = 'block';
    } else {
        hiddenDiv2.style.display = 'none';
    }
});

const button3=document.getElementById('questions-defaults-button');
const hiddenDiv3=document.querySelector('.questions-defaults-hidden');
button3.addEventListener('click',function(){
    if (hiddenDiv3.style.display === 'none' || hiddenDiv3.style.display === '') {
        hiddenDiv3.style.display = 'block';
    } else {
        hiddenDiv3.style.display = 'none';
    }
});