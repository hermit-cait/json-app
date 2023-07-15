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
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.title;
  myHeader.appendChild(myH1);
}

function populateProjects(obj) {

  const section = document.querySelector("section");
  const projects = obj.projects;

  for (const project of projects) {
  
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const img = document.createElement("img");
    myPara1.className = "tech";
    myPara2.className = "description";

    myH2.textContent = project.name;
    myPara1.textContent = `Tech used: ${project.tech}`;
    myPara2.textContent = `Description: ${project.description}`;

    var image = new Image();
    image.src = project.image;

    myArticle.appendChild(myH2);
    myArticle.appendChild(image);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    
    section.appendChild(myArticle);
  }
}

populate()