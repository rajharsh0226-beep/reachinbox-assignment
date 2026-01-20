export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-4">
        <div className="flex items-center gap-3 mb-8">
          <img
            src="https://i.pravatar.cc/40"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">User Name</p>
            <p className="text-sm text-gray-500">user@email.com</p>
          </div>
        </div>

        <button className="w-full bg-green-600 text-white py-2 rounded-md mb-6">
          Compose
        </button>

        <div className="space-y-2 text-gray-700">
          <div className="font-medium text-green-600">Scheduled</div>
          <div className="hover:text-green-600 cursor-pointer">Sent</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6">Scheduled Emails</h1>

        <div className="bg-white rounded-md shadow">
          <table className="w-full text-left">
            <thead className="border-b">
              <tr>
                <th className="p-3">To</th>
                <th className="p-3">Subject</th>
                <th className="p-3">Scheduled Time</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">test@email.com</td>
                <td className="p-3">Welcome Email</td>
                <td className="p-3">Tomorrow 10:00 AM</td>
                <td className="p-3 text-yellow-600 font-medium">Scheduled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
