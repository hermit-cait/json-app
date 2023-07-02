async function populate() {
  const requestURL = "./content.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const content = await response.json();

  populateApp(content);
}

function populateApp(obj) {
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.title;
  header.appendChild(myH1);
}

populate()

