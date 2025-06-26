# PWA MapLibre WebSocket Örneği

Bu depo, MapLibre harita kütüphanesi ile Progressive Web App (PWA) ve WebSocket temellerini bir araya getiren basit bir başlangıç şablonu içerir.

## Kurulum

1. `public` klasörünü bir statik sunucuda barındırın (örneğin `serve` ya da herhangi bir HTTP sunucusu).
2. WebSocket sunucusu olarak `ws://localhost:8080` adresinde çalışan basit bir sunucu oluşturun. Sunucu, `{ "lng": <number>, "lat": <number> }` formatında koordinatlar gönderebilir.
3. Uygulamayı tarayıcıda açtığınızda harita yüklenecek ve WebSocket üzerinden gelen koordinatlar harita üzerinde işaretlenmeye başlayacaktır.

## Dosya Yapısı

- `public/index.html`: Uygulamanın ana sayfası ve MapLibre entegrasyonu.
- `public/main.js`: Harita tanımları, PWA servis çalışanı kaydı ve WebSocket bağlantısı.
- `public/service-worker.js`: Basit önbellekleme yapısı sağlayan servis çalışanı.
- `public/manifest.json`: PWA yapılandırması.
- `public/icons/`: PWA ikonlarının bulunduğu klasör (örnek ikonlar placeholders olarak eklenmiştir).

## Kullanım

Sunucuları başlattıktan sonra sayfayı ziyaret edin ve WebSocket üzerinden gelen koordinatların haritada işaretlendiğini gözlemleyin. Bu şablon, PWA ve WebSocket kullanımı hakkında temel bir fikir vermek için hazırlanmıştır ve gerçek projelerde özelleştirilebilir.
