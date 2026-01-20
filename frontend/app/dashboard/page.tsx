"use client";

import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";

export default function DashboardPage() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState<"scheduled" | "sent">("scheduled");
  const [emails, setEmails] = useState<any[]>([]);

  useEffect(() => {
    if (!session?.user?.email) return;

    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/emails/${session.user.email}`
    )
      .then((res) => res.json())
      .then((data) => setEmails(data));
  }, [session]);

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
          {session?.user?.image && (
            <img
              src={session.user.image}
              alt="avatar"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                marginBottom: 8,
              }}
            />
          )}

          <div style={{ fontWeight: "bold" }}>
            {session?.user?.name}
          </div>

          <div style={{ fontSize: 13, color: "#6b7280" }}>
            {session?.user?.email}
          </div>

          <button
            onClick={() => signOut()}
            style={{
              marginTop: 10,
              fontSize: 12,
              cursor: "pointer",
              background: "none",
              border: "none",
              color: "#ef4444",
              padding: 0,
            }}
          >
            Logout
          </button>
        </div>

        {/* Compose */}
        <a href="/compose">
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
        </a>

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
              {emails
                .filter((e) =>
                  activeTab === "scheduled"
                    ? e.status === "scheduled"
                    : e.status === "sent"
                )
                .map((email) => (
                  <tr key={email.id}>
                    <td style={tdStyle}>{email.toEmail}</td>
                    <td style={tdStyle}>{email.subject}</td>
                    <td style={tdStyle}>
                      {new Date(email.scheduledAt).toLocaleString()}
                    </td>
                    <td
                      style={{
                        ...tdStyle,
                        color:
                          email.status === "scheduled"
                            ? "#16a34a"
                            : "#2563eb",
                      }}
                    >
                      {email.status}
                    </td>
                  </tr>
                ))}

              {emails.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    style={{
                      padding: 20,
                      textAlign: "center",
                      color: "#6b7280",
                    }}
                  >
                    No emails found
                  </td>
                </tr>
              )}
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
