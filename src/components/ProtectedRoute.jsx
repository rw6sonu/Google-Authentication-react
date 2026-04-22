import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../index.css";

export default function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
}