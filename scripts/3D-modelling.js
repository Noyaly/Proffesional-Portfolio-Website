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
  h1.innerHTML = 'Desk Project';
  p = document.createElement("p");
  p.innerHTML = 'My first 3D model project was an exciting endeavor, where I crafted a detailed desk with two remarkably large monitors atop it. This undertaking marked the beginning of my 3D modeling journey, and I learned a great deal throughout its creation. The model showcases my initial steps into the world of 3D design and serves as a testament to the valuable lessons and skills I gained from this experience.';
  img = document.createElement("img");
  img.setAttribute('src', '/images/3D-graphics-projects/desk-setup/front-view-desk.jpg');
  img.setAttribute('class', 'projec-img-tag');
  img2 = document.createElement("img");
  img2.setAttribute('src', '/images/3D-graphics-projects/desk-setup/left-view-desk.jpg');
  img2.setAttribute('class', 'projec-img-tag');
  img3 = document.createElement("img");
  img3.setAttribute('src', '/images/3D-graphics-projects/desk-setup/right-view-desk.jpg');
  img3.setAttribute('class', 'projec-img-tag');
  img4 = document.createElement("img");
  img4.setAttribute('src', '/images/3D-graphics-projects/desk-setup/back-view-desk.jpg');
  img4.setAttribute('class', 'projec-img-tag');
  img5 = document.createElement("img");
  img5.setAttribute('src', '/images/3D-graphics-projects/desk-setup/top-view-desk.jpg');
  img5.setAttribute('class', 'projec-img-tag');
  document.getElementById("project-content").append(h1,p,img,img2,img3,img4,img5);
}

function project2Text() {
  showHideTextAllProjects();
  var div = document.getElementById("project-content");
  h1 = document.createElement("h1");
  h1.innerHTML = 'House From Concept Art 01'; 
  p = document.createElement("p");
  p.innerHTML = "One of my early college projects involved 3D modeling a house based on a concept drawing. It was a challenging yet rewarding experience, as I brought the two-dimensional concept to life in a three-dimensional digital space. This work marked the beginnings of my journey into 3D modeling, and it remains a testament to my progress and growth in this creative field.";
  img = document.createElement("img");
  img.setAttribute('src', '/images/3D-graphics-projects/concept-house-01/main-image.jpg');
  img.setAttribute('class', 'projec-img-tag');
  img2 = document.createElement("img");
  img2.setAttribute('src', '/images/3D-graphics-projects/concept-house-01/top-iamge.jpg');
  img2.setAttribute('class', 'projec-img-tag');
  img3 = document.createElement("img");
  img3.setAttribute('src', '/images/3D-graphics-projects/concept-house-01/left-image.jpg');
  img3.setAttribute('class', 'projec-img-tag');
  img4 = document.createElement("img");
  img4.setAttribute('src', '/images/3D-graphics-projects/concept-house-01/front-image.jpg');
  img4.setAttribute('class', 'projec-img-tag');
  document.getElementById("project-content").append(h1,p,img,img2,img3,img4);
}

function project3Text() {
  showHideTextAllProjects();
  var div = document.getElementById("project-content");
  h1 = document.createElement("h1");
  h1.innerHTML = 'House From Concept Art 02'; 
  p = document.createElement("p");
  p.innerHTML = "One of my initial forays into 3D modeling involved translating a concept drawing of a house into a three-dimensional masterpiece. This early project marked my early steps in the world of 3D design, and I'm proud of the progress I've made since then. This house model stands as a testament to my budding talent in the art of 3D modeling.";
  img = document.createElement("img");
  img.setAttribute('src', '/images/3D-graphics-projects/concept-house-02/main-image.jpg');
  img.setAttribute('class', 'projec-img-tag');
  img2 = document.createElement("img");
  img2.setAttribute('src', '/images/3D-graphics-projects/concept-house-02/front-image.jpg');
  img2.setAttribute('class', 'projec-img-tag');
  img3 = document.createElement("img");
  img3.setAttribute('src', '/images/3D-graphics-projects/concept-house-02/side-on-image.jpg');
  img3.setAttribute('class', 'projec-img-tag');
  img4 = document.createElement("img");
  img4.setAttribute('src', '/images/3D-graphics-projects/concept-house-02/left-image.jpg');
  img4.setAttribute('class', 'projec-img-tag');
  document.getElementById("project-content").append(h1,p,img,img2,img3,img4);
}

function project4Text() {
  showHideTextAllProjects();
  var div = document.getElementById("project-content");
  h1 = document.createElement("h1");
  h1.innerHTML = 'Assignement House'; 
  p = document.createElement("p");
  p.innerHTML = "For an assignment, I undertook the challenging task of 3D modeling a building using 3DS Max. This project was a fantastic learning opportunity where I delved into the vast array of tools within the software, honing my skills in adding textures, applying cameras for rendering, and so much more. The result was a detailed and visually stunning model that represented a significant milestone in my journey towards mastering 3D design.";
  img = document.createElement("img");
  img.setAttribute('src', '/images/3D-graphics-projects/assignment-house/Render_of_house.jpg');
  img.setAttribute('class', 'projec-img-tag');
  img2 = document.createElement("img");
  img2.setAttribute('src', '/images/3D-graphics-projects/assignment-house/Render_of_house_front.jpg');
  img2.setAttribute('class', 'projec-img-tag');
  img3 = document.createElement("img");
  img3.setAttribute('src', '/images/3D-graphics-projects/assignment-house/Render_of_house_angled.jpg');
  img3.setAttribute('class', 'projec-img-tag');
  img4 = document.createElement("img");
  img4.setAttribute('src', '/images/3D-graphics-projects/assignment-house/Render_of_house_right_side_angle.jpg');
  img4.setAttribute('class', 'projec-img-tag');
  document.getElementById("project-content").append(h1,p,img,img2,img3,img4);
}