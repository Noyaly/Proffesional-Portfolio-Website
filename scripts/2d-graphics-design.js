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
  p.innerHTML = 'For my recent programming assignment, I tackled a project that involved a combination of HTML, CSS, and JavaScript. Throughout this endeavor, I experienced significant growth in my HTML and CSS skills, as well as acquiring a deeper understanding of the JavaScript language. I learned how to manipulate the Document Object Model (DOM) and efficiently write to a JSON file. The project also made use of Flask to handle the webpages and JavaScript, providing a comprehensive experience in web development and interactive elements.';
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
  h1.innerHTML = 'College Web Develop Project';
  a = document.createElement("a");
  a.innerHTML = 'https://hot-beans-web-peach.vercel.app/';
  a.setAttribute('href', 'https://hot-beans-web-peach.vercel.app/');
  a.setAttribute('target', '_blank');
  a.setAttribute('rel', 'noreferrer noopener');  
  a.setAttribute('class', 'projec-a-tag');  
  p = document.createElement("p");
  p.innerHTML = "My first HTML project was an exciting endeavor, as I created a web developer recruitment website from scratch. This hands-on experience allowed me to dive headfirst into HTML and CSS, making strides in my coding abilities. Although I didn't use JavaScript in this particular project, I recognized it as a foundation to build upon. While I acknowledge that this early effort may not be my finest work, it served as a stepping stone, paving the way for significant progress in my subsequent projects. Each subsequent endeavor has demonstrated marked improvement and a promising trajectory, showcasing my commitment to continuous growth and development.";
  img = document.createElement("img");
  img.setAttribute('src', '/images/college-assignement-images/home-page-image.png');
  img.setAttribute('class', 'projec-img-tag');
  img2 = document.createElement("img");
  img2.setAttribute('src', '/images/college-assignement-images/meet-the-team.png');
  img2.setAttribute('class', 'projec-img-tag');
  img3 = document.createElement("img");
  img3.setAttribute('src', '/images/college-assignement-images/job-roles-page.png');
  img3.setAttribute('class', 'projec-img-tag');
  img4 = document.createElement("img");
  img4.setAttribute('src', '/images/college-assignement-images/contact-page.png');
  img4.setAttribute('class', 'projec-img-tag');
  document.getElementById("project-content").append(h1,a,p,img,img2,img3,img4);
}