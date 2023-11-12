import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBE-jEnBnkY94nZjDCr6vguMcyKy60P9hE",
  authDomain: "case-9381e.firebaseapp.com",
  projectId: "case-9381e",
  storageBucket: "case-9381e.appspot.com",
  messagingSenderId: "1053630045918",
  appId: "1:1053630045918:web:ca3b460a14db771ba8ec4f",
  measurementId: "G-5N4F5TLRM9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
