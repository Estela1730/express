
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu4j4V0CimlDZIJv33c1cVJjeaaZZCvk4",
  authDomain: "proyecto3c-5f0d7.firebaseapp.com",
  projectId: "proyecto3c-5f0d7",
  storageBucket: "proyecto3c-5f0d7.appspot.com",
  messagingSenderId: "875677734365",
  appId: "1:875677734365:web:48957f971ec8203a001234",
  measurementId: "G-NE59YJFVES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;



