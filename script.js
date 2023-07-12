document.getElementById("yesButton").addEventListener("click", function() {
  document.getElementById("question").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("image-container").style.display = "block";
  document.getElementById("image").src = "imagem_sim.png";
  document.getElementById("buttons2").style.display = "block";
});

document.getElementById("noButton").addEventListener("click", function() {
  document.getElementById("question").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("image-container").style.display = "block";
  document.getElementById("image").src = "imagem_nao.png";
});