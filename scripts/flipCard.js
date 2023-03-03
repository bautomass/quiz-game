document.addEventListener("DOMContentLoaded", function() {

  
  var flipCards = document.querySelectorAll(".flip-card");
  
  flipCards.forEach(function(flipCard) {
    var flipCardInner = flipCard.querySelector(".flip-card-inner");
    flipCard.addEventListener("click", function() {
      flipCardInner.classList.toggle("flipped");
    });
  });
});
