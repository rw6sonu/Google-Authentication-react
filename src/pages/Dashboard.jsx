import { useAuth } from "../context/AuthContext";
import { logout } from "../service/authService";
import "../index.css";

export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <div className="container">
  <div className="card">
    <h2>Dashboard</h2>
    <p>Welcome: {currentUser?.email}</p>

    <button className="danger" onClick={logout}>
      Logout
    </button>
  </div>
</div>
  );
} 