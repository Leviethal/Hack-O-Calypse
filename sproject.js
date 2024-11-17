// Sample Projects Data
const projects = [
  { title: "Machine Learning for Beginners", mentor: "Dr. John Doe", organization: "AI Research Lab", description: "Learn the basics of machine learning algorithms, data preprocessing, and real-world applications." },
  { title: "Web Development with React", mentor: "Prof. Jane Wilson", organization: "Web Innovators", description: "Build modern, dynamic websites using React.js, covering hooks, components, and API integration." },
  { title: "Data Visualization Using Python", mentor: "Dr. Emily Davis", organization: "Data Wizards", description: "Create stunning visualizations using Python libraries like Matplotlib and Seaborn." },
  { title: "IoT for Smart Cities", mentor: "Dr. Sarah Parker", organization: "Tech for Cities", description: "Develop IoT solutions for smart city management, including sensors and data integration." },
  { title: "Blockchain Basics", mentor: "Dr. Alex Green", organization: "Blockchain Hub", description: "Understand the core principles of blockchain technology and its real-world applications." },
  { title: "Cloud Computing Essentials", mentor: "Dr. Lisa Adams", organization: "Cloud Solutions", description: "Learn the basics of cloud computing, including AWS and Azure platforms." },
  { title: "Cybersecurity Fundamentals", mentor: "Dr. James Miller", organization: "SecureTech", description: "Dive into network security, ethical hacking, and best practices in cybersecurity." },
  { title: "Mobile App Development", mentor: "Dr. Eva Carter", organization: "App Masters", description: "Build Android and iOS mobile apps using Flutter or native development." },
  { title: "Game Development with Unity", mentor: "Dr. Kelly Brown", organization: "Game Studio", description: "Learn the fundamentals of game development, including physics and asset management in Unity." },
  { title: "Big Data Analytics", mentor: "Dr. Chris Evans", organization: "Data Insights", description: "Analyze large datasets using tools like Hadoop and Spark for meaningful insights." },
  { title: "Robotics and Automation", mentor: "Dr. Anna White", organization: "Robotics Lab", description: "Design and develop robotics systems for industrial applications." },
  { title: "Artificial Intelligence Applications", mentor: "Dr. Patrick Gray", organization: "AI Academy", description: "Explore advanced AI techniques for real-world problem-solving." },
  { title: "Environmental Data Analysis", mentor: "Dr. Susan Harris", organization: "EcoTech", description: "Analyze environmental data to understand climate trends and solutions." },
  { title: "HealthTech Innovations", mentor: "Dr. George Scott", organization: "HealthTech Solutions", description: "Work on innovative technologies to improve healthcare solutions." },
  { title: "Energy Optimization Systems", mentor: "Dr. Rachel Young", organization: "Energy Innovators", description: "Develop systems for energy efficiency and optimization." }
];

let currentPage = 1;
let itemsPerPage = 5;

// Function to Render Projects
function renderProjects() {
  const projectList = document.getElementById("projects-list");
  projectList.innerHTML = ""; // Clear current content

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedProjects = projects.slice(start, end);

  paginatedProjects.forEach(project => {
    const projectCard = `
      <div class="project-card">
        <h3>${project.title}</h3>
        <p><strong>Mentor:</strong> ${project.mentor}</p>
        <p><strong>Organization:</strong> ${project.organization}</p>
        <p class="description">${project.description}</p>
        <div class="button-container">
          <button>View Project Details</button>
          <button class="apply-button">Apply</button>
        </div>
      </div>
    `;
    projectList.innerHTML += projectCard;
  });

  // Update Pagination Info
  const pageInfo = document.getElementById("page-info");
  pageInfo.textContent = `${start + 1} – ${Math.min(end, projects.length)} of ${projects.length}`;

  // Enable/Disable Buttons
  document.getElementById("prev-btn").disabled = currentPage === 1;
  document.getElementById("next-btn").disabled = end >= projects.length;
}

// Function to Handle Next Page with Delay
function nextPage() {
  if (currentPage * itemsPerPage < projects.length) {
    setTimeout(() => {
      currentPage++;
      renderProjects();
    }, 500); // 500ms delay
  }
}

// Function to Handle Previous Page with Delay
function prevPage() {
  if (currentPage > 1) {
    setTimeout(() => {
      currentPage--;
      renderProjects();
    }, 500); // 500ms delay
  }
}

// Function to Update Items Per Page
function updateProjects() {
  const itemsSelect = document.getElementById("items-per-page");
  itemsPerPage = parseInt(itemsSelect.value);
  currentPage = 1; // Reset to the first page
  renderProjects();
}

// Initial Render
renderProjects();
