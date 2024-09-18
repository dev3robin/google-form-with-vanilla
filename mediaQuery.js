const mediaQuery = window.matchMedia('(max-width: 950px)');

function handleMediaQueryChange(e) {
      if (e.matches) {
          tracker.style.display = 'none';
      } else {
          tracker.style.display = 'block';
      }
  }
  mediaQuery.addEventListener('change', handleMediaQueryChange);
  handleMediaQueryChange(mediaQuery);