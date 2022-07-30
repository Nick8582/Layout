ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.758468, 37.601088],
    zoom: 14.1,
    controls: ['geolocationControl', 'zoomControl']
  }, {
    suppressMapOpenBlock: true,
    geolocationControlSize: "large",
    geolocationControlPosition: { top: "350px", right: "10px" },
    geolocationControlFloat: 'none',
    zoomControlSize: "small",
    zoomControlFloat: "none",
    zoomControlPosition: { top: "270px", right: "10px" }
  });

  myMap.behaviors.disable(['scrollZoom']);

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map.svg',
    iconImageSize: [28, 20],
    iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark);
}