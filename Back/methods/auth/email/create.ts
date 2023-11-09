import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { auth } from "../../../services/firebase.ts";
import createUserDoc from "../../docs/createUser.ts";

const createEmailAuth = async (name: string, email: string, pass: string, pass2: string) => {
  try {
    if (pass !== pass2) {
      throw new Error("Senhas não coincidem");
    }

    let userId, userEmail;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);

      if (!userCredential || !userCredential.user) {
        throw new Error("Usuário não foi criado corretamente");
      }

      userId = userCredential.user?.uid;
      userEmail = userCredential.user?.email;
    } catch (createUserError) {
      console.error("Erro durante a criação do usuário:", createUserError);
      throw createUserError;
    }

    await createUserDoc(name, userId, userEmail);

    return "create with success";
  } catch (error) {
    console.error("Erro durante a criação do usuário:", error);
    return `Error: ${error.message}`;
  }
};

export default createEmailAuth;
