import { useState } from "react";
import { register, googleLogin } from "../service/authService";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

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
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <button className="primary">Register</button>
        </form>

        <button className="google" onClick={handleGoogleLogin}>
          Sign in with Google
        </button>

        {/* Navigation */}
        <p className="link">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
}