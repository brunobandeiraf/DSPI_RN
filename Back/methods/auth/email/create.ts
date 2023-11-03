import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { auth } from "../../../services/firebase.ts";
import createUserDoc from "../../docs/createUser.ts";

const createEmailAuth = async (name: string, email: string, pass: string, pass2: string) => {
  try {
    if (pass !== pass2) {
      throw new Error("Senhas não coincidem");
    }

    if (pass.length < 6) {
      throw new Error("A senha deve ter pelo menos 6 caracteres");
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email, pass);

    if (!userCredential || !userCredential.user) {
      throw new Error("Usuário não foi criado corretamente");
    }

    const userId = userCredential.user?.uid;
    const userEmail = userCredential.user?.email;

    await createUserDoc(name, userId, userEmail);

    return "create with sucess"
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return new Error(`${errorCode}: ${errorMessage}`);
  }
};

export default createEmailAuth;
