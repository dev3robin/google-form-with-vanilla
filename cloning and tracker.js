
const container = document.getElementById('container');
const tracker = document.getElementById('tracker');
const initialDiv = document.querySelector('.add-section');
// Load existing divs from localStorage
document.addEventListener('DOMContentLoaded', loadDivs);

function loadDivs() {
    const divs = JSON.parse(localStorage.getItem('generatedDivs')) || [];
    divs.forEach(content => {
        const newDiv = createDiv(content);
        container.appendChild(newDiv);
        setupDropdownsInDiv(newDiv);
        setupdivdataShow(newDiv)
    });
    reattachListeners();
}
function saveDivs() {
    const divs = Array.from(container.querySelectorAll('.generatedDiv'));
    const contents = divs.map(div => div.outerHTML);
    localStorage.setItem('generatedDivs', JSON.stringify(contents));
}
function reattachListeners() {
    removeDiv();
    reattachClickListeners();
}
function reattachClickListeners() {
    const allDivs = container.querySelectorAll('.focusable');
    allDivs.forEach(div => {
        div.addEventListener('click', handleDivClick);
    });
}
function handleDivClick(event) {
    const div = event.currentTarget;
    const divTop = div.offsetTop;
    const divHeight = div.offsetHeight;
    tracker.style.top = `${divTop}px`;
    tracker.style.height = `${divHeight}px`;
    setFocus(div)
}
document.addEventListener('DOMContentLoaded', reattachClickListeners);

