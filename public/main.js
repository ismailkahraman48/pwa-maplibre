if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}

const map = new maplibregl.Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/style.json',
  center: [29.0, 41.0],
  zoom: 5
});

let ws;
function initWebSocket() {
  ws = new WebSocket('ws://localhost:8080');
  ws.onopen = () => console.log('WebSocket connected');
  ws.onmessage = event => {
    const data = JSON.parse(event.data);
    if (data.lng && data.lat) {
      new maplibregl.Marker().setLngLat([data.lng, data.lat]).addTo(map);
    }
  };
  ws.onclose = () => setTimeout(initWebSocket, 1000);
}

initWebSocket();
