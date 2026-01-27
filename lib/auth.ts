import { User } from "./api";

export const getUser = (): User | null => {
  if (typeof window === "undefined") return null;
  
  const userStr = localStorage.getItem("user");
  if (!userStr) return null;
  
  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
};

export const setUser = (user: User): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem("user", JSON.stringify(user));
};

export const getAccessToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("access_token");
};

export const setAccessToken = (token: string): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem("access_token", token);
};

export const isAuthenticated = (): boolean => {
  return !!getAccessToken();
};

export const clearAuth = (): void => {
  if (typeof window === "undefined") return;
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("user");
  sessionStorage.clear();
};

export const logout = (): void => {
  clearAuth();
  if (typeof window !== "undefined") {
    window.location.href = "/login";
  }
};
