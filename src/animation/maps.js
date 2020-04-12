;(function () {

let maps;

const init = () => {
  maps = new ymaps.Map('map', {
    center: [45.03508757303585, 38.950312999999935],
    zoom: 12,
    controls: [],
  });

  const coords = [
    [45.05147129819616,38.964092449462825],
    [45.048917832926965,38.93881748608392],
    [45.02445779052778,38.948900417602474],
    [45.03536397324566,38.99665867260737]
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
