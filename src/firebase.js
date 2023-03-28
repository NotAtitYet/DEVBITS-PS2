// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMPyoIM1Y2WzC-CP20X6brc5kOl16APuY",
  authDomain: "stockup-d7522.firebaseapp.com",
  projectId: "stockup-d7522",
  storageBucket: "stockup-d7522.appspot.com",
  messagingSenderId: "638922585443",
  appId: "1:638922585443:web:ebaea42f3c12ff3224cf56",
  measurementId: "G-H91ZF4YCEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const auth = getAuth();
export{app, auth};