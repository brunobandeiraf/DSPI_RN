import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";

let envVars;

try {
    envVars = await config();
} catch (error) {
    console.error("Error loading environment variables from .env file:", error.message);
    envVars = Deno.env.toObject();
}

const firebaseConfig = {
    apiKey: envVars.apiKey,
    authDomain: envVars.authDomain,
    projectId: envVars.projectId,
    storageBucket: envVars.storageBucket,
    messagingSenderId: envVars.messagingSenderId,
    appId: envVars.appId,
    measurementId: envVars.measurementId,
};

const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
export const auth = getAuth(firebase);