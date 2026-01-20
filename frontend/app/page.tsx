"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f6f8",
      }}
    >
      <div
        style={{
          width: 360,
          background: "#fff",
          padding: 24,
          borderRadius: 8,
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 24 }}>
          Login to ReachInbox
        </h2>

        {/* Google Login */}
        <button
          onClick={() => signIn("google")}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 16,
            cursor: "pointer",
            border: "1px solid #e5e7eb",
            background: "#fff",
          }}
        >
          Login with Google
        </button>

        <p
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "#6b7280",
          }}
        >
          Secure login using your Google account
        </p>
      </div>
    </div>
  );
}
