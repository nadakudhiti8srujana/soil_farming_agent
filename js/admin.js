import { firebaseConfig } from './firebase-config.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
window.addSoil=function(){
const soilType=document.getElementById("soilType").value;
const characteristics=document.getElementById("characteristics").value;
const crops=document.getElementById("crops").value;
push(ref(database,"soils"),{soilType,characteristics,crops});
alert("Soil Added");
}
window.addDistributor=function(){
const distName=document.getElementById("distName").value;
const location=document.getElementById("location").value;
const contact=document.getElementById("contact").value;
push(ref(database,"distributors"),{distName,location,contact});
alert("Distributor Added");
}