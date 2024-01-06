const searchInput = document.getElementById("search");
searchInput.value = "";

searchInput.addEventListener("input", function () {
  let searchText = this.value.toLowerCase();
  let countryNames = document.getElementsByClassName("countryName");

  Array.from(countryNames).forEach(function (country) {
    let name = country.textContent.toLowerCase();
    let row = country.parentElement;

    if (name.includes(searchText)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});
