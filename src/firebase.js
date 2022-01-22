import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBSqaPVZ5l7Mej8nnndsf77Mqn8xyxqgBY",
    authDomain: "mailclone-ac.firebaseapp.com",
    projectId: "mailclone-ac",
    storageBucket: "mailclone-ac.appspot.com",
    messagingSenderId: "685499724640",
    appId: "1:685499724640:web:b0e48d16c9b9966fc6e405"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
