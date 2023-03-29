// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { getAuth} from 'firebase/auth'

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
export{ app, auth, signInWithGoogle};