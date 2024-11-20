let map;

async function initMap() {
  //latitude and longitude of location
  const position = { lat: -25.402086450052725, lng: 28.772863121998554 };

  //request libraries
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  //map centered at location
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  //map marker positioned at location
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Phola Mall",
  });
}

initMap();