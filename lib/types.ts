//! Admin User Data
export interface AdminUser {
  id: number;
  email: string;
  full_name: string;
  role: "admin" | "teacher" | "student" | "parent";
  status: "pending" | "approved" | "rejected";
  phone?: string;
  created_at: string;
  class_name?: string;
}

export interface UsersResponse {
  users: AdminUser[];
  total: number;
}


//! Classes Data
export interface Class {
  id: number;
  name: string;
  level: string;
  section: string;
  capacity: number;
  academic_year: string;
  school_id: number;
  student_count?: number;
}

export interface CreateClassData {
  name: string;
  level: string;
  section: string;
  capacity: number;
  academic_year: string;
}

export type UpdateClassData = CreateClassData