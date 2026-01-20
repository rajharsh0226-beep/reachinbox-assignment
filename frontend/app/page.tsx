export default function LoginPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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

        <button
          style={{
            width: "100%",
            padding: 10,
            background: "#22c55e",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
