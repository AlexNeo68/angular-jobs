import { Employee, Recruiter } from "app/models/backend/user/roles";
import { FieldValue } from "firebase/firestore";

export interface User {
  uid: string;
  name: string;
  photoUrl: string;
  email: string;
  country: string;
  about?: string;
  roleId: string;
  role: Employee | Recruiter;
  created: FieldValue;
  updated?: FieldValue;
}
