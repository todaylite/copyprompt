importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging.js");

// Firebase config same jo index.html me use kiya
firebase.initializeApp({
  apiKey: "AIzaSyAwMir8E-5e4fe-hdwzIHxfLzdnKa9LK20",
  projectId: "copyprompt-app",
  messagingSenderId: "896337421281",
  appId: "1:896337421281:web:35ee45a7b0a76f437d68a0"
});

const messaging = firebase.messaging();

// Background notifications
messaging.onBackgroundMessage((payload) => {
  console.log("Background message received: ", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon.png" // apna app icon
  });
});
