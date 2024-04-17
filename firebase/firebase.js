import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBetA-nwzmsv_0f_G6Ihy_NTF33KqmYekw",
  authDomain: "horne-hyundai.firebaseapp.com",
  databaseURL: "https://horne-hyundai-default-rtdb.firebaseio.com",
  projectId: "horne-hyundai",
  storageBucket: "horne-hyundai.appspot.com",
  messagingSenderId: "357331981365",
  appId: "1:357331981365:web:db8eb685e04c22db8dcd7c",
  measurementId: "G-9K8WRV35H9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
