// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt318dz5Ekeb5i6kLZhpFQcpuCOYZltXk",
  authDomain: "rentas-examen.firebaseapp.com",
  projectId: "rentas-examen",
  storageBucket: "rentas-examen.appspot.com",
  messagingSenderId: "579427081110",
  appId: "1:579427081110:web:8297281c6128c532439bb7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//conectar a la base de datos
export const db = getFirestore(app);