// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq_iDVt-KeO4UkaSxyEA8de4Ri4VRrqgU",
  authDomain: "reactapp-bb00f.firebaseapp.com",
  projectId: "reactapp-bb00f",
  storageBucket: "reactapp-bb00f.appspot.com",
  messagingSenderId: "388802958403",
  appId: "1:388802958403:web:d683f57a951bb84f29f0f6"
};
 
// Initialize Firebas
initializeApp(firebaseConfig);
export const db=getFirestore()