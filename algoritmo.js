window.onload = function() {


  //1 - Mapa centrado em Curitiba
	var map = L.map("meumapa", {
		measureControl:true,
		center: [-25.45, -49.25],
		zoom: 15,
		zoomSnap: 0.5,
		zoomDelta: 0.5,
		minZoom: 0,
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


	//First, specify your Mapbox API access token
	L.MakiMarkers.accessToken = "pk.eyJ1IjoibHVjYXNiaXNjYXJvIiwiYSI6ImNqZjJyY2NiNDAwcTgzM2x0czlpbnA0cTkifQ.MvRGPuxzJSBW_wH_MbeY0g";

	var icon = L.MakiMarkers.icon({icon: "park", color: "#40b64a", size: "m"});

	// Criar classe dos simbolos
	var Simbolo = L.Icon.extend({
	options: {
	iconSize: [30, 30],
	iconAnchor: [25, 25],
	popupAnchor: [0, -30]
	}
	});

	//Adicionando símbolos
	var simbolo = [];

	for(var i=0; i<=175; i++){
		simbolo[i] = new Simbolo({iconUrl: "dados/simbolos/"+ i +".svg"});
	}

	//Adicionando o arquivo GeoJSON
	var geoj9 = L.geoJSON(geoj, {
		pointToLayer: function(feicao,posicao) {
			return L.marker(posicao, {icon: icon});
		}
	}).addTo(map);

	//Controle de Camadas
	var basecarto = {
		"OpenStreetMap": osmColorido,
		"OSM Black and White": basemap9,
		"Esri De Lorme": basemap1,
		"Mapbox Comic": basemap2,
		"Mapbox Dark": basemap6,
		"Mapbox Street": basemap8,
		"Mapbox Outdoors": basemap5,
		"Mapbox High Contrast": basemap7,
		"Esri World Imagery": basemap10,
		"OSM Hot": basemap11,
		"OSM De": basemap12,
		"Carto DB Positron": basemap4,
		"Mapbox Street Satellite": basemap14,
	  "Open Topo Map": basemap15
	};

	var feicoes = {
		"Ciclovias WMS": wms9,
	  "Altimetria WMS": wms1,
		"Hospitais WMS": wms2,
		"Lotes WMS": wms6,
		"Academias ao ar livre WMS": wms8,
		"Terminais de Transporte WMS": wms5,
		"Creche/Jardinete WMS": wms7,
		"Hidrografia WMS": wms10,
		"Escola Municipal WMS": wms11,
		"Ferrovias WMS": wms12,
		"Ocupações Irregulares WMS": wms4,
		"CAPs (Centro de Atenção Psicosocial) WMS": wms15,
		"academias JSON": geoj9
		"Divisas/Regionais JSON": geoj6,
		"Cemitérios JSON": geoj2,
		"Altimetria JSON": geojson1,
		"Terminais de Transpote JSON": geoj8,
		"Ruas da Cidadania JSON": geoj5,
		"Ciclovias JSON": geo7,
		"Hidrografia Polígono JSON": geojson10,
		"Praças e Jardinetes JSON": geoj11,
		"Eixos de Rua JSON": geoj12,
		"Escolas Municipais JSON": geoj4,
		"Divisas de Bairro JSON": geo14,
		"Unidades de Saúde JSON": geo15
	};

	//Adicionar objetos ao controle de camadas
	L.control.layers(basecarto, feicoes).addTo(map);

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
});
t = L.map('dist', { measureControl:true });

}
