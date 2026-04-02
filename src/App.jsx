import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutHospital from "./pages/AboutHospital";
import Contact from "./pages/Contact";
import Departments from "./pages/Departments";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import Sihnup from "./pages/Sihnup";
import Home from "./pages/Home";

import { AuthProvider } from "./pages/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// ADMIN PAGES
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageDoctors from "./pages/admin/ManageDoctors";
import ManagePatients from "./pages/admin/ManagePatients";
import AdminDepartments from "./pages/admin/AdminDepartments";
import AdminReports from "./pages/admin/AdminReports";

// DOCTOR PAGES
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";
import DoctorPatients from "./pages/doctor/DoctorPatients";
import DoctorPrescriptions from "./pages/doctor/DoctorPrescriptions";
import DoctorProfile from "./pages/doctor/DoctorProfile";

// PATIENT PAGES
import PatientDashboard from "./pages/patient/PatientDashboard";
import BookAppointment from "./pages/patient/BookAppointment";
import MedicalHistory from "./pages/patient/MedicalHistory";
import PatientPrescriptions from "./pages/patient/PatientPrescriptions";
import PatientProfile from "./pages/patient/PatientProfile";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutHospital />} />
            <Route path="contact" element={<Contact />} />
            <Route path="departments" element={<Departments />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Sihnup />} />

            {/* ADMIN ROUTES */}
            <Route path="admin" element={<ProtectedRoute role="ADMIN"><AdminDashboard /></ProtectedRoute>} />
            <Route path="admin/doctors" element={<ProtectedRoute role="ADMIN"><ManageDoctors /></ProtectedRoute>} />
            <Route path="admin/patients" element={<ProtectedRoute role="ADMIN"><ManagePatients /></ProtectedRoute>} />
            <Route path="admin/departments" element={<ProtectedRoute role="ADMIN"><AdminDepartments /></ProtectedRoute>} />
            <Route path="admin/reports" element={<ProtectedRoute role="ADMIN"><AdminReports /></ProtectedRoute>} />

            {/* DOCTOR ROUTES */}
            <Route path="doctor" element={<ProtectedRoute role="DOCTOR"><DoctorDashboard /></ProtectedRoute>} />
            <Route path="doctor/appointments" element={<ProtectedRoute role="DOCTOR"><DoctorAppointments /></ProtectedRoute>} />
            <Route path="doctor/patients" element={<ProtectedRoute role="DOCTOR"><DoctorPatients /></ProtectedRoute>} />
            <Route path="doctor/prescriptions" element={<ProtectedRoute role="DOCTOR"><DoctorPrescriptions /></ProtectedRoute>} />
            <Route path="doctor/profile" element={<ProtectedRoute role="DOCTOR"><DoctorProfile /></ProtectedRoute>} />

            {/* PATIENT ROUTES */}
            <Route path="patient" element={<ProtectedRoute role="PATIENT"><PatientDashboard /></ProtectedRoute>} />
            <Route path="patient/book" element={<ProtectedRoute role="PATIENT"><BookAppointment /></ProtectedRoute>} />
            <Route path="patient/history" element={<ProtectedRoute role="PATIENT"><MedicalHistory /></ProtectedRoute>} />
            <Route path="patient/prescriptions" element={<ProtectedRoute role="PATIENT"><PatientPrescriptions /></ProtectedRoute>} />
            <Route path="patient/profile" element={<ProtectedRoute role="PATIENT"><PatientProfile /></ProtectedRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
