
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMw4F2F3fJFJ9Li-oUWXJ5wwrmEmdhf-8",
  authDomain: "funkoecommerce-cf443.firebaseapp.com",
  projectId: "funkoecommerce-cf443",
  storageBucket: "funkoecommerce-cf443.appspot.com",
  messagingSenderId: "560684378409",
  appId: "1:560684378409:web:98837e1faa6a21e456ef38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProducts(){
 const querySnapshot = await getDocs(collection(db, "funkoEcommerce"));
 const products = [];
 querySnapshot.forEach(query => products.push(query.data()));
 return products; 
}
