// JavaScript Document auto !important
var yx = L.latLng;

var xy = function(x, y) {
  if (L.Util.isArray(x)) {
    // When doing xy([x, y]);
    return yx(x[1], x[0]);
  }
  return yx(y, x); // When doing xy(x, y);
};

let PMap = L.map('PMap', { crs: L.CRS.Simple }).setView([89, 100], 0);

var searchLayer = L.geoJson().addTo(PMap);

// L.control.scale().addTo(PMap);

// setInterval(function(){
//    map.setView([0, 0]);
//    setTimeout(function(){
//        map.setView([60, 0]);
//    }, 2000);
// }, 4000);

L.tileLayer(``, {
  minZoom: 0,
  maxZoom: 10,
  attribution:
    'Map data &copy; <a href="https://www.host5.biz/">Host5 Hosting</a>©'
}).addTo(PMap);

// let marker = L.marker([51.5, -0.09]).addTo(PMap)

let iconMarker = L.icon({
  iconUrl: 'resources/images/1.png',
  iconSize: [15, 15]
});

let iconMarker2 = L.icon({
  iconUrl: 'resources/images/1.png',
  iconSize: [30, 30]
});
let iconMarker3 = L.icon({
  iconUrl: 'resources/images/2.png',
  iconSize: [20, 20]
});

var sol = xy(175.2, 145.0);
var mizar = xy(41.6, 130.1);
var kruegerZ = xy(13.4, 56.5);
var deneb = xy(218.7, 8.3);
var marker2 = xy(30, 9);
var marker3 = xy(60, -0.09);
var marker4 = xy(100, 89);
var marker5 = xy(99, 25);

L.marker(sol, { icon: iconMarker3 })
  .addTo(PMap)
  .bindPopup('Hola');
L.marker(mizar, { icon: iconMarker3 })
  .addTo(PMap)
  .bindPopup('uwu');
L.marker(kruegerZ, { icon: iconMarker3 })
  .addTo(PMap)
  .bindPopup('Mhmm');
L.marker(deneb, { icon: iconMarker3 })
  .addTo(PMap)
  .bindPopup('?');
L.marker(marker2, { icon: iconMarker2 })
  .addTo(PMap)
  .bindPopup('Soy un puntito');
L.marker(marker3, { icon: iconMarker })
  .addTo(PMap)
  .bindPopup('Soy otro puntito');
L.marker(marker4, { icon: iconMarker })
  .addTo(PMap)
  .bindPopup('Saludos forastero!');
L.marker(marker5, { icon: iconMarker })
  .addTo(PMap)
  .bindPopup('Uhhh');

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
PMap.on('dblclick', e => {
  let latLng = PMap.mouseEventToLatLng(e.originalEvent);

  L.marker([latLng.lat, latLng.lng], { icon: iconMarker }).addTo(PMap);
});

var bounds = [[0, 0], [3000, 3000]];
var image = L.imageOverlay('', bounds).addTo(PMap);
