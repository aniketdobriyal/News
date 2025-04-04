import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCOMdCBXFGTCzLtR44zA7PhfEBZg8UpVd8",
    authDomain: "web-app-87f66.firebaseapp.com",
    databaseURL: "https://web-app-87f66-default-rtdb.firebaseio.com",
    projectId: "web-app-87f66",
    storageBucket: "web-app-87f66.firebasestorage.app",
    messagingSenderId: "464562750797",
    appId: "1:464562750797:web:1c436af0a42908bb682304",
    measurementId: "G-1YFW6YTM2G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
