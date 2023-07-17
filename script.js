async function populate() {
  const requestURL = "https://raw.githubusercontent.com/hermit-cait/json-app/main/content.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const projectsText = await response.text();
  const content = JSON.parse(projectsText);

  populateHeader(content);
  populateProjects(content);
}

function populateHeader(obj) {
  const myHeader = document.querySelector("header");
  const pageTitle = document.createElement("h1");
  pageTitle.textContent = obj.title;
  myHeader.appendChild(pageTitle);
}

function populateProjects(obj) {

  const section = document.querySelector("section");
  const projects = obj.projects;

  for (const project of projects) {
  
    const card = document.createElement("article");
    const projectName = document.createElement("h2");
    const tech = document.createElement("p");
    const description = document.createElement("p");
    tech.className = "projectTech";
    description.className = "description";

    projectName.textContent = project.name;
    tech.textContent = `Tech used: ${project.tech}`;
    description.textContent = `Description: ${project.description}`;

    let image = new Image();
    image.src = project.image;

    card.appendChild(projectName);
    card.appendChild(image);
    card.appendChild(tech);
    card.appendChild(description);
    
    section.appendChild(card);
  }
}

populate()
