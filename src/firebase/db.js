import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore"
import { app } from "./config";

const db = getFirestore(app);

export const getProducts = async (category) => {
    const col = category ? query(collection(db, "items"), where("category", "==", category)) :
        collection(db, "items");

    const documents = await getDocs(col);
    const products = [];

    documents.forEach(doc => {
        products.push(doc.data())
    });

    return products;

}


export const getItem = async (id, setItem) => {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);
    setItem(docSnap.data());
}

export const createOrder = async (order) => {
    try {
    const docRef = await addDoc(collection(db, "orders"), order);
    return docRef.id;
    } catch(e) {
        console.error("Error agregando documento", e);
    }
}