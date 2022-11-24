// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChttGsCdO0bjxbqnksLXYgYx6N8L7dzQY",
  authDomain: "dnn-project-82042.firebaseapp.com",
  projectId: "dnn-project-82042",
  storageBucket: "dnn-project-82042.appspot.com",
  messagingSenderId: "75766107776",
  appId: "1:75766107776:web:8dc0d0ebb013ed2f6b6065",
  measurementId: "G-4SVN96318B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);


export function signup(email,password){
    return createUserWithEmailAndPassword(auth, email,password);
}
