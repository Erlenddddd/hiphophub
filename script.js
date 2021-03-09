function click() {
  document.getElementById("links").classList.toggle("linksactive");
  document.getElementById("line1").classList.toggle("line1active");
  document.getElementById("line2").classList.toggle("line2active");
  document.getElementById("line3").classList.toggle("line3active");
}

document.getElementById("burger").addEventListener("click", click);
