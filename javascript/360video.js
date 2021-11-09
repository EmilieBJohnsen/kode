// javascript til 360 graders 
// Henter modalen
var modal = document.getElementById("myModal");

// Henter knappen til modalen
var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];// Luk knappen

btn.onclick = function() {// Når man trykker på knappen, åbner modalen
  modal.style.display = "block";
}
span.onclick = function() {// Når man trykker på krydset, lukker modalen
  modal.style.display = "none";
}

// Når man klikker udenfor modalen, lukker den
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


pannellum.viewer('panorama',{
  "type":"equirectangular",
  "panorama": "images/360spisesal.JPG",
  });
  