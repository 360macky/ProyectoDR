var map = L.map('map', { crs: L.CRS.Simple, minZoom: -3 });
var yx = L.latLng;

var coordinates = function(x, y) {
  if (L.Util.isArray(x)) {
    return yx(x[1], x[0]);
  }
  return yx(y, x);
};

var bounds = [coordinates(-25, -26.5), coordinates(1023, 1021.5)];
var image = L.imageOverlay('uqm_map_full.png', bounds).addTo(map);
var sol = coordinates(175.2, 145.0);
var mizar = coordinates(41.6, 130.1);
var kruegerZ = coordinates(13.4, 56.5);
var deneb = coordinates(218.7, 8.3);

L.marker(sol)
  .addTo(map)
  .bindPopup('Sol');
L.marker(mizar)
  .addTo(map)
  .bindPopup('Mizar');
L.marker(kruegerZ)
  .addTo(map)
  .bindPopup('Krueger-Z');
L.marker(deneb)
  .addTo(map)
  .bindPopup('Deneb');

var travel = L.polyline([sol, deneb]).addTo(map);

map.setView(coordinates(120, 70), 1);
