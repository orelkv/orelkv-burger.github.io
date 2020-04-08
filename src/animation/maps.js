;(function () {

let maps;

const init = () => {
  maps = new ymaps.Map('map', {
    center: [45.03008757303585, 39.000312999999935],
    zoom: 13,
    controls: [],
  });

  const coords = [
    [45.06147129819616,38.964092449462825],
    [45.028917832926965,38.90881748608392],
    [44.99445779052778,38.948900417602474],
    [45.00536397324566,39.08665867260737]
  ];

  const myMarker = new ymaps.GeoObjectCollection({}, {
    draggable: false, //  и их нельзя перемещать
    iconLayout: 'default#image',            // без текста картинка
    iconImageHref: "./img/maps/map-marker.svg",     // путь до картинки относительно index.html
    iconImageSize: [47, 58],                // размер картинки вpx
    iconImageOffset: [-24, -58]              // сдвиг значка итосительно точки привязки
  });

  coords.forEach(coord => {
    myMarker.add(new ymaps.Placemark(coord));
  });

  maps.geoObjects.add(myMarker);

  maps.behaviors.disable('scrollZoom');
};

ymaps.ready(init)
})()
