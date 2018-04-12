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
	    simbolo[i] = new Simbolo({iconUrl: "dados/simbolos/"+i+".svg"});
	  }

  //2 - Camadas base

	var osmColorido = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
	var OpenStreetMap_BlackAndWhite = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})
;

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
// L.geoJSON(geoj8
// 	, {
//   style: function(feicao){
//         cores = "#b15928";
//         return{
//       weight: 0.2,
//       color: "#33a02c",
//       fillColor: cores[feicao.properties.NOME-1],
//       fillOpacity: 0.5
//     }
//   },
//   onEachFeature: function (feicao, camada){
//     camada.bindTooltip(feicao.properties.NOME)
//   }
// }
// ).addTo(map);

//adicionando o GEOJson
    L.geoJSON(geoj8, {
        pointToLayer: function(feicao, posicao){
    return L.marker(posicao, {icon: simbolo[157]});
    },
  onEachFeature: function (feicao, camada){
    camada.bindTooltip(feicao.properties.NOME)
  }
}).addTo(map);
//minimapa

//var minimapa = new L.Control.MiniMap(basemap8).addTo(map);
var osmVisaoGeral = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
L.Control.MiniMap(osmVisaoGeral).addTo(mapa);

}
