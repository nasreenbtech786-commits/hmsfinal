const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>

      <div className="dashboard-grid">
        <div className="card">👨‍⚕️ Doctors: 25</div>
        <div className="card">🧑‍🤝‍🧑 Patients: 120</div>
        <div className="card">📅 Appointments Today: 32</div>
        <div className="card">🏥 Departments: 6</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
