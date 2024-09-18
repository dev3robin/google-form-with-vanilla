document.addEventListener('DOMContentLoaded', function() {
    const menuButtonContainers = document.querySelectorAll('.tracker-button-container');

    menuButtonContainers.forEach(container => {
        container.addEventListener('mouseenter', function() {
            const hoverText = this.querySelector('.tracker-hidden-text');
            const containerRect = this.getBoundingClientRect();
            const hoverTextRect = hoverText.getBoundingClientRect();

            if (containerRect.right + hoverTextRect.width > window.innerWidth) {
                var overflowAmount = containerRect.right + hoverTextRect.width - window.innerWidth;
                hoverText.style.left = `calc(100% - ${overflowAmount}px)`;
                hoverText.style.right = 'auto';
            } else {
                hoverText.style.left = `calc(100% + 20px)`;
                hoverText.style.right = 'auto';
            }
        });

        container.addEventListener('mouseleave', function() {
            const hoverText = this.querySelector('.tracker-hidden-text');
            hoverText.style.left = '100%';
            hoverText.style.right = 'auto';
        });
    });
});