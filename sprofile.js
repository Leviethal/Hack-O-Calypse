// JavaScript code can be added here for interactivity if needed in the future.
// JavaScript for interactivity

// Hover effect to change the background color of the courses list
const courses = document.querySelectorAll('#course-list li');

courses.forEach(course => {
  course.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = '#e3f9e5'; // Light green shade
  });

  course.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = '#f0f8f7'; // Default background color
  });
});

// Dynamically alert the course name when clicked
courses.forEach(course => {
  course.addEventListener('click', () => {
    alert(`You clicked on: ${course.textContent}`);
  });
});