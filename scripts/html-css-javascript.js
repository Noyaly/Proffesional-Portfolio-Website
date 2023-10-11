function showHideText(){
  var project1 = document.getElementById("project-1");
  
  if (project1.style.display === "flex") {
    project1.style.display = "none";
  } else {
    project1.style.display = "flex";
  }
}