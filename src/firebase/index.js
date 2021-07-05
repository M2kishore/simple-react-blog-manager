import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDtINPRpEAaM9A3jVmHbH33ag1UW-L0F8k",
    authDomain: "simple-blog-3d451.firebaseapp.com",
    projectId: "simple-blog-3d451",
    storageBucket: "simple-blog-3d451.appspot.com",
    messagingSenderId: "1072126685524",
    appId: "1:1072126685524:web:828296ddbfbdd84a7898c1"
  };

  const FirebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore();