import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const provider = new GoogleAuthProvider();

export const register = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const resetPassword = (email) =>
  sendPasswordResetEmail(auth, email);

export const updateUserProfile = (data) =>
  updateProfile(auth.currentUser, data);

export const googleLogin = () =>
  signInWithPopup(auth, provider);