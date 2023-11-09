import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";

const envVars = await config()

const firebaseConfig = {
    apiKey: "AIzaSyB4Qn02WLefQ-MHgcFMNt8XGkv6f97ZlZA",

    authDomain: "champlibras.firebaseapp.com",
  
    projectId: "champlibras",
  
    storageBucket: "champlibras.appspot.com",
  
    messagingSenderId: "129222075830",
  
    appId: "1:129222075830:web:935f383fe88af958c3cd17",
  
    measurementId: "G-7CLFE1Y9JE"  
};
  
const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
export const auth = getAuth(firebase);