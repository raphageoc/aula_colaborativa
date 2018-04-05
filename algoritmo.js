window.onload = function() {


  //1 - Mapa centrado em Curitiba
	var map = L.map("meumapa", {
		center: [-25.45, -49.25],
		zoom: 15,
		zoomSnap: 0.5,
		zoomDelta: 0.5,
		minZoom: 4.5,
		maxZoom: 18
	});

  //2 - Camadas base

	var osmColorido = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");

	var basemap9 = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


	var wms9 = L.tileLayer.wms('http://www.idea.ufpr.br/geoserver/geonode/wms',{
		layers:'geonode:ciclovia_oficial',
		transparent: 'true',
		format:'image/png'
	}).addTo(map);


	//Criar classe dos simbolos
	var Simbolo = L.Icon.extend({
	options: {
	iconSize: [40, 40],
	iconAnchor: [25, 25],
	popupAnchor: [0, -30]
	}
	});

	//Adicionando símbolos
	var simbolo = [];

	for(var i=0; i<=174; i++){
		simbolo[i] = new Simbolo({iconUrl: "dados/simbolos/"+ i +".svg"});
	}

	//Adicionando o arquivo GeoJSON
	var geoj9 = L.geoJSON(geoj, {
		pointToLayer: function(feicao,posicao) {
			return L.marker(posicao, {icon:simbolo[82]});
		}
	}).addTo(map);

	//Controle de Camadas
	var basecarto = {
		"OpenStreetMap": osmColorido,
		"Black and White": basemap9
	};

	var feicoes = {
		"Ciclovias": wms9,
		"academias": geoj9
	};

	//Adicionar objetos ao controle de camadas
	L.control.layers(basecarto, feicoes).addTo(map);
}
