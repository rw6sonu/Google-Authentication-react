import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdLXn3UUvMnZWldP3d9GvnpiKZA6Ff-QM",
  authDomain: "auth-app-5d6f0.firebaseapp.com",
  projectId: "auth-app-5d6f0",
  storageBucket: "auth-app-5d6f0.firebasestorage.app",
  messagingSenderId: "672534765681",
  appId: "1:672534765681:web:a82f3d8a5f0ee5eab27bd0"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
export const githubProider = new GithubAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
