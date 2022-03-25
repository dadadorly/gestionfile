//import {initializeApp} from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey:"AIzaSyChJ9cey2uEYbBDKMLww0V8WRbc2RYuegA",
    authDomain: "gestionfile-2b256.firebaseapp.com",
    projectId: "gestionfile-2b256",
    storageBucket: "gestionfile-2b256.appspot.com",
    messagingSenderId: "649722372832",
    appId: "649722372832:web:6a02b098a4a918e91ca685",

};

 //Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app=firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
//const app = initializeApp(firebaseConfig);

//export const auth = getAuth(app);

const auth = firebase.auth()

export {auth};