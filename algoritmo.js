//1 - Mapa centrado em Curitiba
var map

window.onload = function() {


    map = L.map("meumapa", {


		measureControl:true,
		center: [-25.45, -49.25],
		zoom: 11,

		zoomSnap: 0.5,
		zoomDelta: 0.5,
		minZoom: 0,
		maxZoom: 18
	});

L.control.betterscale({metric:true, imperial:false}).addTo(map);


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
});


var estiloLinhaePoligono12 = {
	color: "#8856a7",
	fillColor: "#8856a7",
	weight: 1,
	opacity: 1,
	fillOpacity: 0.5
};

var geo12 = L.geoJSON(geoj12, {
style: estiloLinhaePoligono12
});

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
var wms8 = L.tileLayer.wms("http://www.idea.ufpr.br/geoserver/geonode/wms", {
layers: "geonode:academia_ao_ar_livre",
transparent: 'true',
format: "image/png"
});





//adicionando o GEOJson
  var geo8 = L.geoJSON(geoj8, {
        pointToLayer: function(feicao, posicao){
    return L.marker(posicao, {icon: simbolo[20]});
	}});
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



	//Mapbox
	var basemap5 = L.tileLayer(
		'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
		{
			id:"mapbox.outdoors",
			accessToken: "pk.eyJ1IjoiamFxdWVsaW5lcGlzZXR0YSIsImEiOiJjamYycmIxa3AwMXUzMnJvN2pjbTJpOWp5In0.4h6LRhENxZViHfwoaFVZjQ",
			maxZoom: 19

		}
	).addTo(map);

	// //Adicionar camada WMS ao mapa
	var wms5 = L.tileLayer.wms("http://www.idea.ufpr.br/geoserver/geonode/wms",
		{
			layers: "geonode:terminal_de_transporte",
			transparent: "true",
			format: "image/png"
		});


	//adicionando o GEOJson
	var geo5 = L.geoJSON(geoj5, {
		pointToLayer: function(feicao, posicao){
	return L.marker(posicao, {icon: simbolo[149]});
}
});
// var geo4 = L.geoJSON(geoj4, {
// 	pointToLayer: function(feicao, posicao) {
// 		return L.marker(posicao, {icon: simbolo[85]});
// 	}
// }).addTo(map);



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
});

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
	var geo4 = L.geoJSON(geoj4, {
		pointToLayer: function(feicao, posicao) {
			return L.marker(posicao, {icon: simbolo[85]});
		}
	});

	//6 - Popup com as coordenadas no click do usuario
	map.on("click", function(evento) {
			var popup = L.popup()
			.setLatLng(evento.latlng)
			.setContent("<b>Você clicou em: </b><br />" + evento.latlng)
			.openOn(map);
	});


	var basemap11 = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
}).addTo(map);


	var wms11 = L.tileLayer.wms("http://www.idea.ufpr.br/geoserver/geonode/wms", {
   layers: 'geonode:escola_municipal_1',
   transparent: 'true',
   format: 'image/png'
 });


var geo11 = L.geoJSON(pracasjardinetes);
var school = L.geoJSON(escola);



