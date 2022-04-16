// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZVV8SYExONmx_LCs24-fKbtfFvTkKEzM",
    authDomain: "app-auth-20e3a.firebaseapp.com",
    projectId: "app-auth-20e3a",
    storageBucket: "app-auth-20e3a.appspot.com",
    messagingSenderId: "297118661023",
    appId: "1:297118661023:web:ced30b3766a59649ba65aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;