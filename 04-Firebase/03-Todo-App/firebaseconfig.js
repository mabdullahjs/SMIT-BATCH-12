import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyDghImNN_LzyhaqEVZ4UM4GDXr5LOCq6e4",
    authDomain: "smit-batch-12-5eb8a.firebaseapp.com",
    projectId: "smit-batch-12-5eb8a",
    storageBucket: "smit-batch-12-5eb8a.firebasestorage.app",
    messagingSenderId: "1056221466683",
    appId: "1:1056221466683:web:04f98f00d526549d790c1e",
    measurementId: "G-2DK8Q2X3GZ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);