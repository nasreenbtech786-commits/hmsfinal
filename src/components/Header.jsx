import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../pages/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [isLight, setIsLight] = useState(
    localStorage.getItem("theme") !== "dark"
  );

  useEffect(() => {
    if (isLight) {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  }, [isLight]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="header">
      <h1>Hospital Management System</h1>

      <nav className="header-actions">
        <button className="nav-btn" onClick={() => setIsLight(!isLight)}>
          {isLight ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>

        {!user ? (
          <>
            <button className="nav-btn" onClick={() => navigate("/login")}>Login</button>
            <button className="nav-btn" onClick={() => navigate("/signup")}>Sign Up</button>
          </>
        ) : (
          <button className="nav-btn logout-btn" onClick={handleLogout}>Logout</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
