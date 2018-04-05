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

	//Mapbox
var basemap7 = L.tileLayer(
'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
{
id:"mapbox.high-contrast",
accessToken: "pk.eyJ1IjoiamFxdWVsaW5lcGlzZXR0YSIsImEiOiJjamYycmIxa3AwMXUzMnJvN2pjbTJpOWp5In0.4h6LRhENxZViHfwoaFVZjQ"
}
).addTo(map);


//Adicionar camada WMS ao mapa
L.tileLayer.wms("http://www.idea.ufpr.br/geoserver/geonode/wms"
, {
layers: "geonode:cmei",
transparent: "true",
format: "image/png"
}).addTo(map);

//adicionando o shape geojason ciclovia
L.geoJSON(geojson7, {
  style: function(feicao){
        return{
      weight: 3,
      color: "#FF0000",
      fillOpacity: 0
    }
  },
  onEachFeature: function (feicao, camada){
    camada.bindTooltip(feicao.properties.TIPO)
  }
}).addTo(map);

var estiloLinhaPonto = {
	color: "#00008B",
	fillColor: "#FA8072",
	weight: 2,
	opacity: 50,
	fillOpacity: 0
};
//adicionando o shape
 L.geoJSON(divisadebairros, {
 style: estiloLinhaPonto,
 onEachFeature: function (feicao, camada){
 	camada.bindTooltip(feicao.properties.NOME)
  }
}).addTo(map);

}
