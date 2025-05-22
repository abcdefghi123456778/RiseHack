// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQG627QyeLEv_0dkJwTD-Lzba9FTVLiAY",
  authDomain: "risehack-826dd.firebaseapp.com",
  projectId: "risehack-826dd",
  storageBucket: "risehack-826dd.firebasestorage.app",
  messagingSenderId: "844772599101",
  appId: "1:844772599101:web:00a04535556b0bcd1c5154",
  measurementId: "G-T7FFF5JP4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);