
const loadProjects = (content) => {
  const projectsSection = document.createElement("div");
  projectsSection.id = "projects";

  // projects array
  const projects = [
    {
      name: "Etch-A-Sketch",
      image: "",
      displayLink: "",
      githubLink: "",
    },
    {
      name: "Etch-A-Sketch",
      image: "",
      displayLink: "",
      githubLink: "",
    },
    {
      name: "Etch-A-Sketch",
      image: "",
      displayLink: "",
      githubLink: "",
    },
    {
      name: "Etch-A-Sketch",
      image: "",
      displayLink: "",
      githubLink: "",
    },
    {
      name: "Etch-A-Sketch",
      image: "",
      displayLink: "",
      githubLink: "",
    },
    {
      name: "Etch-A-Sketch",
      image: "",
      displayLink: "",
      githubLink: "",
    },
  ];

  const createItem = (project) => {
    let icons = ["fas fa-desktop", "fas fa-code"];
    let projectDiv = document.createElement("div");
    let projectImageDiv = document.createElement("div");
    let projectDescriptionDiv = document.createElement("div");
    let projectTitle = document.createElement("h1");
    let iconsDiv = document.createElement("div");
    projectTitle.innerText = project.name;
    projectsSection.append(projectDiv);
    projectDiv.append(projectImageDiv);
    projectDiv.append(projectDescriptionDiv);
    projectDescriptionDiv.append(projectTitle);
    projectDescriptionDiv.append(iconsDiv);
    projectDiv.className = "project";
    projectImageDiv.className = "projectFront";
    projectDescriptionDiv.className = "projectBack";
    iconsDiv.className = "icons";

    for (var x = 0; x < icons.length; x++) {
      let anchorLink = document.createElement("a");
      let icon = document.createElement("i");
      anchorLink.href = "";
      icon.className = icons[x];
      anchorLink.append(icon);
      iconsDiv.append(anchorLink);
    }

    projectsSection.append(projectDiv);
    content.append(projectsSection);
  };

  const displayProjects = () => {
    for (var i = 0; i < projects.length; i++) {
      createItem(projects[i]);
    }
  };

  displayProjects();
};

export { loadProjects };
