import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { db } from "../../services/firebase.ts";

const createUserDoc = async (name: string, userId: string, email: string) => {
    try {
        const userDocRef = doc(db, "users", userId);
    
        await setDoc(userDocRef, {
          name,
          email,
          points: 0
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export default createUserDoc