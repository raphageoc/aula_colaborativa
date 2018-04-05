window.onload = function() {


  //1 - Mapa centrado em Curitiba
	var map = L.map("meumapa", {
		center: [-25.45, -49.25],
		zoom: 12,
		zoomSnap: 0.5,
		zoomDelta: 0.5,
		minZoom: 4.5,
		maxZoom: 18
	});



  //2 - Camadas base
	var basemap12 = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	//var osmColorido = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");

//adicionando arquivo wms
	var wms12 = L.tileLayer.wms('http://www.idea.ufpr.br/geoserver/geonode/wms',
	{layers: 'geonode:rrfsa_ferrovias',
transparent: 'true',
format: 'image/png'
}).addTo(map);


var estiloLinhaePoligono12 = {
	color: "#8856a7",
	fillColor: "#8856a7",
	weight: 1,
	opacity: 1,
	fillOpacity: 0.5
};

L.geoJSON(geoj12, {
style: estiloLinhaePoligono12
}).addTo(map);

//criando símbolo
var Simbolo = L.Icon.extend({
	options: {
	iconSize: [30, 30],
	iconAnchor: [15, 15],
	popupAnchor: [0, -15]
	}
	});

		var simbolo = [];
		for(var i=0; i<=174; i++) {
		simbolo[i] = new Simbolo({iconUrl: "dados/simbolos/" + i + ".svg"});
	}

//evento que mostra a localização, porém ainda não mostrou
 mapa.on("locationfound", function(evento) {
    L.marker(evento.latlng, {icon: simbolo[12]}).addTo(map);
    L.circle(evento.latlng, evento.accuracy).addTo(map);
    });

 L.marker([-25.5, -49.25], {icon: simbolo[139]}).addTo(map).bindPopup("minha localização!");
}
