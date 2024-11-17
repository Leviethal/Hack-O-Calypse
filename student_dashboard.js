// Updated Recent Events with General Images
const recentEvents = [
    {
      title: "AI Workshop",
      description: "A hands-on workshop on AI and ML technologies.",
      image: "https://via.placeholder.com/1200x500?text=AI+Workshop",
    },
    {
      title: "Quantum Computing Seminar",
      description: "Explore the latest trends in quantum computing.",
      image: "https://via.placeholder.com/1200x500?text=Quantum+Seminar",
    },
    {
      title: "Robotics Expo",
      description: "Showcase of the latest robotics technologies and innovations.",
      image: "https://via.placeholder.com/1200x500?text=Robotics+Expo",
    },
  ];
  
  // Initial Slider Logic
  let currentSlide = 0;
  
  // Render Recent Events Slider
  function renderSlider() {
    const slider = document.getElementById("event-slider");
    slider.innerHTML = recentEvents
      .map(
        (event) => `
      <div class="slide">
        <img src="${event.image}" alt="${event.title}">
        <h3>${event.title}</h3>
        <p>${event.description}</p>
      </div>
    `
      )
      .join("");
  }
  
  function showSlide(index) {
    const slider = document.getElementById("event-slider");
    currentSlide = (index + recentEvents.length) % recentEvents.length;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  
  function nextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function prevSlide() {
    showSlide(currentSlide - 1);
  }
  
  // Initialize
  document.addEventListener("DOMContentLoaded", () => {
    renderSlider();
    showSlide(0);
});