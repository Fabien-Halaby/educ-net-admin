"use client";

import { Bell, Search } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full pl-12 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 ml-6">
          <button className="relative p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="w-10 h-10 bg-linear-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">
              {user?.full_name?.charAt(0).toUpperCase() || "A"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
