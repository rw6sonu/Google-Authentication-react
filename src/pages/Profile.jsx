import { useState } from "react";
import { updateUserProfile } from "../service/authService";
import "../index.css";

export default function Profile() {
  const [name, setName] = useState("");

  const handleUpdate = async () => {
    await updateUserProfile({ displayName: name });
    alert("Profile Updated");
  };

  return (
    <div className="container">
  <div className="card">
    <h2>Update Profile</h2>

    <input onChange={(e) => setName(e.target.value)} placeholder="Enter name" />

    <button className="success" onClick={handleUpdate}>
      Update
    </button>
  </div>
</div>
  );
}