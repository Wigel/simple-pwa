importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js"
);
importScripts("https://www.gstatic.com/firebasejs/9.0.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDhM7mED5rRdYADiGwplVQorQt196wEd4E",
  authDomain: "simple-pwa-eb6ea.firebaseapp.com",
  databaseURL: 'https://simple-pwa-eb6ea.firebaseio.com',
  projectId: "simple-pwa-eb6ea",
  storageBucket: "simple-pwa-eb6ea.appspot.com",
  messagingSenderId: "386911987378",
  appId: "1:386911987378:web:d55f04f70958bf73644bab",
  measurementId: "G-8DRTEZEEM6",
});

workbox.routing.registerRoute(
  ({ request }) =>
    request.destination === "image" ||
    request.destination === "style" ||
    request.destination === "script",
  new workbox.strategies.StaleWhileRevalidate()
);

const messaging = firebase.messaging();
messaging.onMessage();
messaging.onBackgroundMessage();
