import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import * as firebaseui from 'firebaseui'
import { GoogleAuthProvider } from "firebase/auth";

// Initialize Firebase
export const app = initializeApp(JSON.parse(import.meta.env.PUBLIC_FIREBASE_CONFIG || "{}"));
export const auth = getAuth(app);
export const db = getDatabase(app);
export const analytics = getAnalytics(app);
export const ui = new firebaseui.auth.AuthUI(auth);
export const googleAuthProvider = new GoogleAuthProvider();