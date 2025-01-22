import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { db } from "./firebaseconfig.js";

const form = document.querySelector('#form');
const title = document.querySelector('#title');
const description = document.querySelector('#description');


form.addEventListener('submit', async (event) => {
  event.preventDefault()
  console.log(title.value);
  console.log(description.value);

  try {
    const docRef = await addDoc(collection(db, "todos"), {
      title: title.value,
      description: description.value
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }


})