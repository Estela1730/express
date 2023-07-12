
  import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import app  from "./"
  import { doc, setDoc } from "firebase/firestore";
  import db from "./database";


  function login(email, password) {
  }
function register (paramas) {
 const (email,password,displayname)
 const auth = getAuth(app);
 createUserWithEmailAndPassword(auth,email,password)
}

    
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      setDoc(doc(db, "profiles", user.uid), 
      {
        email,
        uid: user.uid
        displayname
      });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  
  
export {login}

