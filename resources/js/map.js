// JavaScript Document auto !important
loading.innerText = '';
var yx = L.latLng;

var coordinates = (x, y) => {
  if (L.Util.isArray(x)) {
    return yx(x[1], x[0]);
  }
  return yx(y, x);
};

let PMap = L.map('PMap', { crs: L.CRS.Simple }).setView([89, 100], 0);

var searchLayer = L.geoJson().addTo(PMap);

L.tileLayer(``, {
  minZoom: 0,
  maxZoom: 10,
  attribution:
    'Map data &copy; <a href="https://www.host5.biz/">Host5 Hosting</a>©'
}).addTo(PMap);

/** NEURONS PROPERTIES */
const neuronSmall = L.icon({
  iconUrl: 'resources/images/1.png',
  iconSize: [15, 15]
});

const neuronMedium = L.icon({
  iconUrl: 'resources/images/2.png',
  iconSize: [20, 20]
});

const neuronLarge = L.icon({
  iconUrl: 'resources/images/1.png',
  iconSize: [30, 30]
});

/** NEURONS */
var sol = coordinates(175.2, 145.0);
var mizar = coordinates(41.6, 130.1);
var kruegerZ = coordinates(13.4, 56.5);
var deneb = coordinates(218.7, 8.3);
var marker2 = coordinates(30, 9);
var marker3 = coordinates(60, -0.09);
var marker4 = coordinates(100, 89);
var marker5 = coordinates(99, 25);

/** MESSAGES */
L.marker(sol, { icon: neuronMedium })
  .addTo(PMap)
  .bindPopup('Hola');
L.marker(mizar, { icon: neuronMedium })
  .addTo(PMap)
  .bindPopup('uwu');
L.marker(kruegerZ, { icon: neuronMedium })
  .addTo(PMap)
  .bindPopup('Mhmm');
L.marker(deneb, { icon: neuronMedium })
  .addTo(PMap)
  .bindPopup('?');
L.marker(marker2, { icon: neuronLarge })
  .addTo(PMap)
  .bindPopup('Soy un puntito');
L.marker(marker3, { icon: neuronSmall })
  .addTo(PMap)
  .bindPopup('Soy otro puntito');
L.marker(marker4, { icon: neuronSmall })
  .addTo(PMap)
  .bindPopup('Saludos forastero!');
L.marker(marker5, { icon: neuronSmall })
  .addTo(PMap)
  .bindPopup('Uhhh');

/** AXONS */
var travel = L.polyline([sol, deneb]).addTo(PMap);
var travel = L.polyline([sol, mizar]).addTo(PMap);
var travel = L.polyline([sol, deneb]).addTo(PMap);
var travel = L.polyline([mizar, marker4]).addTo(PMap);
var travel = L.polyline([marker4, deneb]).addTo(PMap);
var travel = L.polyline([kruegerZ, mizar]).addTo(PMap);
var travel = L.polyline([marker2, mizar]).addTo(PMap);
var travel = L.polyline([marker2, marker3]).addTo(PMap);
var travel = L.polyline([deneb, marker3]).addTo(PMap);
var travel = L.polyline([marker4, marker2]).addTo(PMap);
var travel = L.polyline([kruegerZ, marker2]).addTo(PMap);
var travel = L.polyline([marker2, marker5]).addTo(PMap);

PMap.doubleClickZoom.disable();

/** NEW NEURON */
PMap.on('dblclick', event => {
  let latLng = PMap.mouseEventToLatLng(event.originalEvent);
  L.marker([latLng.lat, latLng.lng], { icon: neuronSmall }).addTo(PMap);
});

var bounds = [[0, 0], [3000, 3000]];
var image = L.imageOverlay('', bounds).addTo(PMap);
