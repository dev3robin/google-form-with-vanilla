// dropbtn1 functionality
function initializeDropdown() {
    const dropdownBtn1 = document.getElementById('dropdownBtn1');
    const dropdownContent1 = document.getElementById('dropdownContent1');
    const numDrop1 = document.getElementById('numDrop1');

    dropdownContent1.style.display = dropdownContent1.style.display === 'flex' ? 'none' : 'flex';
    dropdownContent1.addEventListener('click',function(event){
        buttonValue=event.target.value;
        dropdownBtn1.innerText=buttonValue;
        numDrop1.innerText=buttonValue;
        var arrowSpan = document.createElement('span');
        arrowSpan.innerText = ' ▼';
        dropdownBtn1.appendChild(arrowSpan);
        dropdownContent1.style.display = "none";
        var buttons = dropdownContent1.getElementsByTagName("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("selected1");
        }
        event.target.classList.add("selected1");
    });
    document.addEventListener('click', function(event) {
        const target = event.target;
        if (!dropdownContent1.contains(target) && target !== dropdownBtn1) {
            dropdownContent1.style.display = 'none';
        }
    });
}
//dropbtn 2 functionality
document.addEventListener('DOMContentLoaded', function() {
    var dropdownBtn = document.getElementById('dropdownBtn2');
    var dropdownContent = document.getElementById('dropdownContent2');

    dropdownBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdownContent.style.display = dropdownContent.style.display === 'flex' ? 'none' : 'flex';
        
        if (dropdownContent.style.display === 'flex') {
            var selectedButton = dropdownContent.querySelector(".selected");
                if (selectedButton) {
                var value = parseInt(selectedButton.value, 10);
                if (!isNaN(value) && value >= 2 && value <= 10) {
                    var translateY = (value - 1) * -48;
                    dropdownContent.style.transform = 'translateY(' + translateY + 'px)';
                    
                }
            }
        }
    });
    dropdownContent.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    document.addEventListener('click', function() {
        dropdownContent.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var dropdownButtons = document.querySelectorAll(".num-dropdown-content-2 button");
    dropdownButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            var selectedValue = event.target.value;
            var btn = document.getElementById('dropdownBtn2');
            btn.innerText = selectedValue;
            var numbtn=document.querySelector('.num-drop-2');
            numbtn.innerText=selectedValue;
            var arrowSpan = document.createElement('span');
            arrowSpan.innerText = ' ▼';
            btn.appendChild(arrowSpan);

            var dropdownContent = document.getElementById("dropdownContent2");
            var buttons = dropdownContent.getElementsByTagName("button");
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove("selected");
            }
            event.target.classList.add("selected");
            // Hide dropdown content after selecting a number
            dropdownContent.style.display = "none";
        });
    });
});

