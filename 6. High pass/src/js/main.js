ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.757397, 37.611097],
    zoom: 13.1,
    controls: ['geolocationControl', 'zoomControl']
  }, {
    suppressMapOpenBlock: true,
    geolocationControlSize: "large",
    geolocationControlPosition: { top: "350px", right: "10px" },
    geolocationControlFloat: 'none',
    zoomControlSize: "small",
    zoomControlFloat: "none",
    zoomControlPosition: { top: "70px", right: "10px" }
  });

  myMap.behaviors.disable(['scrollZoom']);

  var myPlacemark = new ymaps.Placemark([55.769297, 37.638397], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/sprite.svg#map',
    iconImageSize: [70, 70],
    iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark);
}
