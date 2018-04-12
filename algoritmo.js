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

	var Simbolo = L.Icon.extend({
    options: {
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
    }
    });

  var simbolo = [];

  for(var i=0;i<=174;i++){
    simbolo[i] = new Simbolo({iconUrl: "Plugins/dados/simbolos/"+i+".svg"});
  }

  //2 - Camadas base

	//var osmColorido = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

	// //Mapbox
	var basemap5 = L.tileLayer(
		'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
		{
			id:"mapbox.outdoors",
			accessToken: "pk.eyJ1IjoiamFxdWVsaW5lcGlzZXR0YSIsImEiOiJjamYycmIxa3AwMXUzMnJvN2pjbTJpOWp5In0.4h6LRhENxZViHfwoaFVZjQ"
		}
	).addTo(map);

	// //Adicionar camada WMS ao mapa
	var wms5 = L.tileLayer.wms("http://www.idea.ufpr.br/geoserver/geonode/wms",
		{
			layers: "geonode:terminal_de_transporte",
			transparent: "true",
			format: "image/png"
		}).addTo(map);


	//adicionando o GEOJson
	L.geoJSON(geoj5, {
		pointToLayer: function(feicao, posicao){
	return L.marker(posicao, {icon: simbolo[149]});
    },
  onEachFeature: function (feicao, camada){
    camada.bindTooltip(feicao.properties.NOME)
  }
}).addTo(map);

// Specify divisions every 10 degrees
L.graticule({ interval: 0.1 }).addTo(map);
// Specify bold red lines instead of thin grey lines
L.graticule({
    style: {
        color: '#f00',
        weight: 1
    }
}).addTo(map);

}
