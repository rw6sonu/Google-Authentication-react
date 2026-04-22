import { useState } from "react";
import { resetPassword } from "../service/authService";
import "../index.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await resetPassword(email);
    alert("Reset email sent!");
  };

  return (
    <div className="container">
  <div className="card">
    <h2>Reset Password</h2>

    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />

      <button className="primary">Reset Password</button>
    </form>
  </div>
</div>
  );
}