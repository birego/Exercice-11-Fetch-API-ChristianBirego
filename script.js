document
  .getElementById("BtnVoir")
  .addEventListener("click", function () {
    fetch("https://restcountries.com/v3.1/region/africa")
      .then((response) => response.json())
      .then((data) => {
        displayCountries(data);
        console.log(data)
      })
      .catch((error) => {
        console.error("Une erreur s'est produite:", error);
      });
  });

function displayCountries(countries) {
  const countriesList = document.getElementById("countriesList");
  countriesList.innerHTML = "";

  countries.forEach((country) => {
    const countryCard = document.createElement("div");
    countryCard.classList.add("country-card");

    const countryName = document.createElement("h3");
    countryName.textContent = country.name.common;

    const countryFlag = document.createElement("img");
    countryFlag.src = country.flags.svg;
    countryFlag.alt = country.name.common,'Drapeau';
    countryCard.appendChild(countryName);
    countryCard.appendChild(countryFlag);
    countriesList.appendChild(countryCard);
  });
}
