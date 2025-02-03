import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth, db } from "./firebaseconfig.js";
import { collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";


// get elements from html 

const form = document.querySelector('#form');
const todo = document.querySelector('#todo');
const ul = document.querySelector('#ul');
const logoutBtn = document.querySelector("#logoutbtn");

// global array for todos
const allTodo = []


// check user status
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid);
        getDataFromFirestore()
    } else {
        window.location = "login.html"
    }
});




// logout user function

logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
        window.location = "login.html"
    }).catch((error) => {
        alert(error)
    });

})


// get data from database

async function getDataFromFirestore() {
    const q = query(collection(db, "todos"), where("uid", "==", auth.currentUser.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        allTodo.push({
            ...doc.data(),
            docid: doc.id
        })
    });

    console.log(allTodo);

    allTodo.map(item => {
        ul.innerHTML += `<li>${item.todo}</li>`
    })
}


// add data into database

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log(todo.value);

    try {
        const docRef = await addDoc(collection(db, "todos"), {
            todo: todo.value,
            uid: auth.currentUser.uid
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
})


// https://cdn.jsdelivr.net/npm/@cloudinary/url-gen@1.21.0/+esm