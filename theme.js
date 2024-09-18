const themeBtn = document.getElementById('theme');
const pallate = document.querySelector('.color-pallate');
const pallateBody= document.querySelector('.color-pallate-body');

themeBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    pallateBody.style.display='block'
    if (pallate.style.display === 'block') {
        pallate.style.display = 'none';
    } else {
        
        pallate.style.display = 'block';
    }
});

document.addEventListener('click', function () {
    pallateBody.style.display='none'
    if (pallate.style.display === 'block') {
        pallate.style.display = 'none';
    }
});

pallate.addEventListener('click', function (event) {
    event.stopPropagation();
});
