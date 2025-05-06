// firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyCPoo_6Y-XB69FM_qrIjErVADmnaZeG3-4",
    authDomain: "real-time-vehicle-tracki-a83e6.firebaseapp.com",
    databaseURL: "https://real-time-vehicle-tracki-a83e6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "real-time-vehicle-tracki-a83e6",
    storageBucket: "real-time-vehicle-tracki-a83e6.appspot.com",
    messagingSenderId: "665050789863",
    appId: "1:665050789863:web:719d1311c6a71ed1c16f42"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}
