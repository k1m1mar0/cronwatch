// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // <-- 1. IMPORT getAuth from the auth SDK

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cronwatch-469318.firebaseapp.com",
  projectId: "cronwatch-469318",
  storageBucket: "cronwatch-469318.firebasestorage.app",
  messagingSenderId: "169510506139",
  appId: "1:169510506139:web:e2bc2058e0d71139ef003e",
  measurementId: "G-J3E7WM6PX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase services.
// By exporting them from this central file, we ensure that we have a single
// instance of each service shared across our entire application.

// 2. INITIALIZE and EXPORT the Analytics service
export const analytics = getAnalytics(app); 

// 3. INITIALIZE and EXPORT the Authentication service
export const auth = getAuth(app);      