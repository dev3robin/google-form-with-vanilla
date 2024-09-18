function setupDropdown(dropdown, uniqueId) {
    const button = dropdown.querySelector('.dropdown-button');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    
    // Load saved value using the unique ID
    const savedValue = localStorage.getItem(`selectedDropdownValue_${uniqueId}`);
    if (savedValue && savedValue.trim() !== '') {
        button.innerHTML = savedValue + '<span class="arrow">▼</span>';
    } else {
        const btnContent=localStorage.getItem('lastBtnContent_' + uniqueId)
        button.innerHTML = btnContent + '<span class="arrow">▼</span>';
    }
    button.addEventListener('click', function(event) {
        event.stopPropagation();
        const parentDiv = event.target.closest('.focusable');//qtypeDiv is replaced in place of focusable
        if (parentDiv) {
            setFocus(parentDiv);
        }
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    dropdown.querySelectorAll('.dropdown-content button').forEach(function(item) {
        item.addEventListener('click', function() {
            const newValue = this.innerHTML;
            button.innerHTML = newValue + '<span class="arrow">▼</span>';
            dropdownContent.style.display = 'none';

            localStorage.setItem(`selectedDropdownValue_${uniqueId}`, newValue);
        });
    });

    document.addEventListener('click', function() {
        dropdownContent.style.display = 'none';
    });
}

function setupDropdownsInDiv(div) {
    const uniqueId = div.getAttribute('data-unique-id');
    div.querySelectorAll('.dropdown').forEach(function(dropdown) {
        setupDropdown(dropdown, uniqueId);
    }); 
}

document.querySelectorAll('.focusable').forEach(setupDropdownsInDiv);//qtypeDiv is replace in place of focusable

