// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk8jccAmxhzYBmH8XhYr7SQgO1GtOjlEU", // API key
  authDomain: "ova-auth.firebaseapp.com", // domain for authentication
  projectId: "ova-auth", // ID of the firebase project
  storageBucket: "ova-auth.appspot.com", // Storage bucket for the file storage
  messagingSenderId: "407457320914", // ID of the messaging sender
  appId: "1:407457320914:web:b7ba9cc6105de42998c20b" // ID of the firebase app
};

// Initialize Firebase
// checks if any firebase apps have already been initialized ('getApps().length)
// if the apps exists, it retrieves the first app using getApp().
// if no apps exist, it initializes a new app using initializeApp(firebaseConfig)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth }