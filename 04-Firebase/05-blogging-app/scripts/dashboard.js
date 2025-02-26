import { collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { auth, db } from "./firebaseconfig.js";

const form = document.querySelector('#itemForm');
const title = document.querySelector('#title');

// cloudinary config

let postImage = null

let myWidget = cloudinary.createUploadWidget({
    cloudName: 'your_cloudname',
    uploadPreset: 'your-preset'
}, (error, result) => {
    if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        postImage = result.info.secure_url
    }
}
)

document.getElementById("upload_widget").addEventListener("click", function (event) {
    event.preventDefault()
    console.log("hello world");
    myWidget.open();
}, false);

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log(title.value);

    try {
        const docRef = await addDoc(collection(db, "blogs"), {
            title: title.value,
            image: postImage,
            date: Timestamp.fromDate(new Date()),
            uid: auth.currentUser.uid
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }


})