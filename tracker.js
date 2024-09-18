document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const activeIndicator = document.querySelector('.active-indicator');
    const contentContainers = document.querySelectorAll('.content-container');

    function updateIndicator() {
        const activeItem = document.querySelector('.menu-item.active');
        if (activeItem) {
            const offsetLeft = activeItem.offsetLeft;
            const offsetWidth = activeItem.offsetWidth;
            activeIndicator.style.left = `${offsetLeft}px`;
            activeIndicator.style.width = `${offsetWidth}px`;
        }
    }

    function updateContent(targetId) {
        contentContainers.forEach(container => {
            if (container.id === targetId) {
                container.classList.add('active');
            } else {
                container.classList.remove('active');
            }
        });
    }

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const currentActive = document.querySelector('.menu-item.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            item.classList.add('active');
            updateIndicator();
            updateContent(item.getAttribute('data-target'));
        });
    });

    window.addEventListener('resize', updateIndicator);

    updateIndicator();
    updateContent(document.querySelector('.menu-item.active').getAttribute('data-target'));
});
