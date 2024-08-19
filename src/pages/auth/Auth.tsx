import { useEffect, useState } from 'react';
import { ui } from '@maxister/chat/firebase/FirebaseInit.tsx';
import { GoogleAuthProvider } from 'firebase/auth';
import 'firebaseui/dist/firebaseui.css';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@maxister/chat/firebase/FirebaseInit"
import type { User } from 'firebase/auth';

export default function Auth() {
  const [firebaseUIShown, setFirebaseUIShown] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [authStateChanged, setAuthStateChanges] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthStateChanges(true);
    });
  }, []);

  useEffect(() => {
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          return true;
        },
        uiShown: function() {
          setFirebaseUIShown(true);
        }
      },
      signInFlow: 'popup',
      signInSuccessUrl: '/chat', 
    });
  }, []);

  useEffect(() => {
    if (!authStateChanged) return;
    if (user) {
      window.location.href = '/chat';
    }
    if (user === null && firebaseUIShown) {
      const nullableDocument: any = document
      if (nullableDocument) {
        nullableDocument.getElementById('login').style.display = 'block';
        nullableDocument.getElementById('loader').style.display = 'none';
      }
    }
  }, [authStateChanged, user, firebaseUIShown]);

  return (
    <>
      <style>{
        `
          .firebaseui-idp-button {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 10px;
            background-color: #E7F5FF !important;
            border-radius: 10px;
          }
          .firebaseui-idp-icon {
            width: 24px;
            height: 24px;
            margin-right: 10px;
          }
          .firebaseui-idp-text-short {
            display: none;
          }
        `
      }</style>
      <div id="loader">Loading...</div>
      <section id="login" style={{ display: 'none' }} className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-black">
              Bienvenido a Maxister
            </a>
            <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-paradiso">
                        Inicia sesión para poder aprender con Maxister
                    </h1>
                    <div id="firebaseui-auth-container" className=""></div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}