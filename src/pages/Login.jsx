import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../pages/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin") {
      login({ email, role: "ADMIN" });
      navigate("/admin");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) return alert("Invalid credentials");

    login(user);

    if (user.role === "DOCTOR") navigate("/doctor");
    else navigate("/patient");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <h2>Login</h2>

        <form className="auth-form" onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="auth-btn">Login</button>
        </form>

        <p className="switch-auth">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
