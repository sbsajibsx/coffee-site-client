// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCADoQykb_iGIU_9_qvHsw9am4RD9sKE3Q",
  authDomain: "first-coffee-site.firebaseapp.com",
  projectId: "first-coffee-site",
  storageBucket: "first-coffee-site.firebasestorage.app",
  messagingSenderId: "844782208561",
  appId: "1:844782208561:web:7b45dbb2ec5b8b3bc27710"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
