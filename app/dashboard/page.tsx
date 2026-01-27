"use client";

import { useAuth } from "@/contexts/AuthContext";
import { CheckCircle } from "lucide-react";

export default function DashboardPage() {
  const { user, loading } = useAuth();

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">
          Bienvenue, {user.full_name?.split(" ")[0]} ! 👋
        </h1>
        <p className="text-blue-100">
          Vous êtes connecté en tant que <span className="font-semibold capitalize">{user.role}</span>
        </p>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <CheckCircle className="text-green-400" size={24} />
          {"Informations de l'utilisateur"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400 text-sm mb-1">ID</p>
            <p className="text-white font-semibold">{user.id}</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400 text-sm mb-1">Nom complet</p>
            <p className="text-white font-semibold">{user.full_name}</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400 text-sm mb-1">Email</p>
            <p className="text-white font-semibold">{user.email}</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400 text-sm mb-1">Rôle</p>
            <p className="text-white font-semibold capitalize">{user.role}</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400 text-sm mb-1">Statut</p>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
              {user.status}
            </span>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400 text-sm mb-1">ID École</p>
            <p className="text-white font-semibold">{user.school_id}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
