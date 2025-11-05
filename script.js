const scriptLeaflet = document.createElement('script');
scriptLeaflet.src = "https://unpkg.com/leaflet/dist/leaflet.js";
document.head.appendChild(scriptLeaflet);

const linkLeaflet = document.createElement('link');
linkLeaflet.rel = "stylesheet";
linkLeaflet.href = "https://unpkg.com/leaflet/dist/leaflet.css";
document.head.appendChild(linkLeaflet);

scriptLeaflet.onload = () => {
  const map = L.map('map').setView([12.6392, -8.0029], 6);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom:19,
    attribution:'© OpenStreetMap'
  }).addTo(map);

  const secteurs = [
    {name:"Agriculture", coords:[12.6392,-8.0029]},
    {name:"Industrie", coords:[13.5,-7.9]},
    {name:"Énergie", coords:[12.9,-7.5]},
    {name:"Santé", coords:[12.7,-8.1]},
    {name:"Éducation", coords:[12.6,-7.8]},
    {name:"Finance", coords:[12.65,-7.95]},
    {name:"Transport", coords:[12.68,-8.05]},
    {name:"Tourisme", coords:[12.7,-7.85]}
  ];

  secteurs.forEach(sec => {
    L.marker(sec.coords).addTo(map).bindPopup(sec.name);
  });
};

document.getElementById('contact-form').addEventListener('submit', (e)=>{
  e.preventDefault();
  alert("Merci pour votre message ! Nous vous recontacterons bientôt.");
  e.target.reset();
});
