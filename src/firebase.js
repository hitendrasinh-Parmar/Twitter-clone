import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCHG6UGcI64p4Zs8EpPyjai-qlKPrvPuQ0",
    authDomain: "twitter-clone-d2528.firebaseapp.com",
    projectId: "twitter-clone-d2528",
    storageBucket: "twitter-clone-d2528.appspot.com",
    messagingSenderId: "862182266745",
    appId: "1:862182266745:web:209b46d5f95d07b20381a8",
    measurementId: "G-LJNSENSGZK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;