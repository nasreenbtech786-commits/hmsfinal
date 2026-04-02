import React from "react";


const Doctors = () => {
  return (
    <div className="doctors">
      <h2>Our Doctors</h2>
      <p className="doctor-intro">
        Our hospital is proud to have a team of highly qualified and experienced
        doctors dedicated to providing the best medical care.
      </p>

      <div className="doctor-grid">
        <div className="doctor-card">
          <img src="/images/doctor1.jpg" alt="Dr. Rajesh Kumar" />
          <h3>Dr. Rajesh Kumar</h3>
          <p>Cardiologist</p>
        </div>

        <div className="doctor-card">
          <img src="/images/doctor2.jpg" alt="Dr. Anitha Sharma" />
          <h3>Dr. Anitha Sharma</h3>
          <p>Neurologist</p>
        </div>

        <div className="doctor-card">
          <img src="/images/doctor3.jpg" alt="Dr. Vikram Singh" />
          <h3>Dr. Vikram Singh</h3>
          <p>Orthopedic Surgeon</p>
        </div>

        <div className="doctor-card">
          <img src="/images/doctor4.jpg" alt="Dr. Priya Reddy" />
          <h3>Dr. Priya Reddy</h3>
          <p>Pediatrician</p>
        </div>

        <div className="doctor-card">
          <img src="/images/doctor5.jpg" alt="Dr. Suresh Rao" />
          <h3>Dr. Suresh Rao</h3>
          <p>General Physician</p>
        </div>

        <div className="doctor-card">
          <img src="/images/doctor6.jpg" alt="Dr. Kavitha Iyer" />
          <h3>Dr. Kavitha Iyer</h3>
          <p>Gynecologist</p>
        </div>
      </div>
    </div>
  );
};

export default Doctors;