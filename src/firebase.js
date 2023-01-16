
import { initializeApp } from "firebase/app"; 
import { getAuth ,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDpe2-IhsEyksQsdWtxEJGOsvnrUuTpqDQ",
    authDomain: "playtube-f2b89.firebaseapp.com",
    projectId: "playtube-f2b89",
    storageBucket: "playtube-f2b89.appspot.com",
    messagingSenderId: "136395083180",
    appId: "1:136395083180:web:36bd26c8a56a7a4e313e09",
    measurementId: "G-MEL3PSVH62"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;