import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../pages/AuthContext";

const Sidebar = () => {
  const { user } = useAuth();
  const role = user?.role || null;

  return (
    <aside className="menu">
      <h3>Menu</h3>
      <ul>

        {/* PUBLIC MENU */}
        {!role && (
          <>
            <li>
              <NavLink to="/" end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Hospital</NavLink>
            </li>
            <li>
              <NavLink to="/departments">Departments</NavLink>
            </li>
            <li>
              <NavLink to="/doctors">Doctors</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </>
        )}

        {/* ADMIN MENU */}
        {role === "ADMIN" && (
          <>
            <li>
              <NavLink to="/admin" end>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/admin/doctors">Manage Doctors</NavLink>
            </li>
            <li>
              <NavLink to="/admin/patients">Manage Patients</NavLink>
            </li>
            <li>
              <NavLink to="/admin/departments">Departments</NavLink>
            </li>
            <li>
              <NavLink to="/admin/reports">Reports</NavLink>
            </li>
          </>
        )}

        {/* DOCTOR MENU */}
        {role === "DOCTOR" && (
          <>
            <li>
              <NavLink to="/doctor" end>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/doctor/appointments">Appointments</NavLink>
            </li>
            <li>
              <NavLink to="/doctor/patients">Patients</NavLink>
            </li>
            <li>
              <NavLink to="/doctor/prescriptions">Prescriptions</NavLink>
            </li>
            <li>
              <NavLink to="/doctor/profile">Profile</NavLink>
            </li>
          </>
        )}

        {/* PATIENT MENU */}
        {role === "PATIENT" && (
          <>
            <li>
              <NavLink to="/patient" end>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/patient/book">Book Appointment</NavLink>
            </li>
            <li>
              <NavLink to="/patient/history">Medical History</NavLink>
            </li>
            <li>
              <NavLink to="/patient/prescriptions">Prescriptions</NavLink>
            </li>
            <li>
              <NavLink to="/patient/profile">Profile</NavLink>
            </li>
          </>
        )}

      </ul>
    </aside>
  );
};

export default Sidebar;
