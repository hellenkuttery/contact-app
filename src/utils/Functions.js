import firebase from "./firebase";
import { getDatabase, set, ref, push,onValue, remove } from "firebase/database";
import { useEffect,useState } from "react";
// Bilgiler eklenecek, silinecek düzelme işlemi yapılacak

// bilgi Ekleme

export const addInfo = (info) => {
  const db = getDatabase();
  const userRef = ref(db, "baglanti");
  const newUserRef = push(userRef);
  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });
};

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState();
  const [contactList, setContactList] = useState();

  useEffect(() => {
    setIsLoading(true);
    const db = getDatabase();
    const userRef = ref(db, "baglanti");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const baglantiArray = [];
      for (let id in data) {
        baglantiArray.push({id, ...data[id]});
      }
      setContactList(baglantiArray);
      setIsLoading(false)
    });
  }, []);
 
  return {isLoading,contactList}

};

export const DeleteInfo=(id)=>{
    const db = getDatabase();
    const userRef = ref(db, "baglanti");
    remove(ref(db,"baglanti/"+id))
}