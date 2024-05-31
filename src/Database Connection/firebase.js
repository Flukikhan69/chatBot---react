// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrPkXIBiDWf5s1C1S3FpXYyARGGaylN7Q",
  authDomain: "devmatebot-75628.firebaseapp.com",
  projectId: "devmatebot-75628",
  storageBucket: "devmatebot-75628.appspot.com",
  messagingSenderId: "139437213980",
  appId: "1:139437213980:web:cec697b6dfc953497e92d9",
  measurementId: "G-75PELZTEBK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };