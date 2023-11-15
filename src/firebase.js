import firebase from 'firebase/app';
import 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyCqgQPeKJN8fLA1dQXCaiOr1-Yxof7CNv8",
  authDomain: "tb-2023-152a9.firebaseapp.com",
  projectId: "tb-2023-152a9",
  storageBucket: "tb-2023-152a9.appspot.com",
  messagingSenderId: "245602649637",
  appId: "1:245602649637:web:1eb76e25a7894ba28721cc",
  measurementId: "G-99JX3Q3JLS"
};

// Initialize Firebase
const analytics = getAnalytics(app);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;