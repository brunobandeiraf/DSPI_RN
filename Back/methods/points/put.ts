import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { db } from "../../services/firebase.ts";

const addUserPoints = async (userId: string, pointsToAdd: number) => {
  try {
    const userDocRef = doc(db, "users", userId);

    await updateDoc(userDocRef, {
      points: pointsToAdd,
    });

    return `Pontos adicionados com sucesso. Novo total de pontos: ${pointsToAdd}`;
  } catch (error) {
    console.error("Erro ao adicionar pontos do usuário:", error);
    throw new Error("Erro ao adicionar pontos do usuário");
  }
};

export default addUserPoints;