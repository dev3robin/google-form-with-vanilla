
function removeDiv() {
      const removeButtons = container.querySelectorAll('.removeButton');
      removeButtons.forEach(button => {
          button.addEventListener('click', handleRemoveClick);
      });
}
function handleRemoveClick(event) {
      event.stopPropagation();
      const element = event.target.closest('.focusable');
      const previousDiv=element.previousElementSibling;
      const uniqueId= element.getAttribute('data-unique-id');
      if (element) {
          element.remove();
          removeAssociatedData(uniqueId);

          setFocus(previousDiv)
          saveDivs();
      }
}
function removeAssociatedData(uniqueId) {
    if (!uniqueId) return;
    localStorage.removeItem('lastBtnContent_' + uniqueId);
    localStorage.removeItem('selectedDropdownValue_' + uniqueId)
}