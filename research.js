// Optional: Add interactivity for additional scrolling or dynamic content loading
// Example: Highlight active block when scrolling
document.addEventListener('scroll', () => {
    const blocks = document.querySelectorAll('.research-block');
    blocks.forEach(block => {
      const rect = block.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        block.style.borderColor = '#4caf50';
      } else {
        block.style.borderColor = 'transparent';
      }
    });
  });
  