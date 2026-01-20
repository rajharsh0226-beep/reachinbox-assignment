"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"scheduled" | "sent">("scheduled");

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#f4f6f8",
      }}
    >
      {/* SIDEBAR */}
      <div
        style={{
          width: 260,
          background: "#ffffff",
          borderRight: "1px solid #e5e7eb",
          padding: 20,
          boxSizing: "border-box",
        }}
      >
        {/* User */}
        <div style={{ marginBottom: 30 }}>
          <div style={{ fontWeight: "bold" }}>User Name</div>
          <div style={{ fontSize: 13, color: "#6b7280" }}>
            user@email.com
          </div>
        </div>

        {/* Compose */}
        <button
          style={{
            width: "100%",
            padding: "10px 0",
            background: "#22c55e",
            color: "#ffffff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            marginBottom: 30,
          }}
        >
          Compose
        </button>

        {/* Menu */}
        <div style={{ fontSize: 14 }}>
          <div
            onClick={() => setActiveTab("scheduled")}
            style={{
              marginBottom: 12,
              fontWeight: activeTab === "scheduled" ? "bold" : "normal",
              color: activeTab === "scheduled" ? "#16a34a" : "#374151",
              cursor: "pointer",
            }}
          >
            Scheduled
          </div>

          <div
            onClick={() => setActiveTab("sent")}
            style={{
              fontWeight: activeTab === "sent" ? "bold" : "normal",
              color: activeTab === "sent" ? "#16a34a" : "#374151",
              cursor: "pointer",
            }}
          >
            Sent
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div
        style={{
          flex: 1,
          padding: 30,
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ marginBottom: 20 }}>
          {activeTab === "scheduled"
            ? "Scheduled Emails"
            : "Sent Emails"}
        </h2>

        {/* Table */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: 6,
            overflow: "hidden",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: 14,
            }}
          >
            <thead style={{ background: "#f9fafb" }}>
              <tr>
                <th style={thStyle}>To</th>
                <th style={thStyle}>Subject</th>
                <th style={thStyle}>Time</th>
                <th style={thStyle}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>test@email.com</td>
                <td style={tdStyle}>
                  {activeTab === "scheduled"
                    ? "Welcome"
                    : "Project Update"}
                </td>
                <td style={tdStyle}>
                  {activeTab === "scheduled"
                    ? "Tomorrow 10:00"
                    : "Today 9:30 AM"}
                </td>
                <td
                  style={{
                    ...tdStyle,
                    color:
                      activeTab === "scheduled"
                        ? "#16a34a"
                        : "#2563eb",
                  }}
                >
                  {activeTab === "scheduled"
                    ? "Scheduled"
                    : "Sent"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ---------- Styles ---------- */

const thStyle = {
  textAlign: "left" as const,
  padding: "12px 16px",
  borderBottom: "1px solid #e5e7eb",
  color: "#6b7280",
};

const tdStyle = {
  padding: "12px 16px",
  borderBottom: "1px solid #e5e7eb",
};
