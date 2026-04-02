import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home-container">

      {/* ===== HERO SECTION ===== */}
      <div className="home-hero">
        <h2>Hospital Management System</h2>
        <p>
          A smart, secure, and efficient platform to manage hospital operations
          and improve patient care.
        </p>
      </div>

      {/* ===== ROLE CARDS ===== */}
      <div className="home-features">

        <div className="feature-card">
          <div className="icon admin-icon">🏥</div>
          <h3>Admin</h3>
          <p>
            Control hospital operations, manage doctors, patients,
            departments, and reports from one dashboard.
          </p>
          <Link to="/login" className="feature-link">
            Admin Login
          </Link>
        </div>

        <div className="feature-card">
          <div className="icon doctor-icon">🩺</div>
          <h3>Doctors</h3>
          <p>
            View appointments, access patient records, prescribe medicines,
            and manage schedules easily.
          </p>
          <Link to="/login" className="feature-link">
            Doctor Login
          </Link>
        </div>

        <div className="feature-card">
          <div className="icon patient-icon">👨‍⚕️</div>
          <h3>Patients</h3>
          <p>
            Book appointments, view medical history, download prescriptions,
            and track treatments online.
          </p>
          <Link to="/signup" className="feature-link">
            Patient Registration
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Home;