import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCRe6T3z56K8D7-PEyGhDj-y0OQwmX1p24",
  authDomain: "golden-skin-hotel.firebaseapp.com",
  projectId: "golden-skin-hotel",
  storageBucket: "golden-skin-hotel.appspot.com",
  messagingSenderId: "498092482813",
  appId: "1:498092482813:web:1980712d8ae96d8d77de94",
  measurementId: "G-0E1ZH31TP7"
};

const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp)

export { storage, ref, uploadBytesResumable, getDownloadURL }