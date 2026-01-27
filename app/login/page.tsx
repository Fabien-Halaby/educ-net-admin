"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import LoginForm from "@/components/login/LoginForm";
import { School, TrendingUp, Users, Award } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Chargement...</p>
        </div>
      </div>
    );
  }

  if (user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        <div className="hidden lg:block space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <School className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">EducNet</h1>
              <p className="text-gray-400">Système de Gestion Scolaire</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Gérez votre établissement en toute simplicité
            </h2>
            <p className="text-gray-400 text-lg">
              {"Solution SaaS complète pour la gestion d'écoles à Madagascar"}
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: Users, text: "Gestion des élèves et enseignants" },
              { icon: TrendingUp, text: "Suivi des performances en temps réel" },
              { icon: Award, text: "Rapports et statistiques avancés" },
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <feature.icon className="text-blue-400" size={20} />
                </div>
                <span className="text-gray-300">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
