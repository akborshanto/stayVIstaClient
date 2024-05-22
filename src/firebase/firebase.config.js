import { initializeApp } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// }
const firebaseConfig = {
  apiKey: "AIzaSyAxrtLWE3JgsOKMuLRC-2yKcYXtPambh_g",
  authDomain: "stayvistac.firebaseapp.com",
  projectId: "stayvistac",
  storageBucket: "stayvistac.appspot.com",
  messagingSenderId: "16212076509",
  appId: "1:16212076509:web:3772d31d591b5372123834",
  measurementId: "G-YW33SN3LHH"
};

export const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app);