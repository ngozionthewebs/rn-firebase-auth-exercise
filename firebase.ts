// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; //autherntication functionality

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLu2cjy06dxffHwqCzU3byHqyExw7zYaU",
  authDomain: "ngozi-classproject.firebaseapp.com",
  projectId: "ngozi-classproject",
  storageBucket: "ngozi-classproject.firebasestorage.app",
  messagingSenderId: "238606796547",
  appId: "1:238606796547:web:228af560ad2d3acb854b36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// app varibale represents Firebase app instance

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);//variable that links to the authentication of my firebase app
export { auth }; //exporting the auth variable so that it can be used in other files