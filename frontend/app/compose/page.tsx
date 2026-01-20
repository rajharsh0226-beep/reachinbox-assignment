"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

export default function ComposePage() {
  const { data: session } = useSession();

  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [sendAt, setSendAt] = useState("");

  const handleSubmit = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/emails`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to,
          subject,
          body,
          sendAt,
          userEmail: session?.user?.email,
        }),
      }
    );

    alert("Email scheduled");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f4f6f8", padding: 40 }}>
      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
          background: "#ffffff",
          padding: 24,
          borderRadius: 8,
        }}
      >
        <h2 style={{ marginBottom: 20 }}>Compose Email</h2>

        <input
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 12 }}
        />

        <input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 12 }}
        />

        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={6}
          style={{ width: "100%", padding: 10, marginBottom: 12 }}
        />

        <input
          type="datetime-local"
          value={sendAt}
          onChange={(e) => setSendAt(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 20 }}
        />

        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: 12,
            background: "#22c55e",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Schedule Email
        </button>
      </div>
    </div>
  );
}
