// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyBK8FSHZKizXLudhxMQvIvFKse7_P-6SUg",
  authDomain: "platzi-store-cef51.firebaseapp.com",
  databaseURL: "https://platzi-store-cef51-default-rtdb.firebaseio.com",
  projectId: "platzi-store-cef51",
  storageBucket: "platzi-store-cef51.appspot.com",
  messagingSenderId: "425721933284",
  appId: "1:425721933284:web:a5a003f72e436edfa2ebf1",
  measurementId: "G-6BPY2EWF3Q"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.