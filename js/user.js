import { firebaseConfig } from './firebase-config.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase, ref, onValue }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

/* Initialize Firebase */
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

/* =========================
   LOAD SOIL DATA
========================= */
const soilRef = ref(database, "soils");

onValue(soilRef, (snapshot) => {
  const data = snapshot.val();
  const list = document.getElementById("soilList");

  if (!list) return;

  list.innerHTML = "";

  if (data) {
    for (let id in data) {
      list.innerHTML += `
        <div class="card">
          <h4>${data[id].soilType}</h4>
          <p>${data[id].characteristics}</p>
          <p><strong>Suitable Crops:</strong> ${data[id].crops}</p>
        </div>
      `;
    }
  } else {
    list.innerHTML = "<p>No soil data available.</p>";
  }
});

/* =========================
   LOAD DISTRIBUTOR DATA
========================= */
const distRef = ref(database, "distributors");

onValue(distRef, (snapshot) => {
  const data = snapshot.val();
  const list = document.getElementById("distributorList");

  if (!list) return;

  list.innerHTML = "";

  if (data) {
    for (let id in data) {
      list.innerHTML += `
        <div class="card">
          <h4>${data[id].distName}</h4>
          <p><strong>Location:</strong> ${data[id].location}</p>
          <p><strong>Contact:</strong> ${data[id].contact}</p>
        </div>
      `;
    }
  } else {
    list.innerHTML = "<p>No distributor data available.</p>";
  }
});

/* =========================
   LOGOUT FUNCTION
========================= */
window.logout = function () {
  signOut(auth)
    .then(() => {
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Logout failed: " + error.message);
    });
};