var heatescolas = L.heatLayer([
[-25.5308344996999992,-49.3398821338000033, 10.8],
[-25.5857539621000001,-49.3372959484999996, 10.8],
[-25.4616612320999991,-49.3338170330999972, 10.8],
[-25.5093023008999999,-49.3348538238999978, 10.8],
[-25.3809254487999993,-49.3338780600999982, 10.8],
[-25.4786782135000003,-49.2394360465999981, 10.8],
[-25.3883877075000015,-49.2843035101000027, 10.8],
[-25.4796346856000007,-49.3366126626999986, 10.8],
[-25.4891390380000011,-49.2805612399000026, 10.8],
[-25.4857316930000017,-49.3499865229999983, 10.8],
[-25.4293695596999996,-49.3563005520000004, 10.8],
[-25.5662056632999999,-49.3258114807999988, 10.8],
[-25.5010029009000014,-49.3202201249999987, 10.8],
[-25.4494408884999999,-49.3523841534000027, 10.8],
[-25.4445996679000004,-49.3126483169000025, 10.8],
[-25.5349536292000003,-49.2966181906000003, 10.8],
[-25.4602650785000009,-49.3447517574999992, 10.8],
[-25.4720065851000008,-49.2272616381000034, 10.8],
[-25.4868792362999983,-49.2002804424000004, 10.8],
[-25.4807442681000005,-49.3216464748999996, 10.8],
[-25.5775621495999985,-49.3315989821999992, 10.8],
[-25.4725454404999994,-49.3160882673999978, 10.8],
[-25.4961874817999998,-49.3152828970999977, 10.8],
[-25.4835678138000006,-49.3310401032999977, 10.8],
[-25.5075643599000017,-49.3542624199000031, 10.8],
[-25.4902211749999985,-49.3098966061999988, 10.8],
[-25.4785689192000007,-49.3594792514000034, 10.8],
[-25.5590979265000016,-49.3315060222000028, 10.8],
[-25.4352423431999988,-49.3247820380000022, 10.8],
[-25.4840139086999997,-49.3134876766999994, 10.8],
[-25.3983295548999983,-49.3306650465000018, 10.8],
[-25.4633523396999983,-49.2830274571999993, 10.8],
[-25.4789996929000004,-49.2991854516000032, 10.8],
[-25.3754621092000008,-49.3270903366000013, 10.8],
[-25.4832013442999994,-49.2872323105000021, 10.8],
[-25.4870118943000001,-49.3263482779999975, 10.8],
[-25.4527044286000006,-49.2817133690000020, 10.8],
[-25.5600000746000013,-49.3390824041999991, 10.8],
[-25.5022712704999996,-49.3033331892999982, 10.8],
[-25.4279629438000008,-49.3286248590000014, 10.8],
[-25.5153849822000005,-49.2941647715000002, 10.8],
[-25.4282791438000011,-49.3435664690000024, 10.8],
[-25.4879546390000016,-49.2877108631000027, 10.8],
[-25.4843439660000008,-49.3384053424000015, 10.8],
[-25.4566442640000012,-49.3259313471999974, 10.8],
[-25.5192368927000004,-49.3061032907000012, 10.8],
[-25.6191717618999988,-49.3487807098999980, 10.8],
[-25.4876315536000000,-49.3068023515999982, 10.8],
[-25.4730639705000002,-49.3479759988000026, 10.8],
[-25.4748648843000005,-49.1961325807000023, 10.8],
[-25.4569503282000014,-49.3493472831999966, 10.8],
[-25.5014950374999998,-49.3481808928000021, 10.8],
[-25.4806092124000010,-49.3474824066000011, 10.8],
[-25.3911301211999998,-49.3553324993999993, 10.8],
[-25.4122705481999986,-49.3038783538999965, 10.8],
[-25.4839052758999998,-49.2730525261999972, 10.8],
[-25.4108412966000010,-49.3616497590999970, 10.8],
[-25.5176243388999993,-49.2770694363999979, 10.8],
[-25.5300186706999988,-49.2826909536999977, 10.8],
[-25.4667548707999991,-49.3270935514999991, 10.8],
[-25.5910177326999992,-49.3412683604000009, 10.8],
[-25.4596952680000008,-49.2988986913999980, 10.8],
[-25.4365630457000016,-49.3610721080999966, 10.8],
[-25.4746185804000014,-49.3393255629000009, 10.8],
[-25.4569859622999992,-49.3778640419999988, 10.8],
[-25.4213222192999986,-49.3560316996000026, 10.8],
[-25.5237499873000004,-49.2976703806000032, 10.8],
[-25.3994401837000012,-49.2976814085999990, 10.8],
[-25.4799090578999987,-49.2710220120000031, 10.8],
[-25.5849537076999987,-49.3232899810999967, 10.8],
[-25.4949249571000003,-49.3355527016000011, 10.8],
[-25.4951763482000011,-49.2080951188999975, 10.8],
[-25.5593419701999984,-49.3156161022000035, 10.8],
[-25.3765777001000004,-49.2311581429000000, 10.8],
[-25.3733369475999986,-49.2416074778000024, 10.8],
[-25.5264431533999989,-49.2681559175999979, 10.8],
[-25.4362811248999989,-49.2816698783000007, 10.8],
[-25.5080565867000004,-49.3018491162000032, 10.8],
[-25.4212037572000007,-49.2439297013999990, 10.8],
[-25.4961212924999998,-49.2904367085999979, 10.8],
[-25.4607162008999985,-49.2967715432000020, 10.8],
[-25.4648609842000013,-49.2639581828000033, 10.8],
[-25.5710019320999997,-49.3186616201000021, 10.8],
[-25.4660957024000005,-49.2946626421000005, 10.8],
[-25.5232356755000005,-49.2869992923999973, 10.8],
[-25.4178777125999993,-49.3423595382000002, 10.8],
[-25.5903608672000011,-49.3357394777000025, 10.8],
[-25.5128196884000005,-49.2672794762999970, 10.8],
[-25.3529939523000003,-49.2551362000999973, 10.8],
[-25.3981098371999998,-49.2553535672999985, 10.8],
[-25.4707438633999992,-49.2754078509000024, 10.8],
[-25.4089316282000013,-49.2811383474999971, 10.8],
[-25.4471953122999999,-49.2575218723000035, 10.8],
[-25.4526615179000011,-49.2078953378999984, 10.8],
[-25.4182733431999992,-49.2637700546999966, 10.8],
[-25.4358049549999983,-49.3507962914000018, 10.8],
[-25.4542253484999996,-49.1969013165999982, 10.8],
[-25.4507262151999996,-49.2182127017999989, 10.8],
[-25.5450388241000006,-49.3396286054000015, 10.8],
[-25.5507128646999995,-49.2941988477000024, 10.8],
[-25.5068572238999991,-49.2211277517999974, 10.8],
[-25.5310532740000014,-49.3348483963999982, 10.8],
[-25.5039047701999984,-49.3237038175999984, 10.8],
[-25.5079757964000002,-49.3251149681999976, 10.8],
[-25.4892161122000012,-49.2021897484000021, 10.8],
[-25.5153680919000010,-49.3263213863000018, 10.8],
[-25.5197110008000010,-49.2862427239999974, 10.8],
[-25.4963962118999987,-49.3498616360000000, 10.8],
[-25.5124780593000011,-49.3322483705999986, 10.8],
[-25.4794402742000017,-49.2025795650000006, 10.8],
[-25.4341245276000016,-49.2191408902999967, 10.8],
[-25.3792121823999999,-49.2456494066000019, 10.8],
[-25.3864944882999986,-49.2622582525999988, 10.8],
[-25.5230960493000012,-49.2668458345000033, 10.8],
[-25.5338969276999990,-49.2616517085999988, 10.8],
[-25.5446277809999991,-49.2833310346000033, 10.8],
[-25.5360827231999998,-49.2435054700999970, 10.8],
[-25.3750580304000017,-49.2528582416000020, 10.8],
[-25.3906427323000017,-49.2165968034000016, 10.8],
[-25.5070356009000001,-49.2213764493999975, 10.8],
[-25.3765433881000000,-49.2578880502999965, 10.8],
[-25.5370617365000001,-49.2328871743999983, 10.8],
[-25.3801052885000011,-49.2956350588999967, 10.8],
[-25.5249933358999996,-49.2565234232000009, 10.8],
[-25.4037685905000004,-49.2071896049000017, 10.8],
[-25.3554494983999987,-49.2743595684000013, 10.8],
[-25.4897468979000017,-49.2574752936000024, 10.8],
[-25.4481324732999994,-49.2157831250000015, 10.8],
[-25.4619504668999994,-49.2146689952000003, 10.8],
[-25.4417029732000017,-49.2052765262000023, 10.8],
[-25.4983462836999983,-49.2353060674999981, 10.8],
[-25.5055610281999989,-49.2796540897999975, 10.8],
[-25.5209902072000006,-49.2381761398999984, 10.8],
[-25.3640893401999996,-49.2747422971999995, 10.8],
[-25.5241853278999997,-49.2339173917999986, 10.8],
[-25.3965747746000012,-49.2172841386000002, 10.8],
[-25.3886101840000009,-49.2258515891999977, 10.8],
[-25.4145681410000002,-49.2063505313999983, 10.8],
[-25.4917680896000007,-49.2234708523999984, 10.8],
[-25.5658913663999989,-49.2785556940999996, 10.8],
[-25.5170809554999991,-49.2491092479000017, 10.8],
[-25.3843942534999982,-49.2011199210000001, 10.8],
[-25.5025872727000014,-49.2441666619000031, 10.8],
[-25.4578918843999986,-49.2044528411000002, 10.8],
[-25.3640660850999993,-49.2323943888000031, 10.8],
[-25.4862345246999986,-49.2263515277999986, 10.8],
[-25.4823187836999985,-49.2133058424999987, 10.8],
[-25.4918993436000001,-49.2615286014999967, 10.8],
[-25.3664274759000001,-49.2109795164999966, 10.8],
[-25.3945927629999986,-49.2033678320999996, 10.8],
[-25.5299720633999989,-49.2464423002999965, 10.8],
[-25.5314176734999982,-49.2550975934999968, 10.8],
[-25.3841611323999992,-49.2373712348000012, 10.8],
[-25.3887740207999997,-49.2940510024000034, 10.8],
[-25.4200464074000010,-49.2005282328000035, 10.8],
[-25.4257782472000002,-49.2147839647999987, 10.8],
[-25.5489003618999995,-49.2709508900000017, 10.8],
[-25.3741539516000003,-49.2131329422999997, 10.8],
[-25.5375417093000010,-49.2384800499999997, 10.8],
[-25.5023486511999984,-49.2276836030000027, 10.8],
[-25.4498152520999987,-49.2474192434999978, 10.8],
[-25.5657394505999989,-49.3338208252000001, 10.8],
[-25.4707569533999987,-49.1921260085999990, 10.8],
[-25.5729667505000009,-49.3371483264999995, 10.8],
[-25.5602506114000008,-49.3131949507000016, 10.8],
[-25.5290178881999985,-49.2696014687999977, 10.8],
[-25.5723020641000005,-49.2595501589999998, 10.8],
[-25.5562236783999985,-49.2625483702000011, 10.8],
[-25.5349844039000011,-49.2685161352000023, 10.8],
[-25.5447538125000015,-49.2760602406999979, 10.8],
[-25.5546057255000001,-49.2532628846999998, 10.8],
[-25.5375013083999995,-49.2778782988999993, 10.8],
[-25.5527929367999995,-49.2751178607000000, 10.8],
[-25.5439157170000009,-49.2570442259000032, 10.8],
[-25.5402411594999990,-49.2513547809000016, 10.8],
[-25.5425914174000006,-49.2614030956000022, 10.8],
[-25.5469587768000004,-49.2678325469999976, 10.8],
[-25.5372379141000003,-49.2542525141999974, 10.8],
[-25.5576798901999993,-49.2573180214000033, 10.8],
[-25.5578696215000001,-49.2818199287000027, 10.8],
[-25.5101798152000008,-49.2284910734000007, 10.8],
[-25.4983868266999991,-49.2673905616000027, 10.8],
[-25.4699673054999991,-49.2027583460000031, 10.8],
[-25.4800868463999990,-49.3313714630000035, 10.8],
[-25.4746711280999989,-49.2860729452999990, 10.8]

], {radius: 60}).addTo(map);




	var basemap1 = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}",{
	               attribution: "Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme",
	               minZoom: 1,
	               maxZoom: 20
							 }).addTo(map);

  //Adicionar camada WMS ao mapa
	var wms1 = L.tileLayer.wms("http://www.idea.ufpr.br/geoserver/geonode/wms", {
             layers: "geonode:altimetria_ippuc_curitiba_wgs84",
						 transparent: "true",
             format: "image/png"
             });

  //Adicionar GeoJson
	var estilogeojson1 = {
      color: "#41ae76",
			fillColor: "#ccebc5",

			weight: 1,
			opacity: 1,
			fillOpacity: 0.4
	    };

  //Aplicar estilos ao criar as camadas GeoJSON
	var geo1 = L.geoJSON(geojson1, {
      style: estilogeojson1
	    });

  //Adicionar barra de ferramentas
	var barraferramentas = L.control.navbar({
                position: "topleft"
	              }).addTo(map);

	/*//Adicionar segunda barra de barraferramentas
	new L.Toolbar2.Control({
		       positions: "topleft"
	         //actions: [MyAction1, MyAction2]
				 }).addTo(map);*/



	var basemap9 = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


	var wms9 = L.tileLayer.wms('http://www.idea.ufpr.br/geoserver/geonode/wms',{
		layers:'geonode:ciclovia_oficial',
		transparent: 'true',
		format:'image/png'
	});


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
	var geo9 = L.geoJSON(geoj, {
		pointToLayer: function(feicao,posicao) {
			return L.marker(posicao, {icon: icon});
		}
	});

	var geo6 = L.geoJSON(geoj6, {
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
	});

	//Adicionar camada WMS ao mapa
	var wms6 = L.tileLayer.wms("http://www.idea.ufpr.br/geoserver/geonode/wms"
	, {
	layers: "geonode:lotes_201702",
	transparent: "true",
	format: "image/png"
	});
	var basemap7 = L.tileLayer(
	'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
	{
	id:"mapbox.dark",
	accessToken: "pk.eyJ1IjoiamFxdWVsaW5lcGlzZXR0YSIsImEiOiJjamYycmIxa3AwMXUzMnJvN2pjbTJpOWp5In0.4h6LRhENxZViHfwoaFVZjQ"
	}
	).addTo(map);

	//Adicionar camada WMS ao mapa
	var wms7 = L.tileLayer.wms("http://www.idea.ufpr.br/geoserver/geonode/wms"
	, {
	layers: "geonode:cmei",
	transparent: "true",
	format: "image/png"
	});

	//adicionando o shape geojason ciclovia
	var geo7 = L.geoJSON(geojson7, {
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
	});

	var estiloLinhaPonto = {
		color: "#00008B",
		fillColor: "#FA8072",
		weight: 2,
		opacity: 50,
		fillOpacity: 0
	};
	//adicionando o shape
	 var div_b = L.geoJSON(divisadebairros, {
	 style: estiloLinhaPonto,
	 onEachFeature: function (feicao, camada){
	 	camada.bindTooltip(feicao.properties.NOME)
	  }
	}).addTo(map);





	//var minimapa = new L.Control.MiniMap(basemap8).addTo(map);
	var osmVisaoGeral = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
	// L.Control.MiniMap(basemap8).addTo(mapa);


	// Controle de Camadas
	var basecarto = {
		"OpenStreetMap": osmColorido,
		"OSM Black and White": basemap9,
		"Esri De Lorme": basemap1,
		// "Mapbox Comic": basemap2,
		// "Mapbox Dark": basemap6,
		"Mapbox Street": basemap8,
		"Mapbox Outdoors": basemap5,
		"Mapbox High Contrast": basemap7,
		// "Esri World Imagery": basemap10,
		"OSM Hot": basemap11,
		"OSM De": basemap12,
		"Carto DB Positron": basemap4,
		// "Mapbox Street Satellite": basemap14,
	  // "Open Topo Map": basemap15
	};

	var feicoes = {
		"escolas" : school,
		"heat-map":heatescolas,
		"Ciclovias WMS": wms9,
	  "Altimetria WMS": wms1,
		// "Hospitais WMS": wms2,
		"Lotes WMS": wms6,
		"Academias ao ar livre WMS": wms8,
		"Terminais de Transporte WMS": wms5,
		"Creche/Jardinete WMS": wms7,
		// "Hidrografia WMS": wms10,
		"Escola Municipal WMS": wms11,
		"Ferrovias WMS": wms12,
		"Ocupações Irregulares WMS": wms4,
		// "CAPs (Centro de Atenção Psicosocial) WMS": wms15,
		"academias JSON": geo9,
		"Divisas/Regionais JSON": geo6,
		// "Cemitérios JSON": geoj2,
		"Altimetria JSON": geo1,
		"Terminais de Transpote JSON": geo8,
		"Ruas da Cidadania JSON": geo5,
		"Ciclovias JSON": geo7,
		// "Hidrografia Polígono JSON": geojson10,
		"Praças e Jardinetes JSON": geo11,
		"Eixos de Rua JSON": geo12,
		"Escolas Municipais JSON": geo4,
		"Divisas de Bairro JSON": div_b,
		// "Unidades de Saúde JSON": geo15
	};

	//Adicionar objetos ao controle de camadas
	L.control.layers(basecarto, feicoes).addTo(map);

	// var osmColorido = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Specify divisions every 10 degrees
L.graticule({ interval: 0.1 }).addTo(map);
// Specify bold red lines instead of thin grey lines
L.graticule({
    style: {
        color: '#f00',
        weight: 1
    }
}).addTo(map);









map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);
function onLocationFound(e) {
	 var radius = e.accuracy / 2;

	 L.marker(e.latlng).addTo(map)
		 .bindPopup("You are within " + radius + " meters from this point").openPopup();

	 L.circle(e.latlng, radius).addTo(map);
 }

 function onLocationError(e) {
	 alert(e.message);
 }

 	map.locate({setView: true, maxZoom: 11});

 }
