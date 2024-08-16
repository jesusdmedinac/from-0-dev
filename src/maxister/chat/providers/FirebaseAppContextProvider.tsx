import { initializeApp } from "firebase/app";
import { createContext } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhUw9Mq2JHC4e2NB6uSs8S7IRH9RZsb78",
  authDomain: "alia-f7383.firebaseapp.com",
  projectId: "alia-f7383",
  storageBucket: "alia-f7383.appspot.com",
  messagingSenderId: "1019553751201",
  appId: "1:1019553751201:web:0f67ed8736ce2e940a50e0",
  measurementId: "G-325HVYW82N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirebaseAppContext = createContext(app);

export function FirebaseAppContextProvider({ children }) {
  return (
    <FirebaseAppContext.Provider value={app}>
      {children}
    </FirebaseAppContext.Provider>
  );
};