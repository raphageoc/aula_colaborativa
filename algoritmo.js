window.onload = function() {


  //1 - Mapa centrado em Curitiba
	var map = L.map("meumapa", {
		measureControl:true,
		center: [-25.45, -49.25],
		zoom: 12,
		zoomSnap: 0.5,
		zoomDelta: 0.5,
		minZoom: 4.5,
		maxZoom: 18
	});

  //2 - Camadas base

	// var osmColorido = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

	//Mapbox
var basemap7 = L.tileLayer(
'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
{
id:"mapbox.dark",
accessToken: "pk.eyJ1IjoiamFxdWVsaW5lcGlzZXR0YSIsImEiOiJjamYycmIxa3AwMXUzMnJvN2pjbTJpOWp5In0.4h6LRhENxZViHfwoaFVZjQ"
}
).addTo(map);

//Adicionar camada WMS ao mapa
// var limite = L.tileLayer.wms("http://localhost:8082/geoserver/wms", {
// layers: "cite:lim_municipio_a",
// transparent: "true",
// format: "image/png"
// }).addTo(mapa);

//adicionando o shape
L.geoJSON(geoj6, {
  style: function(feicao){
		cores = ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"];
        return{
      weight: 0.2,
      color: "#33a02c",
      fillColor: cores[feicao.properties.CD_REGIONA-1],
      fillOpacity: 0.5
    }
  },
  onEachFeature: function (feicao, camada){
    camada.bindTooltip(feicao.properties.NOME)
  }
}).addTo(map);

//Adicionar camada WMS ao mapa
L.tileLayer.wms("http://www.idea.ufpr.br/geoserver/geonode/wms"
, {
layers: "geonode:lotes_201702",
transparent: "true",
format: "image/png"
}).addTo(map);


}
