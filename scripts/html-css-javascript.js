function showHideText(){
  var project = document.getElementById("project");
  
  if (project.style.display === "flex") {
    project.style.display = "none";
  } else {
    project.style.display = "flex";
  }
}

function removeTags() {
   document.getElementById("project-content").innerHTML = "";
}

function showHideTextAllProjects(){
  var project = document.getElementById("all-project-text");
  
  if (project.style.display === "flex") {
    project.style.display = "none";
    removeTags();
  } else {
    project.style.display = "flex";
  }
}

function project1Text() {
  showHideTextAllProjects();
  var div = document.getElementById("project-content");
  h1 = document.createElement("h1");
  h1.innerHTML = 'Programming Assignment';
  a = document.createElement("a");
  a.innerHTML = 'https://noyly.pythonanywhere.com/';
  a.setAttribute('href', 'https://noyly.pythonanywhere.com/');
  a.setAttribute('target', '_blank');
  a.setAttribute('rel', 'noreferrer noopener');  
  a.setAttribute('class', 'projec-a-tag');  
  p = document.createElement("p");
  p.innerHTML = 'In my recent programming assignment, I had the exciting opportunity to work with HTML, CSS, and JavaScript. This project proved to be a valuable learning experience, particularly in terms of my HTML and CSS skills, which saw significant improvement. Moreover, I delved into the world of JavaScript, gaining proficiency in manipulating the Document Object Model (DOM) and writing data to a JSON file. This assignment not only broadened my web development skill set but also enriched my understanding of web interactivity and data handling.';
  img = document.createElement("img");
  img.setAttribute('src', '/images/APP-assignement/full-page.png');
  img.setAttribute('class', 'projec-img-tag');
  img2 = document.createElement("img");
  img2.setAttribute('src', '/images/APP-assignement/selected-joke.png');
  img2.setAttribute('class', 'projec-img-tag');
  img3 = document.createElement("img");
  img3.setAttribute('src', '/images/APP-assignement/added-joke.PNG');
  img3.setAttribute('class', 'projec-img-tag');
  img4 = document.createElement("img");
  img4.setAttribute('src', '/images/APP-assignement/deleted-joke.PNG');
  img4.setAttribute('class', 'projec-img-tag');
  document.getElementById("project-content").append(h1,a,p,img,img2,img3,img4);
}

function project2Text() {
  showHideTextAllProjects();
  var div = document.getElementById("project-content");
  h1 = document.createElement("h1");
  h1.innerHTML = 'OMG This is a TITLE';
  p = document.createElement("p");
  p.innerHTML = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH';
  document.getElementById("project-content").append(h1,p);
}