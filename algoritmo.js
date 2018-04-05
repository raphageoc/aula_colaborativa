window.onload = function() {


  //1 - Mapa centrado em Curitiba
	var map = L.map("meumapa", {
		center: [-25.45, -49.27],
		zoom: 12,
		zoomSnap: 0.5,
		zoomDelta: 0.5,
		minZoom: 4.5,
		maxZoom: 18
	});

  //2 - Camadas base

	//var osmColorido = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

	var basemap11 = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
}).addTo(map);

	var wms11 = L.tileLayer.wms("http://www.idea.ufpr.br/geoserver/geonode/wms", {
   layers: 'geonode:escola_municipal_1',
   transparent: 'true',
   format: 'image/png'
 }).addTo(map);

var geoj11 = L.geoJSON(pracasjardinetes).addTo(map);

// Concluir função
var heat = L.heatLayer([
	[-25.45, -49.25, 10.8], // lat, lng, intensity
	[-25.48, -49.58, 0.5]
], {radius: 100}).addTo(map);

}
