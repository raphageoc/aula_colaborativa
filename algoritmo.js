window.onload = function() {


  //1 - Mapa centrado em Curitiba
	var map = L.map("meumapa", {
		center: [-25.47, -49.27],
		zoom: 12,
		zoomSnap: 0.5,
		zoomDelta: 0.5,
		minZoom: 4.5,
		maxZoom: 18
	});

  //2 - Camadas base

	var osmColorido = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");

	//3 - Adicionando a base
	var basemap4 = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(map);

	//4 - Adicionando o WMS
	var wms4 = L.tileLayer.wms('http://www.idea.ufpr.br/geoserver/geonode/wms', {
	layers:'geonode:ocupacao_irregular',
	transparent: 'true',
	format: 'image/png'
}).addTo(map);

	// Teste de mini mapa
	//Adicionando um mini mapa
	var CartoDB_Positron_2 = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
 	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
 	subdomains: 'abcd',
 	maxZoom: 19
 });
	var miniMap = new L.Control.MiniMap(CartoDB_Positron_2).addTo(map);

	//5 - Criando a classe dos símbolos personalizados
	var Simbolo = L.Icon.extend ({
		options: {
			iconSize: [20, 20],
			iconAnchor: [10, 10],
			popupAnchor: [0, -10]
	}
	});

	//5 - Armazenando as imagens svg em um vetor
	var simbolo = [];
	for(var i=0; i<=174; i++) {
		simbolo[i] = new Simbolo({iconUrl: "dados/simbolos/" + i + ".svg"});
	}

	//5 - Adicionando o geoJSON
	L.geoJSON(geoj4, {
		pointToLayer: function(feicao, posicao) {
			return L.marker(posicao, {icon: simbolo[85]});
		}
	}).addTo(map);

	//6 - Popup com as coordenadas no click do usuario
	map.on("click", function(evento) {
			var popup = L.popup()
			.setLatLng(evento.latlng)
			.setContent("<b>Você clicou em: </b><br />" + evento.latlng)
			.openOn(map);
	});
}
