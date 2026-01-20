export default function DashboardPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: 240,
          background: "white",
          padding: 16,
          borderRight: "1px solid #ddd",
        }}
      >
        <p style={{ fontWeight: "bold" }}>User Name</p>
        <p style={{ fontSize: 12, color: "#666" }}>user@email.com</p>

        <button
          style={{
            width: "100%",
            marginTop: 20,
            padding: 10,
            background: "#16a34a",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Compose
        </button>

        <div style={{ marginTop: 30 }}>
          <p style={{ fontWeight: "bold" }}>Scheduled</p>
          <p style={{ color: "#666", marginTop: 8 }}>Sent</p>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: 24 }}>
        <h2>Scheduled Emails</h2>

        <table
          style={{
            width: "100%",
            marginTop: 20,
            borderCollapse: "collapse",
            background: "white",
          }}
        >
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #ddd", padding: 10 }}>
                To
              </th>
              <th style={{ borderBottom: "1px solid #ddd", padding: 10 }}>
                Subject
              </th>
              <th style={{ borderBottom: "1px solid #ddd", padding: 10 }}>
                Time
              </th>
              <th style={{ borderBottom: "1px solid #ddd", padding: 10 }}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: 10 }}>test@email.com</td>
              <td style={{ padding: 10 }}>Welcome</td>
              <td style={{ padding: 10 }}>Tomorrow 10:00</td>
              <td style={{ padding: 10 }}>Scheduled</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
