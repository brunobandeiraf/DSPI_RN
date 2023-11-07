import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { auth } from "../../../services/firebase.ts";

const loginUserAuth = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    if (!userCredential || !userCredential.user) {
      throw new Error("Falha ao fazer login");
    }

    const userId = userCredential.user?.uid;
    const userEmail = userCredential.user?.email;
    const userName = userCredential.user?.name;

    return { userId, userEmail, userName };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    throw new Error(`${errorCode}: ${errorMessage}`);
  }
};

export default loginUserAuth;