
function divDataShow() {
    const buttons = document.querySelectorAll('.DPBTN');
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            showDiv(event);
        });
    });
    function showDiv(event) {
        btnText = event.target.innerText;
        const focusDiv = event.target.closest('.focusable');
        const focusDivId = focusDiv.getAttribute('data-unique-id');
        localStorage.setItem('lastBtnContent_' + focusDivId, btnText);
    }
}
function setupdivdataShow(div){
    div.querySelectorAll('.DPBTN').forEach(function() {
        divDataShow();
    }); 
}
document.addEventListener('DOMContentLoaded', divDataShow);


