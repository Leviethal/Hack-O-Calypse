// Sample Projects Data
const projects = [
    {
      title: "Machine Learning for Climate Change",
      description: "A project focused on using ML to predict climate patterns.",
      requirements: "Python, Data Analysis",
      deadline: "2024-05-15",
      applications: [
        { name: "Alice Johnson", email: "alice@example.com", status: "Pending" },
        { name: "Bob Smith", email: "bob@example.com", status: "Pending" },
      ],
      mentees: [], // New mentees list
    },
  ];
  
  // Function to Render Projects
  function renderProjects() {
    const projectsList = document.getElementById("projects-list");
    projectsList.innerHTML = ""; // Clear the list
  
    projects.forEach((project, index) => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");
  
      projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p><strong>Description:</strong> ${project.description}</p>
        <p><strong>Requirements:</strong> ${project.requirements}</p>
        <p><strong>Deadline:</strong> ${project.deadline}</p>
        <p><strong>Applications:</strong> ${project.applications.length}</p>
        <p><strong>Mentees:</strong> ${project.mentees.length}</p>
        <button onclick="viewApplications(${index})">Manage Applications</button>
      `;
  
      projectsList.appendChild(projectCard);
    });
  }
  
  // Function to View Applications
  function viewApplications(projectIndex) {
    const project = projects[projectIndex];
    const applicationsSection = document.getElementById("applications-section");
  
    applicationsSection.innerHTML = `
      <h2>Applications for ${project.title}</h2>
      <div class="applications-list">
        ${project.applications
          .map(
            (app) => `
          <div class="application-card">
            <p><strong>Name:</strong> ${app.name}</p>
            <p><strong>Email:</strong> ${app.email}</p>
            <div class="manage-buttons">
              <button class="accept-btn" onclick="acceptApplication(${projectIndex}, '${app.email}')">Accept</button>
              <button class="decline-btn" onclick="declineApplication(${projectIndex}, '${app.email}')">Decline</button>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }
  
  // Accept Application
  function acceptApplication(projectIndex, email) {
    const project = projects[projectIndex];
    const applicationIndex = project.applications.findIndex((app) => app.email === email);
  
    if (applicationIndex !== -1) {
      // Move application to mentees list
      const acceptedApplication = project.applications.splice(applicationIndex, 1)[0];
      project.mentees.push({ ...acceptedApplication, status: "Accepted" });
  
      alert(`${acceptedApplication.name} has been added as a mentee.`);
      viewApplications(projectIndex); // Refresh the applications list
      renderProjects(); // Refresh the projects list to update mentees count
    }
  }
  
  // Decline Application
  function declineApplication(projectIndex, email) {
    const project = projects[projectIndex];
    const applicationIndex = project.applications.findIndex((app) => app.email === email);
  
    if (applicationIndex !== -1) {
      // Remove application from the list
      const declinedApplication = project.applications.splice(applicationIndex, 1)[0];
      alert(`${declinedApplication.name}'s application has been declined.`);
      viewApplications(projectIndex); // Refresh the applications list
      renderProjects(); // Refresh the projects list
    }
  }
  
  // Handle New Project Creation
  document.getElementById("createProjectForm").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const requirements = document.getElementById("requirements").value;
    const deadline = document.getElementById("deadline").value;
  
    projects.push({ title, description, requirements, deadline, applications: [], mentees: [] });
    renderProjects();
    e.target.reset(); // Clear the form
  });
  
  // Initial Render
  renderProjects();