import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD48-Sxoim2_T6lYKbRPlMjWbS8DoalV6M",
  authDomain: "royalbites-6d123.firebaseapp.com",
  projectId: "royalbites-6d123",
  storageBucket: "royalbites-6d123.firebasestorage.app",
  messagingSenderId: "288095965277",
  appId: "1:288095965277:web:1519f1e8cce390f1e43db4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;