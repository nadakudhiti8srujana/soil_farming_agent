function addSoil() {
  const soilType = document.getElementById("soilType").value;
  const characteristics = document.getElementById("characteristics").value;
  const crops = document.getElementById("crops").value;

  if (!soilType || !characteristics || !crops) {
    alert("Fill all fields");
    return;
  }

  let soils = JSON.parse(localStorage.getItem("soils")) || [];

  soils.push({
    soilType: soilType,
    characteristics: characteristics,
    crops: crops
  });

  localStorage.setItem("soils", JSON.stringify(soils));

  alert("Soil added successfully");
}

function addDistributor() {
  const distName = document.getElementById("distName").value;
  const location = document.getElementById("location").value;
  const contact = document.getElementById("contact").value;

  if (!distName || !location || !contact) {
    alert("Fill all fields");
    return;
  }

  let distributors = JSON.parse(localStorage.getItem("distributors")) || [];

  distributors.push({
    distName: distName,
    location: location,
    contact: contact
  });

  localStorage.setItem("distributors", JSON.stringify(distributors));

  alert("Distributor added");
}
