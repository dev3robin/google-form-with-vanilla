document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".form-body");
    const popUpWindow = document.querySelector(".pop-up-window");
    const closeBtn = document.querySelector(".close");
    const cancleBtn = document.querySelector(".c_btn");

    container.addEventListener("click", function (event) {
        const winBtn = event.target.closest(".win-btn");
        if (winBtn) {
            popUpWindow.style.display = 'block';
            popUpWindowFunctionality()
        }
    });

    closeBtn.addEventListener('click', function (event) {
        popUpWindow.style.display = 'none';
    });
    cancleBtn.addEventListener('click', function (event) {
        popUpWindow.style.display = 'none';
    });
});



function  popUpWindowFunctionality() {
    const buttons = document.querySelectorAll(".itemName");
    const indicator = document.querySelector(".indicator");
    const contentDivs = document.querySelectorAll(".content-div > div");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const targetSelector = button.getAttribute("data-target");
            contentDivs.forEach(div => {
                div.classList.remove("active");
            });
            const targetDiv = document.querySelector(targetSelector);
            if (targetDiv) {
                targetDiv.classList.add("active");
            }

            const activeRect = button.getBoundingClientRect();
            const offset = button.offsetLeft;

            indicator.style.width = `calc(${activeRect.width}px - 30px)`;  // Example adjustment using calc
            indicator.style.left = `calc(${offset}px + 15px)`;
            buttons.forEach(btn => btn.classList.remove('activted'));
            button.classList.add('activted');
        });
    });

    // Automatically click the first button on page load after the layout is fully rendered
    window.addEventListener("load", function() {
        if (buttons.length > 0) {
            buttons[0].click();  // Trigger the click event for the first item
        }
    });
};


