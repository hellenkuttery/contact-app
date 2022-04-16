// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVu9mm-MCxQ4tD58wOLFppgGfdYUyFsFc",
  authDomain: "contact-app-5b82b.firebaseapp.com",
  databaseURL: "https://contact-app-5b82b-default-rtdb.firebaseio.com",
  projectId: "contact-app-5b82b",
  storageBucket: "contact-app-5b82b.appspot.com",
  messagingSenderId: "870205624148",
  appId: "1:870205624148:web:2ced62ee1689281cd8c2c1"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;