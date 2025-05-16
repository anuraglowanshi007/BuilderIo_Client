export default function Navbar() {
  return (
    <div className="w-full h-16 bg-white shadow px-6 flex items-center justify-between">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="flex items-center space-x-4">
        <button className="bg-blue-500 text-white px-4 py-1 rounded">Logout</button>
      </div>
    </div>
  );
}
