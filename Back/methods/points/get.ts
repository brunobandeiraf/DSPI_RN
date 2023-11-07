import { getDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { db } from "../../services/firebase.ts";

const getUserPoints = async (userId: string) => {
  try {
    const userDocRef = doc(db, "users", userId);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      const points = userData?.points || 0;

      return points;
    } else {
      throw new Error("Usuário não encontrado");
    }
  } catch (error) {
    console.error("Erro ao obter pontos do usuário:", error);
    throw new Error("Erro ao obter pontos do usuário");
  }
};

export default getUserPoints;