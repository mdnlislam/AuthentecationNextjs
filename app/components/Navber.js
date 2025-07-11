"use client";

import Link from "next/link";

const menuItem = [
  { label: "HOME", href: "/" },
  { label: "SETTING", href: "/setting" },
  { label: "ABOUT", href: "/aout" },
  { label: "DESHBOAD", href: "/deshboad" },
];

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wider">MyWebsite</h1>
        <div className="flex gap-6">
          {menuItem.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-yellow-300 font-semibold transition duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
