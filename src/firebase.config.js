<<<<<<< HEAD
import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyB_pGavWfsfvCl-qIcK79FVD-VEEnFMiZg",
    authDomain: "restaurantapp-d5713.firebaseapp.com",
    databaseURL: "https://restaurantapp-d5713-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "restaurantapp-d5713",
    storageBucket: "restaurantapp-d5713.appspot.com",
    messagingSenderId: "352023266075",
    appId: "1:352023266075:web:6676abfac8e449539a89be",

  };

  const App= getApps.length>0 ? getApp() :initializeApp(firebaseConfig);

  const firestore=getFirestore(App);
  const storage = getStorage(App);

=======
import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyB_pGavWfsfvCl-qIcK79FVD-VEEnFMiZg",
    authDomain: "restaurantapp-d5713.firebaseapp.com",
    databaseURL: "https://restaurantapp-d5713-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "restaurantapp-d5713",
    storageBucket: "restaurantapp-d5713.appspot.com",
    messagingSenderId: "352023266075",
    appId: "1:352023266075:web:6676abfac8e449539a89be",

  };

  const App= getApps.length>0 ? getApp() :initializeApp(firebaseConfig);

  const firestore=getFirestore(App);
  const storage = getStorage(App);

>>>>>>> 8147932 (Initial commit with all project files)
  export {App, firestore, storage};