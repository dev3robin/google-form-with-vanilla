function setFocus(element) {
      const previouslyFocusedElement = document.querySelector('.focusIndicator');
      if (previouslyFocusedElement) {
            handleBlur(previouslyFocusedElement);
      }
      document.querySelectorAll('.focusable').forEach(el => el.classList.remove('focusIndicator'));
      element.classList.add('focusIndicator');
      handleFocus(element);

      const index = [...document.querySelectorAll('.focusable')].indexOf(element);
      saveFocusedDivIndex(index);
}

function saveFocusedDivIndex(index) {
      localStorage.setItem('focusedDivIndex', index);
}

function loadMainDivs() {
      const focusedDivIndex = localStorage.getItem('focusedDivIndex');
      if (focusedDivIndex !== null) {
            const mainDivs = document.querySelectorAll('.focusable');
            const previouslyFocusedElement = document.querySelector('.focusable');
            if (previouslyFocusedElement) {
                  handleBlur(previouslyFocusedElement);
            }

            if (mainDivs[focusedDivIndex]) {
                  setFocus(mainDivs[focusedDivIndex]);
            }
      }
      reapplySavedStyles();
}

document.addEventListener('DOMContentLoaded', loadMainDivs);
  
function handleFocus(element) {
      const divId=element.getAttribute('data-unique-id');
      const btnText=localStorage.getItem('lastBtnContent_' + divId)
      const contentData2=focusedScreenData[btnText]
      const ints=element.querySelectorAll('.blur');
      if(ints){
            ints.forEach(function(int){
                  int.style.display='flex';
            })
      }
      const focusedScreen=element.querySelector('.focusedScreen');
      if(contentData2){
            focusedScreen.innerHTML=contentData2.html 
            const existingStyles = Array.from(document.head.getElementsByTagName('style'));
            let styleExists = existingStyles.some(styleElement => styleElement.innerHTML === contentData2.css);

            if (!styleExists) {
                  const style = document.createElement('style');
                  style.innerHTML = contentData2.css;
                  document.head.appendChild(style);
            }
      }
  }
  
function handleBlur(element) {
      const divId = element.getAttribute('data-unique-id');
      const btnText=localStorage.getItem('lastBtnContent_' + divId)
      const ints=element.querySelectorAll('.blur');
      const contentData=unfocusedDivData[btnText]
      
      if(ints){
            ints.forEach(function(int){
                  int.style.display='none';
            })
      }
      const focusedScreen=element.querySelector('.focusedScreen');
      if(contentData){
            focusedScreen.innerHTML=contentData.html 

            const existingStyles = Array.from(document.head.getElementsByTagName('style'));
            let styleExists = existingStyles.some(styleElement => styleElement.innerHTML === contentData.css);

            if (!styleExists) {
                  const style = document.createElement('style');
                  style.innerHTML = contentData.css;
                  document.head.appendChild(style);
            }
      }
      
      
}

function saveStyleToLocalStorage(divId, cssContent) {
      const savedStyles = JSON.parse(localStorage.getItem('savedStyles') || '{}');
      savedStyles[divId] = cssContent;
      localStorage.setItem('savedStyles', JSON.stringify(savedStyles));
}

function reapplySavedStyles() {
      const savedStyles = JSON.parse(localStorage.getItem('savedStyles') || '{}');
      for (const divId in savedStyles) {
            const cssContent = savedStyles[divId];
            const existingStyles = Array.from(document.head.getElementsByTagName('style'));
            let styleExists = existingStyles.some(styleElement => styleElement.innerHTML === cssContent);

            if (!styleExists) {
                  const style = document.createElement('style');
                  style.innerHTML = cssContent;
                  document.head.appendChild(style);
            }
      }
}
