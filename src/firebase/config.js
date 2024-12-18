
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD30TMdDsBH4DZWQlnlCGRcvPLNhKhQAao",
  authDomain: "technocenter-db.firebaseapp.com",
  projectId: "technocenter-db",
  storageBucket: "technocenter-db.firebasestorage.app",
  messagingSenderId: "1048576020686",
  appId: "1:1048576020686:web:68220e73d9abaa5c6a409f"
};

export const app = initializeApp(firebaseConfig);