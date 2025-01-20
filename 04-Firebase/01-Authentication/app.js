import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";



onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid);
    } else {
        window.location = "login.html"
    }
});

const logoutBtn = document.querySelector("#logoutbtn");

logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
       window.location = "login.html"
    }).catch((error) => {
        alert(error)
    });

})