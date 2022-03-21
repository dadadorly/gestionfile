// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChJ9cey2uEYbBDKMLww0V8WRbc2RYuegA",
    authDomain: "gestionfile-2b256.firebaseapp.com",
    projectId: "gestionfile-2b256",
    storageBucket: "gestionfile-2b256.appspot.com",
    messagingSenderId: "649722372832",
    appId: "1:649722372832:web:6a02b098a4a918e91ca685",
    measurementId: "G-W3Z88QDHWZ"
};

// Initialize Firebase
let app;
if(firebase.apps.length===0){
    app=firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}

export const auth = firebase.auth()
const analytics = getAnalytics(app);