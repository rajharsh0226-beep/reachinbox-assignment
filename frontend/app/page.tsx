export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-[380px]">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

        <button className="w-full flex items-center justify-center gap-2 border rounded-md py-2 mb-4 hover:bg-gray-50">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
          />
          Login with Google
        </button>

        <div className="text-center text-sm text-gray-400 mb-4">
          or sign in through email
        </div>

        <input
          type="email"
          placeholder="Email ID"
          className="w-full border rounded-md px-3 py-2 mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-md px-3 py-2 mb-5"
        />

        <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
          Login
        </button>
      </div>
    </div>
  );
}
