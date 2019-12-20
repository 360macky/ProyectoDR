// JavaScript Document auto !important
loading.innerText = '';
var yx = L.latLng;

const coordinates = (x, y) => {
  if (L.Util.isArray(x)) {
    return yx(x[1], x[0]);
  }
  return yx(y, x);
};

var Pmap = L.map('PMap').setView([51.505, -0.09], 13);

L.tileLayer('', {
  maxZoom: 15,
  minZoom: 13,
  attribution: 'D. Roca Project - CC'
}).addTo(Pmap);

var neurons = [
  { pos: [51.51, -0.1], popup: 'Matemáticas' },
  { pos: [51.5, -0.09], popup: 'Física' },
  { pos: [51.49, -0.08], popup: 'Química' }
];

neurons.forEach(object => {
  var m = L.marker(object.pos).addTo(Pmap),
    p = new L.Popup({ autoClose: false, closeOnClick: false })
      .setContent(object.popup)
      .setLatLng(object.pos);
  m.bindPopup(p);
});

const neuronsQuantity = document.getElementsByClassName('leaflet-marker-icon')
  .length;

for (let index = 0; index < neuronsQuantity; index++) {
  document.getElementsByClassName('leaflet-marker-icon')[index].click();
}
