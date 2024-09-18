let divCounter = 2;
const createDivButtons=document.querySelectorAll('#createButton');
createDivButtons.forEach(function(createDivButton){
    createDivButton.addEventListener('click',createNewDiv)
})
function createNewDiv() {
    const content =mainDivData.html
    const newDiv = createDiv(content);
    const focusedScreen=newDiv.querySelector('.focusedScreen');
    const divId=newDiv.getAttribute('data-unique-id');
    const btnText='Multiple choice';
    const contentData=focusedScreenData[btnText]
    focusedScreen.innerHTML=contentData.html;
    localStorage.setItem('lastBtnContent_' + divId, btnText)

    const existingStyles = Array.from(document.head.getElementsByTagName('style'));
    let styleExists = existingStyles.some(styleElement => styleElement.innerHTML === contentData.css);

    if (!styleExists) {
        const style = document.createElement('style');
        style.innerHTML = contentData.css;
        document.head.appendChild(style);
    }

    container.appendChild(newDiv);
    setupDropdownsInDiv(newDiv);
    setupdivdataShow(newDiv)
    saveDivs();
    setFocus(newDiv)
    reattachListeners();
}
function createDiv(content) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    const newDiv = tempDiv.firstElementChild;
    if (newDiv) {
        newDiv.classList.add('generatedDiv');
        newDiv.setAttribute('data-unique-id', divCounter);
        divCounter++;
    }
    return newDiv;
}
