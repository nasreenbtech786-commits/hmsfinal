import { useState } from "react";

const doctorsData = {
  Cardiology: ["Dr. Rajesh Kumar", "Dr. Meena Patel"],
  Neurology: ["Dr. Anitha Sharma"],
  Orthopedics: ["Dr. Vikram Singh"],
  Pediatrics: ["Dr. Priya Reddy"],
};

const BookAppointment = () => {
  const [form, setForm] = useState({
    patientName: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    reason: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.patientName || !form.department || !form.doctor || !form.date || !form.time) {
      setMessage("⚠️ Please fill all required fields.");
      return;
    }

    setMessage("✅ Appointment booked successfully!");
    setForm({
      patientName: "",
      department: "",
      doctor: "",
      date: "",
      time: "",
      reason: "",
    });
  };

  return (
    <div>
      <h2>Book Appointment</h2>

      <div className="section">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            value={form.patientName}
            onChange={handleChange}
          />

          <select
            name="department"
            value={form.department}
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Orthopedics</option>
            <option>Pediatrics</option>
          </select>

          <select
            name="doctor"
            value={form.doctor}
            onChange={handleChange}
            disabled={!form.department}
          >
            <option value="">Select Doctor</option>
            {form.department &&
              doctorsData[form.department].map((doc, i) => (
                <option key={i}>{doc}</option>
              ))}
          </select>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
          />

          <textarea
            name="reason"
            placeholder="Reason for visit"
            rows="3"
            value={form.reason}
            onChange={handleChange}
          />

          <button type="submit">Book Appointment</button>
        </form>

        {message && (
          <p style={{ marginTop: "15px", fontWeight: "bold" }}>{message}</p>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
