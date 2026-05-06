
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMXKPdOQCvD_lSP00ioo0WydTpb0MABG0",
  authDomain: "simple-firebase-auth-b82cd.firebaseapp.com",
  projectId: "simple-firebase-auth-b82cd",
  storageBucket: "simple-firebase-auth-b82cd.firebasestorage.app",
  messagingSenderId: "153380944144",
  appId: "1:153380944144:web:c538b66040b968ee368d95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export Auth to use in your Login/Register pages
export const auth = getAuth(app);
export default app;