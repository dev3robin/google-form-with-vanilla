const btn = document.getElementById('menu-btn');
const menuContent = document.querySelector('.menu-content');
btn.addEventListener('click', function(event) {
      event.stopPropagation();
      menuContent.style.display = 'block';
});
    document.addEventListener('click', function(event) {
        if (!menuContent.contains(event.target) && event.target !== btn) {
            menuContent.style.display = 'none';
        }
    });

  