var inputsearch = document.getElementById("collection-search-input");
var collectionsContainer = document.querySelector(".collections-container");
var allCollections = collectionsContainer.querySelectorAll("div");

inputsearch.addEventListener("keyup", function () {
  var enteredText = inputsearch.value;
  for (i = 0; i < allCollections.length; i++) {
    var itemName = allCollections[i].textContent.toUpperCase();
    if (itemName.indexOf(enteredText.toUpperCase()) < 0) {
      allCollections[i].style.display = "none";
    } else {
      allCollections[i].style.display = "block";
    }
  }
});