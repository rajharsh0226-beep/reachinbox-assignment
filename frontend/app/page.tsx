"use client";

export default function LoginPage() {
  const testBackend = async () => {
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL as string
      );
      const text = await res.text();
      alert(text);
    } catch (err) {
      alert("Backend not reachable");
    }
  };

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
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Login</h2>

        {/* Google Login (UI only for now) */}
        <button
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 16,
            cursor: "pointer",
          }}
        >
          Login with Google
        </button>

        <p style={{ textAlign: "center", fontSize: 12, marginBottom: 12 }}>
          or sign in through email
        </p>

        <input
          placeholder="Email ID"
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        />

        <input
          placeholder="Password"
          type="password"
          style={{ width: "100%", padding: 8, marginBottom: 16 }}
        />

        {/* TEMP: Backend connection test */}
        <button
          onClick={testBackend}
          style={{
            width: "100%",
            padding: 10,
            background: "#22c55e",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Test Backend Connection
        </button>
      </div>
    </div>
  );
}
