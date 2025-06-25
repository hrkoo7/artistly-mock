import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
    <a href="/" className="text-2xl font-bold text-brand-600">Artistly</a>
    <div className="space-x-4 text-sm font-medium">
      <a href="/artists" className="text-gray-700 hover:text-brand-500">Artists</a>
      <a href="/onboard" className="text-gray-700 hover:text-brand-500">Join</a>
      <a href="/dashboard" className="text-gray-700 hover:text-brand-500">Dashboard</a>
    </div>
  </div>
</nav>
  );
}