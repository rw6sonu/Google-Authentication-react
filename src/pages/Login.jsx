import { useState } from "react";
import { login, googleLogin } from "../service/authService";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Email Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
  <div className="card">
    <h2>Login</h2>

    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

      <button className="primary">Login</button>
    </form>

    <button className="google" onClick={handleGoogleLogin}>
      Google Login
    </button>

    {/* 👇 ADD THIS */}
    <p style={{ marginTop: "10px" }}>
      Don't have an account?{" "}
      <span
        style={{ color: "blue", cursor: "pointer" }}
        onClick={() => navigate("/register")}
      >
        Register
      </span>
    </p>
  </div>
</div>
  );
}