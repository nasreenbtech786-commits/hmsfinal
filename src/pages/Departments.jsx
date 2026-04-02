import React from "react";


const Departments = () => {
  return (
    <div className="departments">
      <h2>Our Departments</h2>
      <p className="dept-intro">
        We offer a wide range of medical specialties supported by experienced
        doctors and modern infrastructure.
      </p>

      <div className="dept-grid">
        <div className="dept-card">
          <img src="/images/cardiology.jpg" alt="Cardiology" />
          <h3>Cardiology</h3>
          <p>Diagnosis and treatment of heart-related diseases.</p>
        </div>

        <div className="dept-card">
          <img src="/images/neurology.jpg" alt="Neurology" />
          <h3>Neurology</h3>
          <p>Care for disorders of the brain and nervous system.</p>
        </div>

        <div className="dept-card">
          <img src="/images/orthopedics.jpg" alt="Orthopedics" />
          <h3>Orthopedics</h3>
          <p>Treatment of bones, joints, and musculoskeletal issues.</p>
        </div>

        <div className="dept-card">
          <img src="/images/pediatrics.jpg" alt="Pediatrics" />
          <h3>Pediatrics</h3>
          <p>Comprehensive healthcare for infants and children.</p>
        </div>

        <div className="dept-card">
          <img src="/images/gynecology.jpg" alt="Gynecology" />
          <h3>Gynecology</h3>
          <p>Women’s health, maternity, and reproductive care.</p>
        </div>

        <div className="dept-card">
          <img src="/images/radiology.jpg" alt="Radiology" />
          <h3>Radiology</h3>
          <p>Advanced imaging and diagnostic services.</p>
        </div>
      </div>
    </div>
  );
};

export default Departments;