import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyALq2WMQECRfboIYMY8zR0kam22rgonPek",
    authDomain: "hostelbooking-3f251.firebaseapp.com",
    projectId: "hostelbooking-3f251",
    storageBucket: "hostelbooking-3f251.appspot.com",
    messagingSenderId: "463395848755",
    appId: "1:463395848755:web:f1eb7cc4c5eccf911d5946",
    measurementId: "G-2RZZTLP2JM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;