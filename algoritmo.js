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

	var osmColorido = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

  //3 Basemap

	//Mapbox
var basemap8 = L.tileLayer(
'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
{
id:"mapbox.streets",
accessToken: "pk.eyJ1IjoiamFxdWVsaW5lcGlzZXR0YSIsImEiOiJjamYycmIxa3AwMXUzMnJvN2pjbTJpOWp5In0.4h6LRhENxZViHfwoaFVZjQ"
}
).addTo(map);
//adicionando wms
L.tileLayer.wms("http://www.idea.ufpr.br/geoserver/geonode/wms", {
layers: "geonode:academia_ao_ar_livre",
transparent: 'true',
format: "image/png"
}).addTo(map);



//adicionando o shape
L.geoJSON(geoj8
	, {
  style: function(feicao){
        cores = "#b15928";
        return{
      weight: 0.2,
      color: "#33a02c",
      fillColor: cores[feicao.properties.NOME-1],
      fillOpacity: 0.5
    }
  },
  onEachFeature: function (feicao, camada){
    camada.bindTooltip(feicao.properties.NOME)
  }
}
).addTo(map);
}
