const vContainer=document.querySelector('.video-container');
const vClose=document.querySelector('#video-cross');
const Vcontainer = document.querySelector(".form-body");


Vcontainer.addEventListener("click", function (event) {
      const winBtn = event.target.closest(".video-btn");
      if (winBtn) {
            vContainer.style.display = 'block';
      }
  });

  vClose.addEventListener('click', function () {
      vContainer.style.display = 'none';
  });