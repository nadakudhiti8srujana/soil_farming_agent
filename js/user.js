window.onload = function () {
  loadSoils();
  loadDistributors();
};

function loadSoils() {
  const soilData = JSON.parse(localStorage.getItem("soils")) || [];
  const container = document.getElementById("soilList");

  container.innerHTML = "";

  if (soilData.length === 0) {
    container.innerHTML = "No soil data added by admin";
    return;
  }

  soilData.forEach(soil => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${soil.soilType}</h3>
      <p>${soil.characteristics}</p>
      <p>${soil.crops}</p>
      <p style="color:green;">Fertilizer: NPK</p>
    `;

    container.appendChild(card);
  });
}

function loadDistributors() {
  const data = JSON.parse(localStorage.getItem("distributors")) || [];
  const container = document.getElementById("distributorList");

  container.innerHTML = "";

  data.forEach(d => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${d.distName}</h3>
      <p>${d.location}</p>
      <p>${d.contact}</p>
    `;

    container.appendChild(card);
  });
}
