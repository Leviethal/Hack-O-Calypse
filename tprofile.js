// JavaScript to handle sidebar hover effect
const sidebar = document.getElementById('sidebar');

// When mouse enters the left side of the screen
document.body.addEventListener('mousemove', function(event) {
    if (event.clientX < 50) {
        sidebar.style.transform = 'translateX(0)';
    } else {
        sidebar.style.transform = 'translateX(-100%)';
    }
});